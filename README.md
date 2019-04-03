# CanSat presentation web
Presentation website for our CanSat project. Checkout https://www.charles4th.cz.

![alt text](https://github.com/charles-the-forth/presentation-web/blob/master/web-screenshot.png?raw=true "Web header screenshot")


## Requirements

- `yarn`
- `firebase tools`

## Local server

Run `yarn start` to start local development server. Your server will run on `http://localhost:8080/`.

## Deployment

Login to your Firebase project and run these commands for deployment:

```
yarn build
firebase deploy --only hosting
```