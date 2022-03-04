const { Post } = require('../models');

// post data includes meme image url, the "to user" id and the "from user" id
const postdata = [
  {
    image_url: 'https://miro.medium.com/max/1090/1*oms6YDdriv3QO2vomZaInA.jpeg',
    to_user_id: 10,
    from_user_id: 
  },
  {
    image_url: 'https://user-images.githubusercontent.com/8677283/27186368-0b5bbdde-51e0-11e7-8d7b-e171a006600e.png',
    to_user_id: 8,
    from_user_id:
  },
  {
    image_url: 'https://looknintoit.files.wordpress.com/2021/02/joke-bob-didnt-realise-what-a-frustrating-afternoon-2021-feb-23.jpg?w=1010',
    to_user_id: 1,
    from_user_id:
  },
  {
    image_url: 'https://cleanmemes.files.wordpress.com/2019/07/65503382_2333356013546461_8190876063698518016_n.jpg?w=840',
    to_user_id: 4,
    from_user_id:
  },
  {
    image_url: 'https://www.boredpanda.com/blog/wp-content/uploads/2021/06/dog-owner-memes-3016-60b9ddad55771__700.jpg',
    to_user_id: 7,
    from_user_id:
  },
  {
    image_url: 'https://i.pinimg.com/originals/e7/bd/e8/e7bde880790ce4d4113563e72364689d.jpg',
    to_user_id: 4,
    from_user_id:
  },
  {
    image_url: 'https://pbs.twimg.com/media/DiwzJk7VsAE_-0j?format=jpg&name=medium',
    to_user_id: 1,
    from_user_id:
  },
  {
    image_url: 'https://s24193.pcdn.co/wp-content/uploads/2017/06/Screen-Shot-2017-06-02-at-5.00.35-PM.png',
    to_user_id: 1,
    from_user_id:
  },
  {  
    image_url: 'https://miro.medium.com/max/1144/1*lsT72HsNsDrNsvUVfdYLsA.jpeg',
    to_user_id: 9,
    from_user_id:
  },
    image_url: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.53.38%20AM.png',
    to_user_id: 5,
    from_user_id:
  },
  {
    image_url: 'https://fwiw.imgix.net/wp-content/uploads/sites/2/2020/06/coronavirus-memes-this-is-fine.jpg?w=1400',
    to_user_id: 3,
    from_user_id:
  },
  {
    image_url: 'https://imageserve.babycenter.com/2/000/353/Fn1sZnwbseklko2TEftvmVXXj65n0tZu_lg.jpg',
    to_user_id: 10,
    from_user_id:
  },
  {
    image_url: 'https://c.ndtvimg.com/2021-02/4lo9ita_elon-musk-dogecoin-meme_625x300_04_February_21.jpg',
    to_user_id: 8,
    from_user_id:
  },
  {
    image_url: '',
    to_user_id: 3,
    from_user_id:
  },
  {
    image_url: '',
    to_user_id: 3,
    from_user_id:
  },
  {
    image_url: 'https://i.redd.it/hppc55kpyx451.jpg',
    to_user_id: 7,
    from_user_id:
  },
  { 
    image_url: 'https://bouncymustard.com/wp-content/uploads/2021/01/2-funny-hilarious-memes.jpg',
    to_user_id: 6,
    from_user_id:
  },
  {
    image_url: 'https://thefunnybeavercomd030b.zapwp.com/q:i/r:0/wp:1/w:564/u:https://thefunnybeaver.com/wp-content/uploads/2018/05/funny-self-sabotage.jpg',
    to_user_id: 4,
    from_user_id:
  },
  {
    
    image_url: 'https://thefunnybeavercomd030b.zapwp.com/q:i/r:0/wp:1/w:564/u:https://thefunnybeaver.com/wp-content/uploads/2018/05/funny-run-20-seconds.jpg',
    to_user_id: 6,
    from_user_id:
  },
  {
    
    iamge_url: 'http://www.ldssmile.com/wp-content/uploads/2013/11/Hilarious-memes-funny-posts-lol-humor-24.jpg',
    to_user_id: 7,
    from_user_id:
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
