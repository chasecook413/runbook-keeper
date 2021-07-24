import {Express} from "express";
import UserApi from "./userApi";
import RunbookApi from "./runbookApi";
import StatusApi from "./statusApi";

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
    }
}

export default Routes;
