var express = require('express');
var router = express.Router();

var db = require('../database.js');

/* GET test data*/
router.get('/test', function(req, res, next) {
    db.getData(function(err, results){
        if(err){
            res.status(500).send("Server Error");
            return;
        }
        else{
            console.log(results[0].testMessage);
            res.render('index', {"testResults": results[0].testMessage});
        }
    })
});
//Get todays info
router.get('/', function(req, res, next) {
    var current;
    db.getCurrent(function(err, results){
        if(err){
            res.status(500).send("Server Error");
            return;
        }
        else{
            current = results;
            db.getToday(function(err, results){
                if(err){
                    res.status(500).send("Server Error");
                    return;
                }
                else{
                    res.render('index', {"results": results, "current": current} );
                }
            })
        }
    })


});

//Get todays info
router.get('/archive', function(req, res, next) {
    var current;
    db.getCurrent(function(err, results){
        if(err){
            res.status(500).send("Server Error");
            return;
        }
        else{
            current = results;
            db.getArchive(function(err, results){
                if(err){
                    res.status(500).send("Server Error");
                    return;
                }
                else{
                    res.render('archive', {"results": results, "current": current} );
                }
            })
        }
    })
});

module.exports = router;