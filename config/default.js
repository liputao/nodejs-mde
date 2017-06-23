module.exports = {
  port: 3000,
  session: {
    secret: 'mde',
    key: 'mde',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/mde'
};
