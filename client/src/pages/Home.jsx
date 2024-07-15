import React from 'react'

function Home() {
  return (
    <>

      <main>
        <section className='section-hero'>
          <div className="container grid grid-cols-2 " style={{display:"flex", alignItems:"center", justifyContent:"center"}} >

            <div className="hero-content ">
            <p>We are the World Best IT Company</p>
              <h1>Welcome to InfoWave solutions</h1>
              <p>
                Are you ready to take your business to the next level with 
                cutting-edge IT solutions? Look no further! At  <b style={{color:"#535BF2", fontSize:"2.5rem"}}> InfoWave solution, </b> <br />
                we specialize in providing innovative IT services and solutions <br />
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className='btn'>connect now</button></a>

                <a href="/about">
                  <button className='btn'>learn more</button></a>
              </div>
            </div>





// {/* hero images */}

            <div className="hero-image">
              <img src="/images/home.png" alt="Home page image" height="200px" width="400px" />
            </div>
          </div>
        </section>
      </main>
 
 {/* section  2  */}

      <section className="  section-hero" style={{margin:"28px"}}>
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image3">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how <b style={{color:"#535BF2", fontSize:"2.5rem"}}> InfoWave solution, </b> can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/about">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>


    </>


  
  )
}

export default Home