const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'img_url',
      'title',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'img_url',
      'title',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', async (req, res) => {
  try {
    const to_user = await User.findOne({
      where: {
        email: req.body.to_email
      }

    })

    // expects {title: 'Taskmaster goes public!', img_url: 'https://taskmaster.com/press', user_id: 1}
    const postData = await Post.create({
      title: req.body.title,
      img_url: req.body.img_url,
      from_user_id: req.session.user_id,
      to_user_id: to_user.id
    })
    res.json(postData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Email Code

const transporter = nodemailer.createTransport({
  port: 465,
  service: "hotmail",
     auth: {
          user: 'ryantest9000@outlook.com',
          pass: 'TestPass178',
       },
       secure: true,     
  });

  const emailData = {
    from: 'ryantest9000@outlook.com',  // sender address
      to: 'ryan.robinsonlb@gmail.com',   // list of receivers
      subject: 'Someone sent you a funny meme!',
      text: 'You got a meme!'
    };

  transporter.sendMail(emailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });   
    
//End email code

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
