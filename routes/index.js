var express = require('express');
var router = express.Router();



/*
 * GET Posts
 */
router.get('/getposts', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


/*
 * POST Posts
 */
router.post('/addpost', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});


module.exports = router;
