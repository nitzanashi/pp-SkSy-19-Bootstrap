## INSTALL

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. We’ll use nodemon when running our Node.js server in the next steps

```
npm install -g nodemon
```


## Start the APP

```
npx nodemon server
```

## CRUD API ##
| HTTP METHOD | POST             | GET       | PUT         | DELETE |
| ----------- | ---------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE           | READ      | UPDATE      | DELETE |
| /todos      | Create new todo  | List todo | Error       | Error  |
| /todos/86   | Error            | Show Bo   | If exists, update Bo; If not, error | Delete Bo |