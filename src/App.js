import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'
import { Link, Route,Redirect,withRouter } from 'react-router-dom';
import swal from 'sweetalert'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useState } from 'react';
import Dashboard from './components/dashboard/dashboard';
import Product from '../src/components/Product/Product';
import Customer from './components/customer/Customer';
import Bills from './components/bills/Bills';
import  Account  from './components/auth/Account';
import Allbills from './components/bills/Allbills';

const App = (props) => {
  const  [login,isLogin] = useState(false)

  const handlelogin = () =>{
    isLogin(!login)  
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handlelogin()
    }
  },[])
  
  return(

     <div>
       {login?
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">

      <Link to='/dashboard' class="navbar-brand" style={{color:'white',fontSize:'25px'}}>Dashboard</Link>
      <Link to='/customer' class="navbar-brand"  style={{color:'white',fontSize:'30px',marginLeft:'70px',paddingLeft:'40px'}}>Customer</Link>
      <Link to='/product' class="navbar-brand"  style={{color:'white',fontSize:'30px'}}>Product</Link>
      <Link to='/bills' class="navbar-brand"  style={{color:'white',fontSize:'30px'}}>Bills</Link>
      <Link to='/all-bills' class="navbar-brand"  style={{color:'white',fontSize:'30px'}}>All-Bills</Link>
      <Link to='/account' class="navbar-brand"  style={{color:'white',fontSize:'30px'}}>Account</Link>
      <Link to = '#'  class="navbar-brand"  onClick={()=>
      {
      swal('you have been sucessfully loged out')
      localStorage.removeItem('token')
      props.history.push('/login')
      handlelogin()
      }
      } style={{color:'white',fontSize:'30px'}}>Logout</Link>
      
      </div>
      </nav> :
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">   
      <Link to='/' class="navbar-brand" href="#" style={{color:'white',fontSize:'30px'}}>Home</Link>
      <Link to='/register' style={{color:'white',fontSize:'20px'}} class="nav-link active">Register</Link>
      <Link to= '/login' style={{color:'white',fontSize:'20px'}}  class="nav-link active">Login</Link>
      </div>
      </nav>
      }

      <Route path='/login'  render={(props)=>{
        return <Login handlelogin= {handlelogin} {...props}/>
      }}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path= '/dashboard' component ={Dashboard}></Route>
      <Route path='/customer' component={Customer}></Route>
      <Route path='/product' component ={Product}></Route>
      <Route path='/bills' component={Bills}></Route>
      <Route path='/all-bills' component={Allbills}></Route>
      <Route path='/account' component={Account}></Route>
     </div>
   )
}
export default withRouter(App);
