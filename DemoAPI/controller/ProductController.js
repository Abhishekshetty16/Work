var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function()
{
    ///get done
    router.route('/')
    .get(function (req, res)
    {
        conn.connect().then(function()
        {
            var sqlQuerry="select * from Products";
            var req= new sql.Request(conn);
            req.query(sqlQuerry).then(function(recordset)
            {
                res.json(recordset.recordset);
                conn.close();
            })
            .catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        })
    });
        return router;
};  
///post done
router.route('/')
        .post(function (req, res) {
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    // request.input("ProductID", sql.Int, req.body.ProductID)
                    request.input("ProductName", sql.VarChar(50), req.body.ProductName)
                    request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
                    request.execute("Usp_InsertProduct").then(function () {
                        transaction.commit().then(function (recordSet) {
                            conn.close();
                            res.status(200).send(req.body);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while inserting data");
                        });
                    })
                })
            })
        });
///put 
        router.route('/:id')
        .put(function (req, res)
         {
            var _productID = req.params.id;
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    request.input("ProductID", sql.Int, _productID)
                    request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
                    request.execute("Usp_UpdateProduct").then(function () {
                        transaction.commit().then(function (recordSet) {
                            conn.close();
                            res.status(200).send(req.body);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while updating data");});
                    })
                })
            })
        });

///delete done
        router.route('/:id')
        .delete(function (req, res) {
            var _productID = req.params.id;
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    request.input("ProductID", sql.Int, _productID)
                    request.execute("Usp_DeleteProduct").then(function () {
                        transaction.commit().then(function (recordSet) {
                            conn.close();
                            res.status(200).json("ProductID:" + _productID);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while Deleting data");
                        });
                    })
                })
            })
        });

        


    module.exports=routes;
    