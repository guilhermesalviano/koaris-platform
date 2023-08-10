require('dotenv').config();

import { DataSourceOptions } from 'typeorm';

const port: number = Number.parseInt(process.env.MYSQL_PORT || '8080');

const DatabaseConnectionConfiguration: DataSourceOptions = {
    name: process.env.MYSQL_TEST_NAME,
    type: 'mysql',
    host: process.env.MYSQL_HOST_TEST,
    port: port,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB_TEST,
    synchronize: true,
    dropSchema: true,
    logging: true,
    logger: 'file',
    entities: [__dirname + '/**/*.ts'],
    migrations: [__dirname + '/**/*.{js,ts}'],
    subscribers: [__dirname + '/**/*.{js,ts}']
}

const DatabaseConnectionTestConfiguration: DataSourceOptions = {
    type: "sqlite",
    database: __dirname + "/src/database/database.sqlite",
    entities: [__dirname + "/src/entities/**.{js,ts}"],
    migrations: [__dirname + "/src/database/migrations/**.{js,ts}"]
}

export { DatabaseConnectionConfiguration, DatabaseConnectionTestConfiguration };