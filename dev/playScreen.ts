class PlayScreen {
    private game:Game
    private jar:Jar
    private ui:UI

    constructor(g:Game){
        this.game = g
        this.jar = new Jar
        this.ui = new UI(this, this.jar)
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log("blyat")
        switch (e.keyCode) {
            case 27: this.exit()
            break
        }


    }

    public update():void {
        this.ui.update()
    }

    public exit() {
       
    }

    
}