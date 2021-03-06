class Form {

    constructor(){
        this.input = createInput("Name") ; 
        this.button = createButtom('Play') ; 
        this.greeting = createElement('h2') ;
        this.title = createElement('h2') ;
        this.reset = createButtom('Reset') ; 
    }

    hide(){
        this.button.hide() ;
        this.greeting.hide() ; 
        this.input.hide() ;
        this.title.hide() ; 
    }

    display(){
        this.title.html( "Crazy Racing ") ;


    this.button.mousepressed(()=>{
        player.name = this.input.value() ;
        playerCount+=1 ;
        player.index = playerCount ;
        player.update() ;
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

    })

    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0) ;
      }
      )
}
}