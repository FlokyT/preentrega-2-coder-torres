import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailConteiner } from './components/ItemDetailContainer/ItemDetailConteiner';
import { Checkout } from './components/Checkout/Checkout';




function App() {
  return (
    <div>

      <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category:category' element={<ItemListContainer/>}/>
        <Route path='/product/id:' element={<ItemDetailConteiner/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
       
      </Routes>

      </BrowserRouter>

      
    </div>  
  );
}

export default App;
