    %0. Inicie o servidor unicycle.jar
    %1. Acesse http://localhost:3001/ no chrome e escolha um nome
    %2. Acesse http://localhost:3001/tags em outra aba
    %3. Na aba inicial, interaja com a planta (tag ~ variável)
    %4. Atualize a aba /tags, esse é o ponto de acesso para o .m
    %5. Execute goto(nome, 'target') e observe

function [y, r, e, u, pwm] = goto(UID, TAG, varargin)
    addpath(genpath('src'))

    %% I/O config
    PORT = '3001';
    HOST = ['http://127.0.0.1:' PORT '/'];
    ADDR = [HOST 'tags/'];
    OUT  = {{UID 'position' {1:2}} %endereço da saída
            {UID 'yaw'}};
    REF  = {{TAG 'position' {1:2}} %endereço da referência
            {TAG 'yaw'}};
    % read/write
    read_info = @() read([ADDR UID], OUT, REF);
    write_pwm = @(duty) write([ADDR UID], 'value', duty);

    %% REFERÊNCIA
    T = 0.2;        %tempo de amostragem
    n = 50;         %numero de amostras

    %CONTROLE
    init = 3;       %tempo de inicio da atuação
    mode = 4;       %{0: aberta, 1: ganho-1, 2: ganho-kp, 3: relé, 4: pid}
    y0   = read_info();
    zero = zeros(size(y0));

    %RELÉ
    eps  = .2;
    d    = 1;
    doff = 0;       %caso o relé necessite um offset
    dmax = doff + d;
    dmin = doff - d;

    %PID
    kp = 1.880;
    td = 0.185;
    ti = 0.738;

    g0 = kp*(1 + T/(2*ti) +td/T);
    g1 = -kp*(1 + 2*td/T - T/(2*ti));
    g2 = kp*td/T;

    %PWM (sature o pwm aqui)
    fpwm = @(u) u;
              
    %FFT
    fft = 0;       %{0: nao_plota_fft,  1: plota_fft}
    
    %% OPÇÕES DA FUNÇÃO
    if nargin > 2
        mode = varargin{1};
    end
    if nargin > 3
        fft = varargin{2};
    end

    %% LOOP DE CONTROLE
    
    %VALORES INICIAIS
    t    = (1:n)*T;
    ping = nan(size(t));
    r    = nan(size(y0).*[1, n]);
    y    = nan(size(y0).*[1, n]);
    e    = nan(size(y0).*[1, n]);
    u    = nan(size(y0).*[1, n]);
    pwm  = nan(size(fpwm(y0)).*[1, n]);
    
    %LEITURA NO TEMPO t(0)
    time = tic;
    t0 = time;
    [~, r0] = read_info();
    e0 = r0 - y0;
    
    for k = 1:(init - 1)
        %ATUAÇÃO ZERO
        write_pwm(fpwm(zero)');
        ping(k) = toc(time);

        %DELAY
        time = tic;
        while toc(time) < (T - ping(k))
        end
        
        %LEITURA
        time = tic;
        [y(:, k), r(:, k)] = read_info();
        e(:, k) = r(:, k) - y(:, k);
        
        %CONTROLE
        if mode == 3
            u(:, k) = dmin;
        else
            u(:, k) = 0;
        end
        pwm(:, k) = fpwm(zero);
        
    end
    
    %INÍCIO DA ATUAÇÃO
    for k = init:n    
        %ATUAÇÃO
        write_pwm(pwm(:, k - 1)');
        ping(k) = toc(time);

        %DELAY
        time = tic;
        while toc(time) < (T - ping(k))
        end
        
        %LEITURA
        time = tic;
        [y(:, k), r(:, k)] = read_info();
        e(:, k) = r(:, k) - y(:, k);

        %CONTROLE
        switch mode
            case 0
                u(:, k) = r(:, k);
            case 1
                u(:, k) = e(:, k);
            case 2
                u(:, k) = kp*e(:, k);
            case 3
                u(:, k) = relay(u(:, k - 1), e(:, k), dmax, dmin, eps);
            case 4
                u(:, k) = u(:, k - 1) + g0*e(:, k) + g1*e(:, k - 1) + g2*e(:, k - 2);            
        end
        pwm(:, k) = fpwm(u(:, k));
    end
    fprintf('\tElapsed time: %f\n', toc(t0) - toc(time));
    
    %ATUAÇÃO ZERO
    write_pwm(fpwm(zero)');

    %ANÁLISE
    eD = diff(e')'/T;
    eD(:, end + 1) = NaN;
    eI = cumsum(e)*T;

    %% PLOT
    close all
    colormap('default')
    for k = 1:size(r, 1)
        hf = figure(k);
        set(hf,'DefaultFigureWindowStyle','docked')
        ax1 = subplot(2, 1, 1);
        hold on
        grid on
        xlabel('Tempo (s)')
        ylabel('Amostra (?)')
        title(sprintf('variável controlada %d', k))
        stairs(t, y(k,:)', 'LineWidth', 2, 'Color', [0 0.447 0.741]);
        plot(t, r(k,:)', 'r--', 'LineWidth', 2);
        clickableLegend({'y', 'r'})
        ax2 = subplot(2, 1, 2);
        hold on
        grid on
        xlabel('Tempo (s)')
        ylabel('Amostra (?)')
        stairs(t, u(k,:)', 'k', 'LineWidth', 0.5);
        stairs(t, e(k,:)', 'LineWidth', 2, 'Color', [0 0.447 0.741]);
        stairs(t, eD(k,:)', 'LineWidth', 2, 'Color', [0.850 0.325 0.098]);
        stairs(t, eI(k,:)', 'LineWidth', 2, 'Color', [0.9290 0.6940 0.1250]);
        if mode == 3
            plot(t, zeros(size(t)) + eps, 'r--', 'LineWidth', 2);
            plot(t, zeros(size(t)) - eps, 'r--', 'LineWidth', 2);
        else
            plot(t, zeros(size(t)), 'r--', 'LineWidth', 2);
        end
        clickableLegend({'u', 'e', 'eD', 'eI'})
        linkaxes([ax1 ax2], 'x')
    end

    %FOURIER
    if fft == 1
        for k = 1:size(r, 1)
            hf = figure(size(r, 1) + k);
            set(hf,'DefaultFigureWindowStyle','docked')
            colormap('default')
            hold on
            grid on
            plot_fft(u(k, :), 1/T, 'k');
            plot_fft(e(k, :), 1/T, '*');
            plot_fft(eD(k, :), 1/T, '*');
            plot_fft(eI(k, :), 1/T, '*');
            clickableLegend({'u', 'e','eD','eI'})
        end
    end
end