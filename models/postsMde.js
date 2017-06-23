var marked = require('marked');
var Post = require('../lib/mongo').Mde;



module.exports = {
    // 创建一篇文章
    create: function create(post) {
        return Post.create(post).exec();
    },

    getPosts: function getPosts() {
        var query = {};
        return Post
            .find(query)
            .sort({ _id: -1 })
            .exec();
    }
};
