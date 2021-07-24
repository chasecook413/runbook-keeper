import express from "express";
import logger from "../util/logger";

class RunbookApi {

    static get(req: express.Request, res: express.Response) {
        logger.debug("RunbookApi.get called");
        res.status(200).json({
            message: 'placeholder',
        });
    }
    static create(req: express.Request, res: express.Response) {
        logger.debug("RunbookApi.create called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

    static update(req: express.Request, res: express.Response) {
        logger.debug("RunbookApi.update called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

    static delete(req: express.Request, res: express.Response) {
        logger.debug("RunbookApi.delete called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

}

export default RunbookApi;