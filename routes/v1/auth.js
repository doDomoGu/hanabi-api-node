var express = require('express');
var router = express.Router();

var db = require('../../db/index')
var md5 = require("md5");

router.use('/login', function(req, res, next) {
  var username = req.body.username;  
  var password = req.body.password;  
  
  db.connect('select * from user where username = "'+ username +'"',{},(_err, _res)=>{
    /* if(_err){
      throw _err;
      return ;
    } */
    
    if(_res[0].password == md5(password)){
      res.send({
        code:0,
        data:{
          token: '123123',
          userId: 10001,
          userInfo: {
            
          }
        },
        msg:null
      })
    }
    // res.send(result)
    // console.log(res)
  })

  // res.send('login - post');
});

router.delete('/logout', function(req, res, next) {
  res.send('logout - delete');
});


module.exports = router;
