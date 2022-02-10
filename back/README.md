# Project 3 - JEED

## Template for Node/Express server usage :

### Install dependency 
- ```npm install```

### Connect your database
- ```cp .env-sample .env``` and add your access db

### Run Server 
- ```npm start```

### Entrypoint available :
- 'http://localhost:8000/home'
- 'http://localhost:8000/security/registration'
- 'http://localhost:8000/security/login'

### Create your own entrypoints (following MVC architecture)

### Tools

#### Eslint

[ESlint](https://eslint.org/) help you to find and fix problems in your JavaScript code.

You can launch eslint with :
```shell
npm run lint
```

Eslint is configured with [Husky](https://typicode.github.io/husky/#/) to be triggered in the `pre-commit` git hook.

#### tips: in folder models/ you have an example for a complete CRUD Entity
