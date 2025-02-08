const convict = require('convict');
const convictValidator = require('convict-format-with-validator');
const { config: dotEnvConfig } = require('dotenv');
const { join } = require('path');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local'

const dotenvPath = join(__dirname, `../.env.${env}`)

dotEnvConfig({ path: dotenvPath })

convict.addFormats(convictValidator)

const conf = convict({
    version: {
        env: 'VERSION',
        format: String,
        default: '1'
    },
    server: {
        host: {
            env: 'HOST',
            format: String,
            default: '0.0.0.0'
        },
        port: {
            env: 'PORT',
            format: Number,
            default: 3002
        },
    },
    database: {
        url: {
            env: 'DATABASE_URL',
            format: String,
            default: ''
        }
    },
}).validate({
    // We do not have access to a logger yet
    // eslint-disable-next-line no-console
    output: console.error,
    allowed: 'strict'
})

const config = conf.get()

module.exports = { config }