import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
