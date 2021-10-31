# Getting Started with the Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To locally run the application follow the below instructions:

- Step 1: Copy the project locally
- Step 2: Import all the node modules by running `npm install` in your root directory.
- Step 3: create a new environment file (`.env`) in the root direction `pexels-image-gallery/`. **Note:** If you are running node in development enviornment then create `.env.development` instead of `.env`.
- Step 4: Create your [Pexel API Key](https://www.pexels.com/api/).
- Step 5: Copy the api key and store it in the `.env`/`.env.development` file.
  Your env file should look something like this:

```
// Pexels API Key
REACT_APP_PEXELS_API_KEY=<your key>
```

- Step 6: Start the application by running `npm start` or `yarn start`
- Your application should run [here](http://localhost:3000/)

Troubleshoot:
Incase the the node modules fails to import try using the lates stable node version prior to installing the node modules. You can do that using `nvm use --lts` if you have nvm installed.
