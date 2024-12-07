import React, { useRef, useEffect, useState } from "react";

import './Barra.css'
import { Link } from "react-router-dom";
export function Barra(){

    const mainDivRef = useRef(null);
    const [isFloatingVisible, setIsFloatingVisible] = useState(false);
    const [menuEstado, setMenuEstado] = useState(false)
    const [claseMenu, setClaseMenu] = useState('BarraMenuDown px-4 d-flex d-lg-none flex-column')
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsFloatingVisible(!entry.isIntersecting); 
         console.log('entro')
        },
        { threshold: 0 }
      );
  
      if (mainDivRef.current) {
        observer.observe(mainDivRef.current);
      }
  
      return () => {
        if (mainDivRef.current) {
          observer.unobserve(mainDivRef.current);
        }
      };
    }, []);


    const MenuClick = () => {
        if(menuEstado === true){
            setClaseMenu('BarraMenu px-4 d-flex d-lg-none flex-column ')
            
            setTimeout(() => {
                
                setMenuEstado(false);
              }, 500);

              
        }else{
            setMenuEstado(true)
            setClaseMenu('BarraMenuDown px-4 d-flex d-lg-none flex-column')
        }
        
        


        console.log(claseMenu)
    }


    const LinkClick = () => {
      
            setClaseMenu('BarraMenu px-4 d-flex d-lg-none flex-column ')
            
            setTimeout(() => {
                
                setMenuEstado(false);
              }, 500);

              
        
        


     
    }

   


    function MenuIcon() {
        if(menuEstado){
            return(
                
<           svg onClick={MenuClick} className=' ' style={{width:'2rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          fill="#fff" stroke="#fff" stroke-width="2" />
          </svg>
            )
        }else{
            return(
<svg onClick={MenuClick} className=' ' style={{width:'2rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
    

            )
        }
    }
     
    return(
        <>

{/** Pantalla xl+ */

}
        <div ref={mainDivRef}>
        <div  className=" d-none d-xl-flex flex-row justify-content-center align-items-center PrincipalContainer" style={{width:'100%', minHeight:'110px'}}>

        <div className='d-flex flex-row align-items-center' style={{width:'85%', minWidth:'950px'}}>
            
            <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
            <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
            <span className='correoText'>raphielburdier72@gmail.com</span>
            </div>
            <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
               
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/">Inicio</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/trabajos">Proyectos</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/contactos">Contactos</Link>
              <a href="mailto:raphielburdier72@gmail.com" className='button-Default text' style={{textDecoration:'none'}}>Contratame</a>
            
            </div>

           

        </div>

        </div>


        



{/** Pantalla lg */

}


        <div ref={mainDivRef} className=" d-none d-lg-flex d-xl-none flex-row justify-content-center align-items-center PrincipalContainer" style={{width:'100%', minHeight:'110px'}}>

        <div className='d-flex flex-row align-items-center' style={{width:'90%'}}>
            
            <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
           <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
            <span className='correoText'>raphielburdier72@gmail.com</span>
            </div>
            <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
               
            <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/">Inicio</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/trabajos">Proyectos</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/contactos">Contactos</Link>

              <a href="mailto:raphielburdier72@gmail.com" className='button-Default text' style={{textDecoration:'none'}}>Contratame</a>
            
            
            </div>

           

        </div>

        </div>





{/** Pantalla md */

}


<div ref={mainDivRef} className=" d-none d-md-flex d-lg-none flex-row justify-content-center align-items-center PrincipalContainer" style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'95%'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
    <span className='correoText'>raphielburdier72@gmail.com</span>
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
       {/* <a href="#" class="nav-link text me-4">Home +</a>
        <a href="#" class="nav-link text me-4">Acerca de</a>
        <a href="#" class="nav-link text me-4">Proyectos</a>
        <a href="#" class="nav-link text me-4">Contactos</a>
*/
}
<a href="mailto:raphielburdier72@gmail.com" className='button-Default text me-4' style={{textDecoration:'none'}}>Contratame</a>

        {MenuIcon()}
    
    </div>

   

</div>

</div>




{/** Pantalla sm- */

}


<div ref={mainDivRef} className="   d-flex d-md-none flex-row justify-content-center align-items-center PrincipalContainer" style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'95%'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
   
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
       {/* <a href="#" class="nav-link text me-4">Home +</a>
        <a href="#" class="nav-link text me-4">Acerca de</a>
        <a href="#" class="nav-link text me-4">Proyectos</a>
        <a href="#" class="nav-link text me-4">Contactos</a>
*/
}
     
<a href="mailto:raphielburdier72@gmail.com" className='button-Default text me-4' style={{textDecoration:'none'}}>Contratame</a>
        {MenuIcon()}
    
    
    </div>

   

</div>

</div>
        


</div>



<div>

{/*
Pantalla Xl+

*/}

{isFloatingVisible && (<div  className=" BarraSuperiorFlotante d-none d-xl-flex flex-row justify-content-center align-items-center " style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'85%', minWidth:'950px'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
    <span className='correoText'>raphielburdier72@gmail.com</span>
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
    <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/">Inicio</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/trabajos">Proyectos</Link>
              <Link className="nav-link text me-5" style={{textDecoration:'none'}} to="/contactos">Contactos</Link>

              <a href="mailto:raphielburdier72@gmail.com" className='button-Default text' style={{textDecoration:'none'}}>Contratame</a>
    
    
    </div>

   

</div>

</div>

)}   

{/*
Pantalla lg

*/}


{isFloatingVisible && (<div  className=" d-none d-lg-flex d-xl-none flex-row justify-content-center align-items-center BarraSuperiorFlotante" style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'90%'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
    <span className='correoText'>raphielburdier72@gmail.com</span>
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
    <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/">Inicio</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/trabajos">Proyectos</Link>
              <Link className="nav-link text me-4" style={{textDecoration:'none'}} to="/contactos">Contactos</Link>
              <a href="mailto:raphielburdier72@gmail.com" className='button-Default text' style={{textDecoration:'none'}}>Contratame</a>
    
    
    </div>

   

</div>

</div>
)}   


{/*
Pantalla md

*/}

{isFloatingVisible && (<div  className=" d-none d-md-flex d-lg-none flex-row justify-content-center align-items-center BarraSuperiorFlotante" style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'95%'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
    <span className='correoText'>raphielburdier72@gmail.com</span>
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
       {/* <a href="#" class="nav-link text me-4">Home +</a>
        <a href="#" class="nav-link text me-4">Acerca de</a>
        <a href="#" class="nav-link text me-4">Proyectos</a>
        <a href="#" class="nav-link text me-4">Contactos</a>
*/
}
<a href="mailto:raphielburdier72@gmail.com" className='button-Default text me-4' style={{textDecoration:'none'}}>Contratame</a>

       {MenuIcon()}
    
    
    </div>

   

</div>

</div>

)}   

{/*
Pantalla sm-

*/}


{isFloatingVisible && (<div  className="   d-flex d-md-none flex-row justify-content-center align-items-center BarraSuperiorFlotante" style={{width:'100%', minHeight:'110px'}}>

<div className='d-flex flex-row align-items-center' style={{width:'95%'}}>
    
    <div className='text d-flex flex-row justify-content-start align-items-center' style={{width:'30%'}}>
    <Link to="/"> <img className='me-4' src="/images/RaphLogo.png" alt="Projects" style={{width:'3rem', height:'auto', minHeight:''}}/></Link>
   
    </div>
    <div className='text d-flex flex-row justify-content-end align-items-center' style={{width:'70%'}}>
       
       {/* <a href="#" class="nav-link text me-4">Home +</a>
        <a href="#" class="nav-link text me-4">Acerca de</a>
        <a href="#" class="nav-link text me-4">Proyectos</a>
        <a href="#" class="nav-link text me-4">Contactos</a>
*/
}
       
<a href="mailto:raphielburdier72@gmail.com" className='button-Default text me-4' style={{textDecoration:'none'}}>Contratame</a>
        {MenuIcon()}
    </div>

   

</div>

</div>)}   



</div>



{menuEstado &&
<Menu click = {LinkClick}  claseMenu={claseMenu}/>
}


        </>
    )
}



function Menu({claseMenu, click}){

    return(
        <>
        <div  className={claseMenu}>

       
        <Link onClick={click} className="nav-link text mb-4 mt-4" style={{color:'#fff', fontSize:'1.5rem'}} to="/">Inicio</Link>
              <Link onClick={click} className="nav-link text mb-4" style={{color:'#fff', fontSize:'1.5rem'}} to="/acerca">Acerca de</Link>
              <Link onClick={click} className="nav-link text mb-4" style={{color:'#fff', fontSize:'1.5rem'}} to="/trabajos">Proyectos</Link>
              <Link onClick={click} className="nav-link text " style={{color:'#fff', fontSize:'1.5rem'}} to="/contactos">Contactos</Link>
        </div>
        
        
        </>
    )

}