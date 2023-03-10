import express, { Application } from "express";
require("dotenv").config();
const dbConnect = require("./config/db");
const userRoute = require("./routes/userRoute");
const swaggerJsdoc=require("swagger-jsdoc")
const swaggerUi=require("swagger-ui-express")

const app: Application = express();
const port: Number = 4001;

app.use("/api/users", userRoute);

const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"User list api doc",
            version:"0.1",
            description:"user list api documentation"
        },
        servers:[
            {
                url:"http://localhost:4001/"
            },
        ],
    },
    apis:["./src/routes/*.ts"]
}

const spacs=swaggerJsdoc(options)
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(spacs)
)

dbConnect;
app.listen(port, () => {
  console.log(`connected successffully on port ${port}`);
});
