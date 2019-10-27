# manavkohli.github.io

This repository contains the code for my personal website. To run the project
locally, first install dependencies:

```bash
$ npm install
```

To serve the project in development mode/test:

```bash
$ npm start
$ npm test
```

And finally, to deploy changes to the `gh-pages` branch:

```bash
$ npm run deploy
```
To get around Github's limitation of using the `master` branch for the source
for a personal page, you need to force merge the `gh-pages` branch into master
after each deploy.

```bash
git push origin gh-pages:master --force
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
