import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const App = () => {
  return (
    <Container className="App">
      <Box bgcolor={'primary.main'}>
        <Router>
          <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
          </Routes>
        </Router>
      </Box>
    </Container>
  )
}

export default App
