# BetterBikeBrussels

## Description

Better Bike Brussels is a Progressive Web App imagined by and made for Brussels citizens to have a safe and hassle-free bike ride in the city.

![Promo](https://user-images.githubusercontent.com/30930211/88786410-c512de80-d192-11ea-89b3-756d0abc3a9e.gif)

Try it [now](https://better-bike-brussels.herokuapp.com)!

## Backend

The base code can be found [here](https://github.com/oSoc20/better-bike-brussels-backend)

## Frontend

BetterBikeBrussels is a NEXT.js app and uses Docker to ease the building and deployment procedure.

### Deployment

As such if you don't want to use docker, you can run it locally using:

#### Requirements

Please note the following requirements:

* Node.JS (^v14.x.x)
* npm (^v6.x.x)

#### Before anything

Clone the github repository and open a terminal in the repository.

Change the `next.config.js` file with the right info, in the case of the main instance:

```js
module.exports = {
    env: {
        APP_NAME: 'BetterBikeBrussels',
        APP_URL: 'https://better-bike-brussels.herokuapp.com',
        SERVER_URL: 'https://better-bike-brussels-backend.herokuapp.com',
        APP_KEY: '',
    },
}
```
#### Set up and launch

```bash
# Install npm dependencies
npm install

# Build website
npm run build

# Start the service
export PORT=3000    # choose your port here
npm run start
```

### Installation from DockerHub

In the image on DockerHub, the `next.config.js` is set for the main instance. This might cause the image not the work properly with other domain names.

![Docker Image Version (latest by date)](https://img.shields.io/docker/v/lavendthomas/betterbikebrussels)

Pull the latest available container, here `20200727`:

```bash
docker pull lavendthomas/betterbikebrussels:20200727
```

Then, launch the container:

```bash
docker run --name betterbikebussels -p 3001:3001 -d <image_id>
```

You can change the port of the Web App by changing the second number of the `-p` option. The default is `3001`.

### Build the Docker container from source

First set a `PORT` environment variable for your desired port.

```bash
export PORT=3001    # choose your port here
```

Do not forget to update the `next.config.js` file.


Once this is done, you can build the docker image:

```bash
docker build -t <your-id>/betterbikebussels .
```

You now have built the container, you can run it:

```bash
docker run --name betterbikebussels -p 3001:3001 -d <your-id>/betterbikebussels
```

The web server is now up and running at the desired port.
