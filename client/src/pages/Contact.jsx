import React, { useState } from 'react'
import './Contact.css'

// const URL ="http://localhost:5173/contact"
function Contact() {
  const [contact, setContact] =useState({
    username:"",
    email:"",
    message:""
  })

  const handleInput =(e) =>{
    let name=e.target.name;
    let value=e.target.value;

    setContact({
      ... contact,
      [name] :value
    })
  }

const handleSubmit =async(e)=>{
e.preventDefault();
// alert("Thanks for contact us");
// console.log(contact)

try {
  const response= await fetch(`http://localhost:5000/contact`,{
    method:"POST",
    headers:{"Content-Text":"application/json"},
    body:JSON.stringify(contact)
  },
);
  if(!response.ok){
    const errorData =await response.json();
      console.log("something wrong ")
      throw new Error (errorData.message ||"Something Wrong" )
    // throw new Error("Failed to submit contact form")
  }
  alert("Thanks for contact us!")
  const resData = await response.json();
      console.log('Response from server', resData);

      // Reset form
      setContact({
        username: "",
        email: "",
        message: ""
      });
  
} catch (error) {
  console.log("Contact Form submission error", error)
}
}

  return (
    <>
   <section className='section-contact'>
    <main>
      <div className="contact-content container">
       
</div>
{/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="conatct-image">
            <img src="/images/support.png" alt="contact image" height="400px" width="400px"/>
          </div>

          {/* conatct text, message */}
          <section className="section-form">
          <h1 className='main-heading'>Contact Us</h1>
    <form action="" onSubmit={handleSubmit}>
      <div>
      <label htmlFor="username">username</label>
      <input type="text"
       name="username" id="username" 
       placeholder='Enter your name'
       required
       value={contact.value}
       onChange={handleInput}
       />
       </div>

       <div>
      <label htmlFor="email">email</label>
      <input type="email"
       name="email"
        id="email" 
       placeholder='Enter your mail'
       required
       value={contact.value}
       onChange={handleInput}
       />
       </div>

       <div>
      <label htmlFor="message">message</label>
      <textarea 
       name="message" id="message" 
       cols="30"
       rows="10"
       placeholder='Enter your message'
       required
       value={contact.value}
       onChange={handleInput}
       />
       </div>

       <div className="submit-btn">
        <button type='submit' className='btn '>Submit</button>
       </div>

    </form>
          </section>
        </div>
     
    </main>
   </section>
    </>
  )
}

export default Contact