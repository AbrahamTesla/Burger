var express = require('express');
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject ={
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsOject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name, false], function(res){
        res.json({
            id: res.insertId
        });
    });
});

router.put("/api/burgers/:id",function(req, res){
    var condition = "id= "+ req.body.id;

    console.log("condition", condition);
    burger.update({
        devoured: true
    },
    condition, function(res){
        if(res.changesRows === 0){
            return res.status(404).end();
        }
        res.result(200).end();
    }
);
});

module.exports = router;
