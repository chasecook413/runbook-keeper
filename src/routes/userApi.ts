import express from "express";
import logger from "../util/logger";

class UserApi {
    static get(req: express.Request, res: express.Response) {
        logger.debug("UserApi.get called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

    static create(req: express.Request, res: express.Response) {
        logger.debug("UserApi.create called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

    static update(req: express.Request, res: express.Response) {
        logger.debug("UserApi.update called");
        res.status(200).json({
            message: 'placeholder',
        });
    }

    static delete(req: express.Request, res: express.Response) {
        logger.debug("UserApi.delete called");
        res.status(200).json({
            message: 'placeholder',
        });
    }
}

export default UserApi;
