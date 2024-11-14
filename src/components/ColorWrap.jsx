import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ColorGenerator from './ColorGenerator'
import { useState } from 'react'

const generateColors = () => { 
  const colors = []; 
  for (let i = 0; i < 32; i++) { 
    for (let j = 0; j < 32; j++) { 
      for (let k = 0; k < 32; k++) {
         colors.push(`#${(i << 10 | j << 5 | k).toString(16).padStart(4, '0')}`)
      } 
    } 
  } 
  // Shuffle the colors array 
  for (let i = colors.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [colors[i], colors[j]] = [colors[j], colors[i]]; // Swap elements 
  }
  console.log('generated colors', colors)
  return colors; 
}

const ColorWrap = () => {

  const [randomColors, setRandomColors] = useState(undefined)

  const handleGenerateColors = () => {
    const colors = generateColors()
    console.log('clicking',colors)
    setRandomColors(colors)
  } 

  return (
    <>
      <Container maxWidth="x1">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" color='secondary'>Color Map Wrap</Typography>
        </Box>
        <Box sx={{ my: 10 }}>
          <Stack direction="row" spacing={2} sx={{marginBottom: 2}}>
            <Button variant="contained" color="primary" onClick={handleGenerateColors}>
              Generate new image
            </Button>
          </Stack>

          <div id='image-container'>
            <ColorGenerator randomColors={randomColors} />
          </div>
        </Box>
      </Container>
    </>
  )
}

export default ColorWrap
