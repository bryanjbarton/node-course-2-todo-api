// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');



    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed:false
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name:'myName',
    //     age: 2345,
    //     location:'here'
    // }, (err, result) =>{
    //         if (err) {
    //             return console.log('Unable to insert todo', err);
    //         }
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    //     });

    client.close(); 
});