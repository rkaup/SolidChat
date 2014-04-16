Before running `grunt serve`, make sure mongod is running on port 27017.

Do not the use angular:\* generators. Use the angular-fullstack:\* ones
instead.

Before running the server for the first time, check in
`lib/config/env/development.js` what database is used. Then run

    $ mongo <database> ./script/setup-db.mongo.js

If you want, also do

    $ mongo <database> ./script/populate-db.mongo.js

to quickly populate the database.

