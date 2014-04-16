print('making indexes for collection "users"');
db.users.ensureIndex({'username': 1}, {unique: true});

print('done');

