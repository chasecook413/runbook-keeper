import {Express} from "express";
import UserApi from "./userApi";
import RunbookApi from "./runbookApi";
import StatusApi from "./statusApi";

class Routes {
    static setRoutes(app: Express) {
        app.get('/status', StatusApi.get);

        app.get('/runbooks/:id', RunbookApi.get);
        app.post('/runbooks', RunbookApi.create);
        app.put('/runbooks/:id', RunbookApi.update);
        app.delete('/runbooks/:id', RunbookApi.delete);

        app.get('/users/:id', UserApi.get);
        app.post('/users', UserApi.create);
        app.put('/users/:id', UserApi.update);
        app.delete('/users/:id', UserApi.delete);
    }
}

export default Routes;
