function solve(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let uri = /^([\w\d\.]+|\*)$/g;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let messages = /^([^<>\\&'"]*)$/g;

    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.hasOwnProperty('uri') || !uri.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!obj.hasOwnProperty('message') || !messages.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})