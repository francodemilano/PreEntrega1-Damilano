
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'



function App() {
 /*  const handleOnAdd = () => console.log('Agregar al carrito'); */

  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />
{/*       <div>
        <link to='/'>Listado</link>
        <link to='/detail'>Detalle</link> 
      </div> */}
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/> 
        <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path= '/detail/:productId' element={<ItemDetailContainer/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );


  
}



export default App;