import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

export const HatPage = (props) =>(
  <div>
    <h1>HAT PAGE</h1>
  </div>
);


export const JacketPage =() => (
  <div>
    <h1>Jacket Page</h1>
  </div>
)



function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='shop' element={<ShopPage />} />
          <Route path='jacket' element={<JacketPage />} />
        </Routes>
      </div> 
  );
}

export default App;
 