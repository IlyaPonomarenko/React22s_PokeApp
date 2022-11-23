import { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import PokeList from './Components/PokeList';
import About from './Components/About';
import Layout from './Pages/Layout';


class App extends Component{


  render(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
            <Route index element={<Home/>}/>
            <Route path='pokelist' element={<PokeList/>}/>
            <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
