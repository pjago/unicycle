%u = relay(u_anterior, erro, dmax, dmin, eps)

function u = relay(u_anterior, erro, dmax, dmin, eps)
    %easy
    u =   (erro      >  +eps).*dmax ...
        + (erro      <  -eps).*dmin ...
        + (abs(erro) <= +eps).*u_anterior;
end