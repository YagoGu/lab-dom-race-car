class Game {
    constructor() {
    // code to be added
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player =  new Player (
        this.gameScreen,
        100,
        100,
        100,
        150,
        "./images/car.png")
    
    
    this.player = null;
    this.height = "600px";
    this.width = "500px";
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    }

    start() {
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop () {
        if (this.gameIsOver) {
            return 
        }

        this.update()

        //this function is calling itself in a loop
        windows.requestAnimationFrame(() => {this.gameLoop()});
    }

    update () {

    }
}
