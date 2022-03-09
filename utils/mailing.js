const nodemailer = require('nodemailer');

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