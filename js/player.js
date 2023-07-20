class Player {
    constructor (gameScreen, left, top, width , height, imgScr) {
        this.gameScreen = gameScreen;

        this.left = left;
        this.top = top;
        // this.width = width;
        // this.height = height;

        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = imgScr;

        this.element.style.position = "absolute";

        this.element.style.width =`${width}px`
        this.element.style.height =`${height}px`
        this.element.style.left = `${left}px`
        this.element.style.left = `${top}px`

        this.gameScreen.appendChild(this.element);
    }

    move (){
        this.left += this.directionX
        this.top += this.directionY
        
        if (this.left > this.gameScreen.offsetWidth - this.width) {
            this.left = this.gameScreen.offsetWidth - this.width
        }
        if (this.top > this.gameScreen.offsetWidth - this.height) {
            this.top = this.gameScreen.offsetWidth - this.height
        }
    }

    updatePosition (){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide(obstacle) {
        const playerHitbox = this.element.getBoundingClientRect();
        const obstacleHitbox = obstacle.element.getBoundingClientRect();
        if (
            playerHitbox.left < obstacleHitbox.right &&
            playerHitbox.right > obstacleHitbox.left &&
            playerHitbox.top < obstacleHitbox.bottom &&
            playerHitbox.bottom > obstacleHitbox.top
        ) {
            return true;
        }
        else {return false;}
    }

}