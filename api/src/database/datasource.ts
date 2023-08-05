import { DataSource } from "typeorm"
import { SpannerConnectionOptions as Options } from "typeorm/driver/spanner/SpannerConnectionOptions"
import * as orm from "../../ormconfig.json"

export default new DataSource(orm as Options)