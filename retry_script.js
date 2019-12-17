const locatunnel = require('./localtunnel')
const debug = require('debug')('script')

require('debug').enable('*')

function main() {
    try{
        locatunnel({
            port: 2000,
            host: 'http://lt.imcks.cn:2000',
            subdomain: 'phs-remote'
        })
    } catch(e) {
        debug('retry...', e)
        setTimeout(main, 3000);
    }
}

main()
