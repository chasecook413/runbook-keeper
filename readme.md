
## Runbook-Keeper

An app for storing, displaying, and notifying runbooks for your devops workflow. 

### Dependencies:
* [Typescript](https://www.typescriptlang.org/docs/) + [Express](https://expressjs.com/en/4x/api.html)
* [MongoDB](https://docs.mongodb.com/)
* [Redis](https://redis.io/documentation)

### Running with Docker Compose

The app can be run locally using [docker-compose](https://docs.docker.com/compose/). The first time, you'll want to run the build step:

    docker-compose build

After that point, the app, as well as its dependencies, can be started using:

    docker-compose up

The app uses nodemon and ts-node to detect changes and update them immediately to speed up development.
Everything can be brought down with:

    docker-compose down

### Runbook API:
   
See the [Open API 3.0 definition](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/chasecook413/runbook-keeper/main/docs/api-def.yaml).
