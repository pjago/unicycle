%[kp, td, ti] = astron(rb/ra, 0b - 0a, wr, alpha)

function [kp, td, ti] = astron(gain, phase, w_rele, alpha)
    kp = gain*cos(phase);
    ti = (1/(2*alpha*w_rele))*(tan(phase) + sqrt(4*alpha + tan(phase)^2));
    td = alpha*ti;
end