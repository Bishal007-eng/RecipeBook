
import './App.css';
import Navbar from './Components/Commons/Navbar';
import RecipeDetails from './Components/Commons/RecipeDetails';
import About from './Components/Pages/About';
import Home from "./Components/Pages/Home.js";
import Recipes from './Components/Pages/Recipes';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Recipes' element={<Recipes />} />
        <Route path='/About' element={<About />} />
        <Route path='/Recipe/:recipeId' element={<RecipeDetails />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
