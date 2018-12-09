var friends = require ('../data/friends');

module.exports = function(){
    
    'use strict';
  
    var apiRoutes = require('express').Router();
  
    apiRoutes.get('/api/friends', (req, res) => {
   
      console.log(friends.friendsList);
      // res.status(200).send(data);
      
      // res.send("hee");
      return res.json(friends.friendsList);
    });
    apiRoutes.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      var newFriend = req.body.ans;
      console.log(newFriend)
      console.log(" +++++++++++++++ ");
     

      var newArr = [];
      var match = 0;

      for (var i=0; i<friends.friendsList.length; i++){
        
        var differ = 0;
        for (var j=0; j<newArr.length; j++){
          differ  += (Math.abs(parseInt(friends.friendsList[i].ans[j]) - parseInt(newFriend[j])));
        }
        newArr.push(differ);
      }
      for(var i=0; i<newArr.length; i++){
        if(newArr[i] <= newArr[match]){
          match = i;
        }
      }
      // console.log(newFriend);
      // alert ( " testing api POST");
      friends.friendsList.push(newFriend);

      return res.json(newFriend)

  
    });
  
    apiRoutes.get('/api/page2', (req, res) => {
      res.send('Api page2');
    });
  
  
    return apiRoutes;
  
  };
