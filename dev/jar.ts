class Jar {
    private element: HTMLElement
    private score:number = 0

    private particles:Particle[]

    constructor() {
        this.particles = []
        this.element = document.createElement("jar")
        document.body.appendChild(this.element)

        this.element.addEventListener("click", () => this.clickJar())
    }

    public particlesOnClick() {
        for(let p of this.particles) {
            p.update()
        }
    }

    public removeElement(el:any) {
        for(let i = 0; i< this.particles.length ; i++) {

            if(this.particles[i] === el) {

                this.particles.splice(i, 1);

            }
        }
    }

    public clickJar(n:number = 1) {
        this.score += n

        if(this.particles,length < 60) {
            this.particles.push(new Particle(this, this.element.offsetLeft, this.element.offsetTop))
        }

        this.element.style.transform = `scale(1.1)`
        setTimeout(() => this.scaleDown(), 100)
    }
    private scaleDown() {
        this.element.style.transform = `scale(1)`
    }

    public buy(n:number) {
        if(this.score >= n) {
            this.score -= n
            return true
        }
    }

    public getScore() {
        return this.score
    }

    
}