%[kp, td, ti] = astron(Ku, Tu, alpha)

function [kc, td, ti] = zigler_nichols(Ku, Tu, alpha)
    kc = 0.6*Ku;
    ti = 0.5*Tu;
    td = alpha*ti;
end