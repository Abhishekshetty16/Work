//crud -create retriew update delete(insert,find,update,delete)

const mongodb=require("mongodb");  //used mongodb
const MongoClient=mongodb.MongoClient  
//used the mongodb database using url
const url='mongodb+srv://admin:admin@cluster0.6pj7pwk.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(url,(err,client)=>{
    if(err){
    console.log(err);
    return;
}
const db=client.db("test");
// insertOne..
// db.collection("users").insertOne({
//     name:'abhishek',
//     age:23
// })
// .then(res=> console.log(res.ops))
// .catch(e=> console.log(e))

//InserMany..
// db.collection('users').insertMany([{
//     name:'abhishek',
//     age:23
// },
// {
//     name:'arun',
//     age:24
// }
// ])
// .then(res=>console.log(res.ops))
// .catch(e=>console.log(e))

//FindOne..
// db.collection('users').findOne({age:24})
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

//FindALL..
// db.collection('users').find({}).toArray()  //toarray is used to show all the data
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

//UpdateOne..
// db.collection('users').updateOne({age:23},
//     {
//         $set:{age:26}
//     })
//     .then(res=>console.log(res))
//     .catch(e=> console.log(e))

//UpdateMany
// db.collection('users').updateMany({},{
//     $inc:{age:1}
// })
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

//DeleteOne..
// db.collection('users').deleteOne({name:'abhi'})
// .then(res=>console.log(res))
// .catch(e=> console.log(e))

//DeleteMany..
db.collection('users').deleteMany({})
.then(res=>console.log(res))
.catch(e=>console.log(e))
})

