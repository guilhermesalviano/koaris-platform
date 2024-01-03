import app from "./app";

import "./infra/database";

app.listen(3333, () => console.log("Server is running on port 3333"))