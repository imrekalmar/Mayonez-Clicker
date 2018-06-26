class Game {
    private screen:any
    

    constructor() {
        this.gameLoop()
    }

    private gameLoop():void {
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.screen = new PlayScreen(this)
        this.screen.gameTimer()
    }

    public showEndScreen() {
        document.body.innerHTML = ""
        this.screen = new EndScreen()
        this.screen.gameTimer()
    }

}

window.addEventListener("load", () => new Game())