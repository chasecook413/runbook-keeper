
## Runbook-Keeper

An app for storing, displaying, and notifying runbooks for your devops workflow. 

### Dependencies:
* Typescript + Express
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
    