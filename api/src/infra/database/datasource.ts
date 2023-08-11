import { DataSource } from "typeorm"
import { DatabaseConnectionTestConfiguration } from "../../../typeorm.config"

export default new DataSource(DatabaseConnectionTestConfiguration)