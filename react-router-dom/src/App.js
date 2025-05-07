
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './compoenents/Home';
import Links from './compoenents/Links';
import { About } from './compoenents/About';
import { OrderConfirm } from './compoenents/OrderConfirm';
import { Product } from './compoenents/Product';
import AddItem from './compoenents/AddItem';
import UpdateItem from './compoenents/UpdateItem';

function App() {
  return (
   <>
   <div className='flex flex-col'>
   <Links />
   <Routes >
    <Route path='/' element={<Home />}></Route>
    <Route path='/ordercofrim'element={<OrderConfirm />} ></Route>
    <Route path='/aboutus'element={<About />} ></Route>
    <Route path='product' element={<Product />}>
      <Route path='addItem' element={<AddItem />}/> 
      <Route path='updateitem' element={<UpdateItem />}/> 
    </Route>
   </Routes>
   </div>
   </>
  );
}

export default App;
