%addr: host location
%varargin: cell of fields cells
%[t, d] = read('http://time.jsontest.com/', {{'time'}}, {{'date' {4:5}} {'date' {1:2}}})

function [varargout] = read(addr, varargin)
    tags = webread(addr);
    if nargin == 1
        varargout{1} = tags;
    end
    for k = 1:length(varargin)
        in = varargin{k};
        out = [];
        for n = 1:length(in)
            out = [out; getfield(tags, in{n}{:})];
        end
        varargout{k} = out;
    end
end