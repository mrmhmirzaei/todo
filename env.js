module.exports = {
    host: 'karamozi.ghoghnoosit.ir',
    port: 3000,
    auth: {
        key: 'LHDK5bekAHJOFfXXzkd5uR/AoLBNPDNLIMAK8M0xss8=',
        access_token_expire: 86400000,
        refresh_token_expire: 86400000 * 24
    },
    crypto: {
        key: 'LHDK5bekAHJOFfXXzkd5uR/AoLBNPDNLIMAK8M0xss8=',
        algorithm: "aes-256-cbc"
    },
    token: {
        difficulty: 5,
        possible: "0123456789",
        expire: 86400000
    },
    cache: {
        expire: 86400000
    },
    email: {
        service: 'gmail',
        auth: {
            user: 'mr.mhmirzaei@gmail.com',
            pass: 'M1rz@e1811379'
        }
    },
    sms: {
        enable: true,
        number: "10000000007997",
        key: "697fe95f8e977799ac046e45d302a6170badbc82e9bb76a1a806e7dc32bbf10f"
    },
    database: 'mongodb://localhost:27017/todo'
}