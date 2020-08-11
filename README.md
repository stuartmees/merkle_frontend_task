# Merkle Frontend Task - Stuart Mees

* To navigate the CORS errors being thrown up by the browser, when making HTTP requests to the external API, a small backend flask API was made. Requests from the front end were made to the backend and then that made the requests the external API, so avoiding the browser CORS error.

* run `pipenv install` to install API dependencies
* run `npm install` to install front end dependencies

* run `pipenv run flask run` to start up API.
* run `npm start` load of the dev server for the front end.

* navigate to 'http://localhost:8080/#/' in your browser - note the '#' as the frontend uses HashRouter.

    - if the port number detailed in your terminal is different to 8080 then substitute it in to the url.

    - Also if this is the case you will need to change the proxy port in webpack.config.js:
```
    proxy: {
        port: 8080,
        .
        .
    }
```


NB: If you do not have pipenv installed go to : [pypi.org/project/pipenv/](https://pypi.org/project/pipenv/) 