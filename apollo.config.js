require('dotenv/config')


module.exports = {
    service: {
        endpoint: {
            url: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
            skipSSLValidation: true,
        }
    }
}