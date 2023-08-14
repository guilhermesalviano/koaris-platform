import { DataSource } from "typeorm"
import { connection } from "../../../typeorm.config"

export default new DataSource(connection)