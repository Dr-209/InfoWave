import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';


const URL ="http://localhost:5000/api/auth/register"
function Register() {
  const [user, setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })
  const navigate=useNavigate();
const {storetokenInLS}=useAuth();

  //handle input
  const handleInput =(e)=>{
let name=e.target.name;
let value=e.target.value;
setUser({
  ... user,
  [name]:value,
})
  };

  // Handle Submit
  const handleSubmit = async(e) =>{
    e.preventDefault();     //refresh na tahy ana mate
  alert(user);
  console.log(user);

  try{

  const response= await fetch(URL,
    {
    method:"POST",
    headers : {"Content-Type" :"application/json",},
    body:JSON.stringify(user),   //obj ne json ma convert karvanu
  },
  );

  if (!response.ok) {
    // Log the response if the status is not OK
    throw new Error('Failed to register');
  }

  if(response.ok){
 const res_data = await response.json();
      console.log('respose from server', res_data);

      // store token in localhsot
      storetokenInLS(res_data.token)
    setUser({ username: "", email:"", phone:"", password:""
    })
    navigate("/login")
  }
  
  console.log('Response', response);
 
  }
catch(error){
  console.log("register error",error)
}
}

  return (
    <>
    <section>
      <main>
        <div className='section-registration'>
          <div className='container grid grid-two-cols'>
            <div className="regi-image">
              <img src="/images/register.png" alt="a girl do registration" width="500" height="500"/>
            </div>
            
            {/* registartion form */}
           <div className="registration-form">
            <h1 className='main-heading mb-3'>Registration Form</h1>
            <br />

            <form onSubmit={ handleSubmit} >

              <div >
                <label htmlFor="username">username</label>
                <input 
                type="text"
                 name="username"
                  id="username"
                   placeholder='Enter your username'
                    required 
                    autoComplete='off' 
                    value={user.username}
                    onChange={handleInput}
                    />
                    
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input 
                type="email"
                 name="email"
                  id="email"
                   placeholder='Enter your email'
                    required 
                    autoComplete='off' 
                    value={user.email}
                    onChange={handleInput}
                    />
              </div>

              <div>
                <label htmlFor="phone">phone</label>
                <input 
                type="number"
                 name="phone"
                  id="phone"
                   placeholder='Enter your phone number'
                    required 
                    autoComplete='off'
                    value={user.phone}
                    onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input 
                type="password"
                 name="password"
                  id="password"
                   placeholder='Enter your password'
                    required 
                    autoComplete='off' 
                    value={user.password}
                    onChange={handleInput}/>
              </div>  
              <br />

                     <button type='submit' className='btn btn-submit'>Register</button>     
            </form>
           </div>



          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Register