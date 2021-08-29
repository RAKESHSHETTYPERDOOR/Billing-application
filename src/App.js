import logo from './logo.svg';
import './App.css';
import { Link, Route,Redirect,withRouter } from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import { useState } from 'react';
import Dashboard from './components/dashboard/dashboard';


const App = (props) =>{
   
  const  [login,isLogin] = useState(false)

  const handlelogin = () =>{
    isLogin(!login)
  }
  return(
     <div>
       {!login?
       <div>
       <Link to='/'>Home</Link>
       <Link to='/register'>Register</Link>
       <Link to= '/login'>Login</Link>
       </div>:
      <div>   
      <Link to='/dashboard'>Dashboard</Link>
      <Link to = '#'  onClick={()=>
      {
         alert('successfully logged-out')
          localStorage.removeItem('token')
          handlelogin()
          props.history.push('/login')
        }
      }  >Logout</Link>
      </div>
       
       }
      <Route path='/login'  render={(props)=>{
        return <Login handlelogin= {handlelogin} {...props}/>
      }}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path= '/dashboard' component ={Dashboard}></Route>
     </div>
   )
}
export default withRouter(App);
