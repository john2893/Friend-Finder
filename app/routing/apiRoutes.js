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

      var newFriend = req.body;
      console.log(newFriend)
      console.log(" +++++++++++++++ ");
     var newFriendArr = req.body.ans;

      var newArr = [];
      var match = 0;

      for (var i=0; i<friends.friendsList.length; i++){
        
        var differ = 0;
        for (var j=0; j<newFriendArr.length; j++){
          differ += (Math.abs(parseInt(friends.friendsList[i].ans[j]) - parseInt(newFriendArr[j])));
          // console.log( " this is from api route")
          // console.log(friends.friendsList[i].ans[j]);
          // console.log(newFriendArr[j]);
          // console.log(Math.abs(0));
          // console.log(differ);
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
      var bestMatch = friends.friendsList[match];
      friends.friendsList.push(newFriend);

      // return res.json(newFriend)
      return res.json(bestMatch);

  
    });
  
  
  
  
    return apiRoutes;
  
  };
