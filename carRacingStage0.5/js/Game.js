class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    //listening the gameState from the database using .on()
    
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({    //update database
      gameState: state            //with current state of game
    });
  }

  start(){
    if(gameState === 0){        //if game is in state 0
      player = new Player();   //only then make a new player
      player.getCount();      //increase playercount when new player is created
      form = new Form()       //make a form 
      form.display();         //display the form
    }
  }


  
}
