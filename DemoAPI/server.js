var express=require('express');
var app=express();
var PORT=process.env.port || 3001;
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());
var productController = require('./Controller/ProductController')();
// app.get("/product",function(request,response)
// {
//     response.json({"Message":"Welcome to Node js"});
// });
app.use('/api/products',productController);

app.listen(PORT,function(){
    var datetime=new Date();
    var message="server is running at PORT:" +PORT+ " started at time:"+datetime;
    console.log(message); 
});

// module.exports = router ;