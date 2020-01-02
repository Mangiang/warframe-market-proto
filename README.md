# Warframe-market-proto
Get the best relic to sell at any given time \
⚠ Work in progress ⚠
- development [![Build Status](https://travis-ci.org/Mangiang/warframe-market-proto.svg?branch=master)](https://travis-ci.org/Mangiang/warframe-market-proto)

## Summary
- This is a full stack app based on [Flask](https://flask.palletsprojects.com/en/1.1.x/) and [ReactJS](https://reactjs.org/)
- [Backend](#backend)
    - [Development Prerequisites](#backend-development-prerequisites)
    - [Setup](#backend-setup)
    - [Run project](#backend-run-project)
    - [Tests](#backend-tests)
- [Frontend](#frontend)
    - [Development Prerequisites](#frontend-development-prerequisites)
    - [Setup](#frontend-setup)
    - [Run development project](#frontend-run-development-project)
    - [Build development project](#frontend-build-development-project)
    - [Build production project](#frontend-build-production-project)
    - [Analyze last build](#frontend-analyze-last-build)
    - [Tests](#frontend-tests)
- [Continuous Integration/Continuous Deployment](#cicd)

## Backend
⚠ Nothing is displayed unless the frontend is built ⚠
#### Backend development prerequisites
- [Python3.7+](https://www.python.org/downloads/release/python-370/)
- [Pip](https://docs.python.org/3.7/installing/index.html) (should be included by default)

#### Backend setup
- Execute `python -m pip install -r requirements.txt` at the project root

#### Backend run project
- Execute `waitress-serve --port=80 app:app` at the project root
- Open your browser at the given URL

#### Backend tests
No tests yet

## Frontend
⚠ Nothing is displayed unless the backend runs ⚠
#### Frontend development prerequisites
- [NPM](https://blog.teamtreehouse.com/install-node-js-npm-windows) or [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

#### Frontend setup
- NPM : `npm install`
- YARN : `yarn`

#### Frontend run development project
- NPM : `npm run watch`
- YARN : `yarn watch`

#### Frontend build development project
- NPM : `npm run dev-build`
- YARN : `yarn dev-build`

#### Frontend build production project
- NPM : `npm run build`
- YARN : `yarn build`

#### Frontend analyze last build
- NPM : `npm run analyze`
- YARN : `yarn analyze`

#### Frontend tests
No tests yet

## CI/CD

- Tooling :
  - [TravisCI](https://travis-ci.org)
    - Travis script [.travis.yml](.travis.yml)
  - [Docker](https://www.docker.com)
  - [Heroku](https://www.heroku.com)
    - Use the environment variable HEROKU_API_KEY (encrypted in the TravisCI script) to authenticate