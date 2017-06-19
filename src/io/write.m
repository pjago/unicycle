%addr: host location string
%varargin: same as webwrite (w/o options)

function query = write(addr, varargin)
    opt = weboptions('MediaType', 'application/edn');
    if length(varargin) == 1
        query = ['[(' varargin{:} ')]'];
    else
        dispatch = {varargin{end} 'tag/act'};
        call = dispatch{mod(nargin, 2) + 1};
        query = ['[(' call ' {'];
        for k = 1:2:(length(varargin)-1)
            query = [query ... 
                     ':' varargin{k} ' ' ... 
                     toString(varargin{k + 1}, 'compact') ' '];
        end
        query = [query(1 : end - 1), '})]'];
    end
    webwrite(addr, query, opt);
end