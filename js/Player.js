class Player {
  constructor() {
    this.index = null
    this.distance = 0
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('player_count');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      player_count: count
    });
  }

  update(){
    var playerIndex = 'Players/player' + this.index
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('Players')
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val()
    })

    //console.log(allPlayers)  return "null"

    //console.log('info found')
  }
}
