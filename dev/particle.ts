class Particle{
    x:number
    y:number
    element:HTMLElement
    jar:Jar

    constructor(j:Jar, x:number, y:number) {
        this.jar = j
        this.x = this.rng(x-20, x+220)
        this.y = this.rng(y-20, y+200)

        this.element = document.createElement("particle")
        document.body.appendChild(this.element)
        this.element.style.transform = `translate(${this.x}px, ${this.y-=3}px)`
    }

    public update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y-=3}px)`
        if(this.y < -20) { this.delete() }
    }

    private delete() {
        this.element.remove()

        this.jar.removeElement(this)
    }

    private rng(min:number, max:number) {
        let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
        return a
    }
}