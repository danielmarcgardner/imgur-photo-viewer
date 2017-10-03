# Imgur Photo Viewer Challenge

A coding challenge to build a photo viewer. This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app).

# Getting Started

1. Please fork and clone this repo
2. cd `imgur-photo-viewer`
3. `$ touch .env.development`
4. Visit the [imgur api](https://api.imgur.com/oauth2/addclient) and register the app.
  * Add Application Name
  * Authorization type should be "Anonymous usage without user authorization"
  * Authorized callback url can be http://localhost:3000. It is not used however.
  * Copy the `Client ID`
5. Paste the Client ID into the `.env.development` as such:
  ```
  REACT_APP_IMGUR_AUTH= <YOUR CLIENT ID HERE>
  ```
6. `$ npm start`
7. Enjoy!

# Testing

To view the tests, cd into the root directory run the following command: `$ npm test`. To see the test coverage for the app run: `$ npm test -- --coverage`. This generates a report that can be seen if by running the following command: `$ open coverage/lcov-report/index.html`
