const { PrismaClient } = require( '@prisma/client');
const {config} = require( '../../config');

const client = new PrismaClient({ datasources: { db: { url: config.database.url } } });

module.exports = {client};