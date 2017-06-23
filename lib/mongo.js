var config = require('config-lite')(__dirname);
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);

var moment = require('moment');



exports.Mde = mongolass.model('Mde', {
    wsmdNumber: { type: 'string' },
    release: { type: 'string' },
    opratorName: { type: 'string' },
    addedInfo: { type: 'string' },
    link: { type: 'string' }
});
exports.Mde.index({ _id: -1 }).exec();// 按创建时间降序查看用户的文章列表


exports.Post = mongolass.model('Post', {
    wsmdNumber: { type: 'string' },
    release: { type: 'string' },
    opratorName: { type: 'string' },
    addedInfo: { type: 'string' },
    link: { type: 'string' }
});
exports.Post.index({_id: -1 }).exec();// 按创建时间降序查看用户的文章列表

