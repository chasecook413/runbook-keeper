import {Express} from "express";
import express from "express"
import UserApi from "./userApi";
import RunbookApi from "./runbookApi";
import StatusApi from "./statusApi";
import {constants} from "http2";

class Routes {
    static setRoutes(app: Express) {
        app.get('/status', StatusApi.get);

        app.get('/runbook/:id', RunbookApi.get);
        app.post('/runbook', RunbookApi.create);
        app.put('/runbook/:id', RunbookApi.update);
        app.delete('/runbook/:id', RunbookApi.delete);

        app.get('/user/:id', UserApi.get);
        app.post('/user', UserApi.create);
        app.put('/user/:id', UserApi.update);
        app.delete('/user/:id', UserApi.delete);

        // TODO: better 404 handler?
        app.use((req: express.Request, res: express.Response) => {
            res.status(constants.HTTP_STATUS_NOT_FOUND).json({
                message: 'this API call does not exist',
            });
        });
    }
}

export default Routes;
