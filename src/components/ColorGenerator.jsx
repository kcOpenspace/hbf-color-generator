/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react"

// Construct canvas from the generated colors
const ColorGenerator = ({randomColors}) => {
  const canvasRef = useRef(null)
  
  useEffect(() => { 
    const canvas = canvasRef.current
    
    const ctx = canvas.getContext('2d')
    
    if (!randomColors) {
      return
    }

    const colors = randomColors
    const imgData = ctx.createImageData(128, 256)
    let colorIndex = 0
    
    for (let y = 0; y < 256; y++) { 
      for (let x = 0; x < 128; x++) { 
        const index = (y * 128 + x) * 4
        const color = colors[colorIndex++]
        const r = parseInt(color.slice(1, 3), 16)
        const g = parseInt(color.slice(3, 5), 16)
        const b = parseInt(color.slice(5, 7), 16)
        imgData.data[index] = r
        imgData.data[index + 1] = g
        imgData.data[index + 2] = b
        imgData.data[index + 3] = 255 // alpha channel 
      } 
    } 
    
    ctx.putImageData(imgData, 0, 0)
    
  },[randomColors])
  
  return <canvas ref={canvasRef} width={300} height={300}></canvas>
}

export default ColorGenerator