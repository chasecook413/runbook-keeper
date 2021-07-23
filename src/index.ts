import express from 'express';
import logger from "./logger";

const app = express();
const API_PORT = process.env.API_PORT || 3000;

function statusCheck(req: express.Request, res: express.Response) {
    res.status(200).json({
        status: 'running',
    });
}

app.get('/status', statusCheck)

app.listen(API_PORT, () => {
    logger.debug(`server running on port ${API_PORT}`);
});
