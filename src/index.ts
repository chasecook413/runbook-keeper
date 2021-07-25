import express from 'express';
import {connect} from 'mongoose';
import logger from "./util/logger";
import Routes from "./routes/routeDefinition";

async function main() {
    const app = express();
    const API_PORT = process.env.API_PORT || 3000;
    const MONGO_CONNECT_URL = process.env.MONGO_CONNECT_URL || 'mongodb://mongo:27017';
    const REDIS_CONNECT_HOST = process.env.REDIS_CONNECT_HOST || 'tcp://redis';
    const REDIS_CONNECT_PORT = process.env.REDIS_CONNECT_PORT ? parseInt(process.env.REDIS_CONNECT_PORT) : 6379;

    await connect(MONGO_CONNECT_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    Routes.setRoutes(app);
    app.listen(API_PORT, () => {
        logger.debug(`server running on port ${API_PORT}`);
    });
}

main().catch((serverError: Error) => {
    logger.emerg(`Fatal error: ${serverError.stack}`);
    throw serverError;
});
