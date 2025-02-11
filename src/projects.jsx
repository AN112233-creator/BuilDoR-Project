
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Project.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 

import  firstImage from './assets/Images-Home/1.IMG_1450.jpg'



function Projects (){

  
  const year = new Date().getFullYear()
 

          const [isOpen, setIsOpen] = useState(false)

          const toggleMenu = () => {
            setIsOpen(!isOpen)


          }

          useEffect(() => {
            const handleScroll = () => {
              const navbar = document.getElementById('navbar');
              if (window.scrollY > 0) {
                navbar.classList.add('black-nav');
              }  else {
                navbar.classList.remove('black-nav');
              }
            };
      
            window.addEventListener('scroll', handleScroll);
      
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

          const [isHover, setIsHover] = useState(false)

          const handleMouseEnter = () => {
            setIsHover(true);  
          };
          const handleMouseLeave = () => {
            setIsHover(false);  
          };






  return(
  
  <>

    <div className="Landing-page">
         <nav className={isOpen ? "nav-active" : ""} id='navbar'>
   
             <a href="Home" className='logo-link'>
           <div className='logo' >
             <img src={logo} alt="LoGo" />
             <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
           </div>
           </a>
           <ul className={isOpen ? "open" : ""}>
             <li><Link to = "/" > Home</Link></li>
             <li> <Link to = "/about"  className= {`${isHover ? "" : ""}`} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>About Us</Link></li>
              <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div>
             <li><Link to = "/projects" className='active'>Projects</Link></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Clients</a></li>
             <li><a href="#">Contact us</a></li>
             <li><a href="#">Blog</a></li>
           </ul>
   
           <div className="icons">
           
                 <div className= {`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                   <div className="bar1"></div>
                   <div className="bar2"></div>
                   <div className="bar3"></div>
                   </div> 
   
                   <div className={`links ${isOpen ? "active" : ""}`}>
                     is
                   </div>
           </div>
   
         </nav>
        
       
         <main>
         <h4 className='exterior'>EXTERIOR & INTERIOR</h4>
         <p className='we-love'>We Love to Create Spaces</p>
        
        </main>
        </div> 

        <section className='projects'>
          <div className="image-description">
                   
                   <div className=''>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                  <div className="image-description-two">
                           
                           <div className=''>
                              <p className='description'>Construction for School of Nursing, KNUST</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         <div className="image-description">
                   
                   <div className=''>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className=''>
                              <p className='description'>Construction for School of Nursing, KNUST</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                        
                         <div className="image-description">
                   
                   <div className=''>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className=''>
                              <p className='description'>Construction for School of Nursing, KNUST</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         <div className="image-description">
                   
                   <div className=''>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className=''>
                              <p className='description'>Construction for School of Nursing, KNUST</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         
                         <div className="image-description">
                   
                   <div className=''>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>



        </section>


 
  </>)


}

export default Projects