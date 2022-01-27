import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import RegisterPage from './pages/signIn-and-singUp/signIn-and-signUp'
import { auth } from './firebase/firebase.utils';
import React from 'react';


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



class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser: null

    }
  }

  unSubscribeFromAuth = null;


  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }


  render(){
    return (
        <div>
          <Header currentUser = {this.state.currentUser} />
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='shop' element={<ShopPage />} />
            <Route path='jacket' element={<JacketPage />} />
            <Route path='Sign-In' element={<RegisterPage />} />
          </Routes>
        </div> 
    );
  }
}

export default App;