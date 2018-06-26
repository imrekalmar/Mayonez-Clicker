class Game {
    private screen:any
    private gameTime:number = 0

    constructor() {
        this.gameLoop()
    }

    private gameLoop():void {
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.screen = new this.showPlayScreen(this)
        this.screen.gameTimer()
    }

}

window.addEventListener("load", () => new Game())