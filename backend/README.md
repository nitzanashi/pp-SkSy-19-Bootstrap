## INSTALL

first install the Dependencies
```
npm install
```


## Start the APP
start the server
```
npm start
```

for dev mode
```
npm run devstart
```

## CRUD API ##
| HTTP METHOD | POST             | GET       | PUT         | DELETE |
| ----------- | ---------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE           | READ      | UPDATE      | DELETE |
| /todos      | Create new todo  | List todo | Error       | Error  |
| /todos/86   | Error            | Show Bo   | If exists, update Bo; If not, error | Delete Bo |


## Folder Structure

    .
    ├── bin                       # The application entry point
    ├── config                    # Config for MongoDB
    ├── model                     # DB Model Schema Folder
    ├── routes                    # Routes folder - API
    ├── rules                     # Functions Folder - mostly for the model
    ├── .babelrc                  # configure File for Babel
    ├── app.js                    # our main App file
    ├── CHANGELOG                 
    └── README.md

## Built with:
* [Express-generator](https://expressjs.com/en/starter/generator.html) -  Application generator tool
* [MongoDB](https://www.mongodb.com/) -  Our Database
* [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
* [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
* [Cors](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing Middleware
* [Nodemon](https://www.npmjs.com/package/nodemon) - Automatically restarting the application when file changes/create in the directory.

just a change
