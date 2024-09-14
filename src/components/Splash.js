import React, {useEffect, useRef} from "react";

function Splash(props){

    const canvasRef = useRef(null)

    useEffect(() => {

        //Canvas setup
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d')

        
        
    }, [])

    return <canvas ref={canvasRef} {...props} id="splashCanvas"/>
}

export default Splash