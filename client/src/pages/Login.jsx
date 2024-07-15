import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

// const URL='http://localhost:5000/api/auth/login'
function Login() {
  const [user,setUser] = useState({
    email :"",
    password:""
  });
  
  const navigate=useNavigate()
  const {storetokenInLS} =useAuth();

const handleInput = (e) =>{
let name=e.target.name;
let value=e.target.value;
setUser({
  ... user,
  [name] :value  //dynamic data mokva mate []
})
}
// handle login 
const handleSubmit = async(e) =>{
  e.preventDefault();
  // alert(user);
  // console.log(user);

  try {
    const response =await fetch(`http://localhost:5000/api/auth/login`,
      {
        method:"POST",
        headers : {"Content-Type" :"application/json",},
         body: JSON.stringify(user)
      },
    );
    
    if(!response.ok){
      const errorData =await response.json();
      console.log("Invalid credential")
      throw new Error (errorData.message ||"Invalid credential" )
    }
    alert("Login Successful");
    const res_data =await response.json();

  storetokenInLS(res_data.token)

      setUser({email:"", password:""})
      navigate("/")
    console.log("Login respose",res_data)
    // else{
    //   alert("Invalid credential")
    //   console.log("Invalid credential")
    // }

    // console.log("Login response", response)
  } 
  
  catch (error) {
     console.log("Login error", error),
     alert(error.message)
  }
}


  return (
    <>
    <section>
      <main>
        <div className="section-registration2" >
          <div className="container-login grid-two-col">
            <div className="registration-image reg-img">
              <img src="/images/login.png" alt="Login image" height="500px" width="500px"/>
            </div>

            {/* login details */}
            <div className="registration-form">
       
                <h1 className='main-heading mb-3'>Login form</h1>
            <br />

            <form onSubmit={ handleSubmit} >
              <div>
                <label htmlFor="email">email</label>
                <input type="email"
                 placeholder='Enter your email' 
                id="email"
                name='email'
                required
                autoComplete='off'
                onChange={handleInput}
                value={user.email}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input type="password"
                 placeholder='Enter your password' 
                id="password"
                name='password'
                required
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
                />
              </div>
              <br />
              <button type='submit' className='btn btn-submit'>Login Now</button>
            </form>
             

            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login