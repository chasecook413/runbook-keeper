import express from "express";

class StatusApi {
    static get(req: express.Request, res: express.Response) {
        res.status(200).json({
            status: 'running',
        });
    }
}

export default StatusApi;
