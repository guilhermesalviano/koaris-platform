import express from 'express';

import "./database";

const app = express()

app.get("/status", (request, response) => {
    return response.sendStatus(204).json({
        message: "OK"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"))