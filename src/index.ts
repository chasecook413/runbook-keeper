import express from 'express';
import {connect} from 'mongoose';
import logger from "./util/logger";
import Routes from "./routes/routeDefinition";


async function main() {
    const app = express();
    const API_PORT = process.env.API_PORT || 3000;

    const MONGO_CONNECT_URL = process.env.MONGO_CONNECT_URL || 'mongodb://mongo:27017';
    try {
        await connect(MONGO_CONNECT_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (mongoConnectError) {
        logger.emerg(`Error connecting to MongoDB: ${mongoConnectError.stack}`);
        throw mongoConnectError;
    }

    Routes.setRoutes(app);
    app.listen(API_PORT, () => {
        logger.debug(`server running on port ${API_PORT}`);
    });
}

main();
