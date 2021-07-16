
<p align="center">
    <img  src="https://i.imgur.com/EaT433R.png">
</p>

<h1 align="center">NLW Valoriza - API - NodeJS</h1>

<p align="center">
    <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#setup">Setup</a>

</p>

## About
Project developed on the NextLevelWeek, event hosted by [RocketSeat](https://rocketseat.com.br/)

<hr>


## Technologies
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [TypeORM](https://typeorm.io/#/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Routes
```bash
POST - /users
POST - /tags
POST - /login
POST - /compliment

GET - /users/compliments/send
GET - /users/compliments/received
GET - /tags
GET - /users
```


## Setup

- Install [Node.js](https://nodejs.org/en/)

- Install [Yarn](https://classic.yarnpkg.com/lang/en/)
```bash
# Clone the repository
git clone https://github.com/CarlMartins/nlwValoriza_api.git

# Install the dependencies
$ yarn

# Run the migrations
$ yarn typeorm migration:run

# Run the API service
$ yarn dev
```

## Future updates
- Custom errors
- Environment variables
- Postgree database
- Send email when user receives a compliment

<hr>

<p align="center">
    Made by
    <a href="https://github.com/CarlMartins">Carlos Martins</a>
    -
    <a href="https://www.linkedin.com/in/CarlosMartinsOliveira/">LinkedIn</a>
</p>
