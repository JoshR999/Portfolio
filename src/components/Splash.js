import React, {useEffect, useRef} from "react";

function Splash(props){

    const canvasRef = useRef(null)

    useEffect(() => {
        //Random color function
        function getColor() {
            let letters = '0123456789ABCDEF'
            let color = '#'
            for (let j = 0; j < 6; j++){
                color += letters[Math.floor(Math.random() * 16)]
            }
            return color
        }

        //Canvas setup
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d')

        //Constant variables
        const maxRadius = 42
        const colorArray = [
            '#ffc8dd',
            '#ffafcc',
            '#bde0fe',
            '#a2d2ff',
            'cdb4db'
        ]

        //User input listeners
        var mouse = {
            x: undefined,
            y: undefined
        }

        window.addEventListener('mouseleave', () => {
            mouse.x = undefined
            mouse.y = undefined
        })

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x
            mouse.y = event.y
        })

        //Draw on canvas
        function Circle(x, y, dx, dy, radius){
            this.x = x
            this.y = y
            this.dx = dx
            this.dy = dy
            this.radius = radius
            this.minRadius = radius
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
            this.originColor = this.color
            this.originDX = this.dx

            this.draw = function() {
                context.beginPath()
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                context.fillStyle = this.color
                context.fill()
                context.strokeStyle = 'black'
                context.stroke()
            }

            this.update = function() {
                //If statements to keep circles in bounds of canvas
                if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx
                }

                if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy
                }

                //To move the circle with given dx/dy
                this.x += this.dx
                this.y += this.dy

                //Interactivity between circles and user
                if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 150 && mouse.y - this.y > -50) {
                    if(this.radius < maxRadius){
                        this.radius += 1
                    }
                } else {
                    if(this.radius > this.minRadius) {
                        this.radius -= 1
                    }
                    this.color = this.originColor
                }

                //Draw the updated circle
                this.draw()
            }
        }

        //Storage for circles 
        let circleArray = []

        function init() {
            circleArray = []

            //Generate random values for circles
            for (let i = 0; i < 500; i++){
                let radius = Math.random() * 10 + 1
                let x = Math.random() * (window.innerWidth - radius * 2) + radius
                let y = Math.random() * (window.innerHeight - radius * 2) + radius
                let dx = (Math.random() - 0.5) * 5
                let dy = (Math.random() - 0.5) * 2
                //Add circles to circle storage
                circleArray.push(new Circle(x, y, dx, dy, radius))
            }
        }

        //Reload canvas on window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            init()
        })

        function animate() {
            requestAnimationFrame(animate)
            context.clearRect(0, 0, window.innerWidth, window.innerHeight)

            //Run update to show animation
            for(let i = 0; i < circleArray.length; i++){
                circleArray[i].update()
            }
        }

        init()
        animate()
        
    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Splash