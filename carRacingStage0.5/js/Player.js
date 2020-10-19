class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');     //get the playercount
    playerCountRef.on("value",function(data){             //.on is used to listen to the database for the playerCount
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({      //database has to be updated
      playerCount: count           //with playercount
    });
  }

  update(name){
    var playerIndex = "player" + playerCount;     //player1:
    database.ref(playerIndex).set({               //set value in Database 
      name:name                                   //name(taken from textbox) is the value
    });
  }


  
}
