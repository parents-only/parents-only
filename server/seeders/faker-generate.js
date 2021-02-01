
var fs = require('fs');

const faker = require('faker');


// generate dataSet as example
fs.writeFile(__dirname + '/dataSet.json',  JSON.stringify(faker.helpers.userCard()), function() {
  console.log("dataSet generated successfully!");
});
// generate bigDataSet as example
var bigSet = [];

for(var i = 50; i >= 0; i--){
  bigSet.push(faker.fake());
};

fs.writeFile(__dirname + '/bigDataSet.json',  JSON.stringify(bigSet), function() {
  console.log("bigDataSet generated successfully!");
});