import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorScreen from './pages/ErrorScreen';
import CocktailDetail from './components/CocktailDetail'
import Footer from './components/Footer'
function App() {
  return (
  
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cocktail/:id' element={<CocktailDetail/>}/>
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
