// import all models
const Post = require('./Post');
const User = require('./User');



// create associations
User.hasMany(Post, {
  foreignKey: 'to_user_id'
});

Post.belongsTo(User, {
  foreignKey: 'to_user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  through: User,
  as: 'Shared Meme',
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});



module.exports = { User, Post,};
