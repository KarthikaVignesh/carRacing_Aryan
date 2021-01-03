class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('GAMESTATE');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      GAMESTATE: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('player_count').once('value')

      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val()
       console.log(playerCount)
        player.getCount()
      }
      form = new Form()

      form.display();
    }

    

    
  }

  play() {


    form.hide();

    text("Game started", 120, 100)
    
    Player.getPlayerInfo()

    if (allPlayers !== undefined) {
      var pos = 130
      for (var p in allPlayers) {
        if (p === "player" + player.index) {
          fill("red")
          //console.log('red')
        } else {
          fill('black')
         // console.log('black')

        }

        //console.log('red')
        pos = pos + 20

        text(allPlayers[p].name + ":" + allPlayers[p].distance, 120,pos)
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance = player.distance + 50
      player.update()
    }
  }

  
}
