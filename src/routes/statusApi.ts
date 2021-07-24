import express from "express";
import {constants} from "http2";

class StatusApi {
    static get(req: express.Request, res: express.Response) {
        res.status(constants.HTTP_STATUS_OK).json({
            status: 'running',
        });
    }
}

export default StatusApi;
