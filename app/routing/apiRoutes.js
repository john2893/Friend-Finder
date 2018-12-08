var friends = require ('../../app/data/friends');

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
      var newFriend = req.body;
      console.log(" +++++++++++++++ ");
      console.log(newFriend);
      return res.json(newFriend)
    
      // Using a RegEx Pattern to remove spaces from newCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    
    
      // var n = friends.friends.push(newFriend);
    
      // res.json(n);
    });
  
    apiRoutes.get('/api/page2', (req, res) => {
      res.send('Api page2');
    });
  
  
    return apiRoutes;
  
  };
