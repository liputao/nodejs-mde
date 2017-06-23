var express = require('express');
var router = express.Router();

var PostModel = require('../models/postsMde');


router.get('/', function(req, res, next) {
    PostModel.getPosts()
        .then(function (posts) {
            res.render('posts', {
                posts: posts
            });
        })
        .catch(next);
});

router.post('/', function(req, res, next) {
    var wsmdNumber = req.fields.wsmdNumber;
    var release = req.fields.release;
    var opratorName = req.fields.opratorName;
    var addedInfo = req.fields.addedInfo;
    var link = req.fields.link;


    var post = {
        wsmdNumber: wsmdNumber,
        release: release,
        opratorName: opratorName,
        addedInfo: addedInfo,
        link: link
    };

    PostModel.create(post)
        .then(function (result) {
            post = result.ops[0];
            req.flash('success', 'Save Successfully.');
            //res.redirect(`/posts/${post._id}`);
        })
        .catch(next);
});

module.exports = router;
