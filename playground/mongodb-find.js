// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c4a66b51f768c1a3cbf62a9')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
       
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

//    db.collection('Todos').find({name:'Andrew'}).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs,undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     })

    db.collection('Users').find({name:'myName'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    
    
    
    

    // client.close(); 
});