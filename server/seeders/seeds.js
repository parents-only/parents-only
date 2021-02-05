const faker = require('faker');

const db = require('../config/connection');
const { User, Message } = require('../models/index');

function moreLikelyToBeYounger(){
    let initialVal = Math.floor(Math.random() * 10) + 1; 
    if(initialVal<5){
        return Math.floor(Math.random() * 6) + 18;
    }
    else if(initialVal<8){
        return Math.floor(Math.random() * 20) + 24;
    }
    else return Math.floor(Math.random() * 60) + 61;
}

db.once('open', async () => {
  await Message.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 200; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    // const lat = faker.address.latitude();
    // const lon = faker.address.longitude();
    const bio = faker.lorem.sentences(3);
    const avatar = faker.internet.avatar();
    const age = moreLikelyToBeYounger()

    userData.push({ username, email, password, age, bio, avatar, location: [lon, lat]});
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

   // create Messages
   let createdMessages = [];
   for (let i = 0; i < 100; i += 1) {
     const messageText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
 
     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
     const { username, _id: userId } = createdUsers.ops[randomUserIndex];
 
     const createdMessage = await Message.create({ messageText, username });
 
     const updatedUser = await User.updateOne(
       { _id: userId },
       { $push: { Messages: createdMessage._id } }
     );
 
     createdMessages.push(createdMessage);
   }
 

  console.log('all done!');
  process.exit(0);
});
