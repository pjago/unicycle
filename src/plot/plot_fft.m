%https://www.mathworks.com/help/matlab/ref/fft.html
function fmax = plot_fft(X, Fs, varargin)
    X(isnan(X)) = [];
    L = length(X);
    M = floor(L/2);
    Y = fft(X - repmat(mean(X, 2), 1, size(X, 2)));
    P2 = abs(Y/L);
    P1 = P2(1:M+1);
    p = max(P1);
    P1(2:end-1) = P1(2:end-1)/p(end);
    P1(P1 > 1) = 0;
    f = Fs*(0:M)/L;    
    if nargout == 0
        plot(f,P1,varargin{:}) 
        title('Fourier Normalizado (AC)')
        xlabel('f (Hz)')
        ylabel('| FFT |')
    end
    [~, index] = max(P1);
    fmax = f(index);
end