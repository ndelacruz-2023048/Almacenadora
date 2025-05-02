import { initServer } from "./configs/app.js";
import { config } from "dotenv";
import { connect } from "./configs/mongo.js";
import { initAdmin } from "./configs/init.configs.js";

config()
connect()
initServer()
initAdmin()