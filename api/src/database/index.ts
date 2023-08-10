import AppDataSource from "./datasource"

async function initializeDataSource() {
    try {
        const appDataSource = await AppDataSource.initialize();
        console.log(`Data Source has been initialized`);
        return appDataSource;
    } catch (err) {
        console.error(`Data Source initialization error `, err);
    }
}

const connection = initializeDataSource();

export default connection;