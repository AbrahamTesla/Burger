var express = require('express');
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var devouredBurgers = [];
        var notDevouredBurgers = [];

        for (var i = 0; i < data.length;i++) {
            if (data[i].devoured) {
                devouredBurgers.push(data[i]);
            } else {
                notDevouredBurgers.push(data[i]);
            }
        }
        var hbsObject ={
            devouredBurgers: devouredBurgers,
            notDevouredBurgers: notDevouredBurgers
            // burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers",(req, res)=>{
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name, false], function(result){
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id",(req, res)=>{
    var condition = "id= "+ req.params.id;

    console.log("condition", condition);
    
    burger.update({
        devoured: true
    },
    condition, 
    
    function(result){
        if(result.changesRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    }
);
});

module.exports = router;
