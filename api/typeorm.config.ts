import { DataSourceOptions } from 'typeorm';
import "dotenv/config";

// postgresql://docker:docker@localhost:5432/api?schema=public
const port: number = Number.parseInt(process.env.DATABASE_PORT || '80');

const DatabaseConnectionConfiguration: DataSourceOptions = {
    name: process.env.DATABASE_NAME,
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: port,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    dropSchema: true,
    logging: true,
    logger: 'file',
    migrations: [__dirname + "/src/infra/database/migrations/**.{js,ts}"],
    entities: [__dirname + "/src/domain/control-panel/enterprise/entities/**.{js,ts}"]
}

const DatabaseConnectionTestConfiguration: DataSourceOptions = {
    type: "sqlite",
    database: __dirname + "/src/infra/database/database.sqlite",
    migrations: [__dirname + "/src/infra/database/migrations/**.{js,ts}"],
    entities: [__dirname + "/src/domain/control-panel/enterprise/entities/**.{js,ts}"]
}

const DataSourceOptions = (process.env.NODE_ENV === 'production')? DatabaseConnectionConfiguration: DatabaseConnectionTestConfiguration;

export { DataSourceOptions };