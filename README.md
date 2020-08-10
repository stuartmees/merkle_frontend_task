# merkle_frontend_task

* run `pipenv install` to install API dependencies
* run `npm install` to install front end dependencies
* run `pipenv run flask run` to start up API.
* run `npm start` load of the dev server for the front end.
* navigate to 'http://localhost:8080/#/' in your browser.
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