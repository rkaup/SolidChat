// TODO This way of populating the database might not work well with Mongoose.
//      Consider doing this differently.
db.users.save({'username': 'exampleuser'});
db.users.save({'username': 'sampleuser'});

