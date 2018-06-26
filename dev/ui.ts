class UI {
    private score:HTMLElement
    private jar:Jar
    private screen:PlayScreen

    constructor(s:PlayScreen, j:Jar) {
        this.jar = j
        this.screen = s

        this.score = document.createElement("p")
        this.score.style.left ="25px"
        this.score.innerHTML = "0 Mayonez Jars"

        document.body.appendChild(this.score)
    }

    update() {
        this.score.innerHTML = this.jar.getScore() + " Mayonez Jars"
    }
}