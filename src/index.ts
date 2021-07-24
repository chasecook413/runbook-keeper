import express from 'express';
import logger from "./util/logger";
import Routes from "./routes/routeDefinition";

async function main() {
    const app = express();
    const API_PORT = process.env.API_PORT || 3000;

    Routes.setRoutes(app);
    app.listen(API_PORT, () => {
        logger.debug(`server running on port ${API_PORT}`);
    });
}

main();
