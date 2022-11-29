import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MoviesInfo from './Pages/MoviesInfo/MoviesInfo';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies/:id" element={<MoviesInfo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
