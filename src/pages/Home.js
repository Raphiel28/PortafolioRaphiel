import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ContextoGlobal } from '../Contexto/Contexto'
import { Link } from 'react-router-dom';

import './Home.css'

export function Home(){



  return(
    <div className="d-flex flex-column" style={{width:'100%'}}>
      <div style={{height:'60px'}}></div>
        <Presentation/>
        <div style={{height:'60px'}}></div>
        <AcercaHome/>
        <div style={{height:'60px'}}></div>
        <Habilidades/>
        <div style={{height:'60px'}}></div>
        <Trabajos/>
        <div style={{height:'60px'}}></div>
        <Contactar/>
        <div style={{height:'60px'}}></div>
        <FooterDown/>
    </div>
  )
}





function Presentation(){

  const [iconState, setIconState] = useState(false)
    
    const classIco =  iconState? 'BotonesIcono ms-2' : 'ms-2' 

    const [buttonStyle, setButtonStyle] = useState({
      
    });

    const MouseEnter = () => {
        setIconState(true)
    }

    const MouseLeave = () => {
        setIconState(false)
        setButtonStyle( {

          transition: 'all 0.5s ease-in-out'
        })
    }

    

    const MouseDown = () => {
     setButtonStyle( {
        color:  '#fff',
        boxShadow: 'box-shadow: 0 0 0 1px #fff',
        backgroundColor: '#0F0715',
         transition: 'all 0.2s ease-in-out'
      })


    }


    const MouseUp = () => {

      setButtonStyle( {
        transition: 'all 0.2s ease-in-out'
      })


    }

    

    return(
      <>
        <div className=" d-none  d-xxl-flex flex-column align-items-center justify-content-center" style={{width:'100%'}}>
            
            <div className="d-flex flex-row align-items-center" style={{width:'85%'}}>    
            <div className="Presentacion" style={{width:'40%'}}>
            <h1><span>Soy</span> Raphiel</h1>
            <div style={{height:'15px'}}></div>
  <h2>Desarrollador Full Stack <span>Web & Desktop</span></h2>
  <div style={{height:'15px'}}></div>
  <p>
  Creo soluciones intuitivas que simplifican la experiencia de usuario  mediante aplicaciones web y simplifican el trabajo de muchos mediante aplicaciones de escritorio.
  </p>
  <div style={{height:'15px'}}></div>
<div className='d-flex flex-row align-items-center'>
<a href={`${process.env.PUBLIC_URL}/archivos/CV-DesarrolladorDeSoftwareRaphiel.pdf`} download="CV-DesarrolladorDeSoftwareRaphiel.pdf" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onMouseDown={MouseDown} onMouseUp={MouseUp} className='button-DefaultHome me-4' style={buttonStyle}> Descargar CV
<svg className={classIco}  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
</svg>
</a>


<a href="https://www.linkedin.com/in/raphiel-burdier-a9590b175/" target="_blank" rel='noopener noreferrer' className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
           fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="https://github.com/Raphiel28" target="_blank" rel='noopener noreferrer' className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">

      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="mailto:raphielburdier72@gmail.com" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">

<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

 
</div>
        <div className='mt-5'>

        </div>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'60%'}}>
            <img className='Presentacion-img' style={{}} src={`${process.env.PUBLIC_URL}/images/Perfil.png`} alt=''/>

            </div>

            </div>

            <div></div>
            </div>


           {//Tamanio d-xl
          
          }
            <div className=" d-none  d-xl-flex d-xxl-none flex-column align-items-center justify-content-center" style={{width:'100%'}}>
            
            <div className="d-flex flex-row align-items-center" style={{width:'85%'}}>    
            <div className="Presentacion" style={{width:'40%'}}>
            <h1 style={{fontSize:'2rem'}}><span>Soy</span> Raphiel</h1>
            <div style={{height:'15px'}}></div>
  <h2 style={{fontSize:'3rem'}}>Desarrollador Full Stack <span>Web & Desktop</span></h2>
  <div style={{height:'15px'}}></div>
  <p style={{fontSize:'1rem'}}>
  Creo soluciones intuitivas que simplifican la experiencia de usuario  mediante aplicaciones web y simplifican el trabajo de muchos mediante aplicaciones de escritorio.
  </p>
  <div style={{height:'15px'}}></div>
<div className='d-flex flex-row align-items-center'>

<a href={`${process.env.PUBLIC_URL}/archivos/CV-DesarrolladorDeSoftwareRaphiel.pdf`} download="CV-DesarrolladorDeSoftwareRaphiel.pdf" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onMouseDown={MouseDown} onMouseUp={MouseUp} className='button-DefaultHome me-4' style={buttonStyle}> Descargar CV
<svg className={classIco}  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
</svg>
</a>


<a href="https://www.linkedin.com/in/raphiel-burdier-a9590b175/" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
           fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="https://github.com/Raphiel28" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">

      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="mailto:raphielburdier72@gmail.com" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">

<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

 
</div>

        <div className='mt-5'>

        </div>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'60%'}}>
            <img className='Presentacion-img' style={{}} src={`${process.env.PUBLIC_URL}/images/Perfil.png`} alt=''/>

            </div>

            </div>

            <div></div>
            </div>


             {//Tamanio d-lg
          
          }
          <div className=" d-none  d-lg-flex d-xl-none flex-column align-items-center justify-content-center" style={{width:'100%'}}>
          
          <div className="d-flex flex-row align-items-center" style={{width:'90%'}}>    
          <div className="Presentacion" style={{width:'40%'}}>
          <h1 style={{fontSize:'1.5rem'}}><span>Soy</span> Raphiel</h1>
          <div style={{height:'15px'}}></div>
<h2 style={{fontSize:'2.5rem'}}>Desarrollador Full Stack <span>Web & Desktop</span></h2>
<div style={{height:'15px'}}></div>
<p style={{fontSize:'1rem'}}>
Creo soluciones intuitivas que simplifican la experiencia de usuario  mediante aplicaciones web y simplifican el trabajo de muchos mediante aplicaciones de escritorio.
</p>
<div style={{height:'15px'}}></div>
<div className='d-flex flex-row align-items-center'>

<a href={`${process.env.PUBLIC_URL}/archivos/CV-DesarrolladorDeSoftwareRaphiel.pdf`} download="CV-DesarrolladorDeSoftwareRaphiel.pdf" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onMouseDown={MouseDown} onMouseUp={MouseUp} className='button-DefaultHome me-4' style={buttonStyle}> Descargar CV
<svg className={classIco}  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
</svg>
</a>


<a href="https://www.linkedin.com/in/raphiel-burdier-a9590b175/" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
           fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="https://github.com/Raphiel28" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">

      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="mailto:raphielburdier72@gmail.com" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">

<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

 
</div>

      <div className='mt-5'>

      </div>
          </div>
          <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'60%'}}>
          <img className='Presentacion-img' style={{}} src={`${process.env.PUBLIC_URL}/images/Perfil.png`} alt=''/>

          </div>

          </div>

          <div></div>
          </div>



           {//Tamanio d-md
          
        }
        <div className=" d-none  d-md-flex d-lg-none flex-column align-items-center justify-content-center" style={{width:'100%'}}>
        
        <div className="d-flex flex-row align-items-center" style={{width:'95%'}}>    
        <div className="Presentacion" style={{width:'50%'}}>
        <h1 style={{fontSize:'1.5rem'}}><span>Soy</span> Raphiel</h1>
        <div style={{height:'15px'}}></div>
<h2 style={{fontSize:'2rem'}}>Desarrollador Full Stack <span>Web & Desktop</span></h2>
<div style={{height:'15px'}}></div>
<p style={{fontSize:'1rem'}}>
Creo soluciones intuitivas que simplifican la experiencia de usuario  mediante aplicaciones web y simplifican el trabajo de muchos mediante aplicaciones de escritorio.
</p>
<div style={{height:'15px'}}></div>
<div className='d-flex flex-row align-items-center'>

<a href={`${process.env.PUBLIC_URL}/archivos/CV-DesarrolladorDeSoftwareRaphiel.pdf`} download="CV-DesarrolladorDeSoftwareRaphiel.pdf" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onMouseDown={MouseDown} onMouseUp={MouseUp} className='button-DefaultHome me-4' style={buttonStyle}> Descargar CV
<svg className={classIco}  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
</svg>
</a>


<a href="https://www.linkedin.com/in/raphiel-burdier-a9590b175/" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
           fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="https://github.com/Raphiel28" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-4' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">

      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="mailto:raphielburdier72@gmail.com" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">

<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

 
</div>

    <div className='mt-5'>

    </div>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'50%'}}>
        <img className='Presentacion-img' style={{}} src={`${process.env.PUBLIC_URL}/images/Perfil.png`} alt=''/>

        </div>

        </div>

        <div></div>
        </div>

            {//Tamanio d-sm
           
        }
        <div className="   d-flex d-md-none flex-column align-items-center justify-content-center" style={{width:'100%'}}>
        
        <div className="d-flex flex-row justify-content-center align-items-center" style={{width:'95%'}}>    
        <div className="Presentacion d-flex flex-column justify-content-center align-items-center text-center" style={{width:'100%'}}>
        <h1 style={{fontSize:'1.5rem'}}><span>Soy</span> Raphiel</h1>
        <div style={{height:'30px'}}></div>
        <img className='Presentacion-img' style={{}} src={`${process.env.PUBLIC_URL}/images/Perfil.png`} alt=''/>
        <div style={{height:'30px'}}></div>
<h2 style={{fontSize:'2rem'}}>Desarrollador Full Stack <span>Web & Desktop</span></h2>
<div style={{height:'15px'}}></div>
<p style={{fontSize:'0.9rem'}}>
Creo soluciones intuitivas que simplifican la experiencia de usuario  mediante aplicaciones web y simplifican el trabajo de muchos mediante aplicaciones de escritorio.
</p>
  <div style={{height:'15px'}}></div>
<div className='d-flex flex-row align-items-center'>

<a href={`${process.env.PUBLIC_URL}/archivos/CV-DesarrolladorDeSoftwareRaphiel.pdf`} download="CV-DesarrolladorDeSoftwareRaphiel.pdf" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onMouseDown={MouseDown} onMouseUp={MouseUp} className='button-DefaultHome me-3' style={buttonStyle}> Descargar CV
<svg className={classIco}  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
</svg>
</a>


<a href="https://www.linkedin.com/in/raphiel-burdier-a9590b175/" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-3' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
     <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
           fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="https://github.com/Raphiel28" rel='noopener noreferrer' target="_blank" className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center me-3' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">

      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

<a href="mailto:raphielburdier72@gmail.com"  className='button-DefaultIcon d-flex flex-row justify-content-center align-items-center' >
<svg className='Pre-select-icon ' style={{width:'1rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">

<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
</a>

 
</div>

    <div className='mt-5'>

    </div>
        </div>
       
        </div>

        <div></div>
        </div>
            </>
    )
}




function AcercaHome() {

  return(<>

   {//Tamanio d-xxl
           
          }
  
  <div className=' d-none d-xxl-flex flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
      <div className='d-flex flex-row ' style={{width:'85%'}}>
      
        <div className='d-flex flex-column ' style={{width:'50%'}}>

            <div className='d-flex flex-row '>
                <svg className='me-3' style={{width:'3rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                    fill="#8750F7" stroke="#8750F7" stroke-width="2" />

          
                </svg>
                <h2 className='AcercaHomeTitle'>Mi Educacion</h2>


            </div>


            <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5'  >
            <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent'}}>2019 - 2023</p>
            <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px'}}>Desarrollador de Software</h6>
            <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px'}}>Instituto Tecnologico de las America</p>
            </div>

            <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4'>
            <p className='AcercaHomeFecha' style={{margin:'0px'}}>2017 - 2019</p>
            <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px'}}>Técnico en Informatica</h6>
            <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px'}}>Politécnico Francisco Antonio Batista Garcias </p>
            </div>

        </div>


        <div className='d-flex flex-column ' style={{width:'50%'}}>

            <div className='d-flex flex-row '>
            <svg className='me-3 ' style={{width:'3rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
          fill="#8750F7" stroke="#8750F7" stroke-width="2" />
 </svg>
                <h2 className='AcercaHomeTitle'>Mi Experiencia</h2>


            </div>


            <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5'  >
            <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent'}}> May 2023 - Jul 2024</p>
            <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px'}}>Desarrollador  TI</h6>
            <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px'}}>Laboratorios Rangel</p>
            </div>

            <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4'>
            <p className='AcercaHomeFecha' style={{margin:'0px'}}> Sept 2022 - Dic 2022</p>
            <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px'}}>Desarrollador Backend</h6>
            <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px'}}>Nelmix Solution</p>
            </div>

        </div>


      </div>

  </div>



{//Tamanio d-xl
           
          }
  
          <div className=' d-none d-xl-flex d-xxl-none flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
              <div className='d-flex flex-row ' style={{width:'85%'}}>
              
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                        <svg className='me-3' style={{width:'3rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                            fill="#8750F7" stroke="#8750F7" stroke-width="2" />
        
                  
                        </svg>
                        <h2 className='AcercaHomeTitle'>Mi Educacion</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5'  >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1.3rem'}}>2019 - 2023</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.7rem'}}>Desarrollador de Software</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Instituto Tecnologico de las America</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4'>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1.3rem'}}>2017 - 2019</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.7rem'}}>Técnico en Informatica</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Politécnico Francisco Antonio Batista Garcias</p>
                    </div>
        
                </div>
        
        
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                    <svg className='me-3 ' style={{width:'3rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                  fill="#8750F7" stroke="#8750F7" stroke-width="2" />
         </svg>
                        <h2 className='AcercaHomeTitle'>Mi Experiencia</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5'  >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1.3rem'}}> May 2023 - Jul 2024</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.7rem'}}>Desarrollador  TI</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Laboratorios Rangel</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4'>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1.3rem'}}> Sept 2022 - Dic 2022</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.7rem'}}>Desarrollador Backend</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Nelmix Solution</p>
                    </div>
        
                </div>
        
        
              </div>
        
          </div>
  

{//Tamanio d-lg
           
          }
  
          <div className=' d-none d-lg-flex d-xl-none flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
              <div className='d-flex flex-row ' style={{width:'85%'}}>
              
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                        <svg className='me-3' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                            fill="#8750F7" stroke="#8750F7" stroke-width="2" />
        
                  
                        </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.6rem'}}>Mi Educacion</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5' style={{width:'90%'}}  >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1.2rem'}}>2019 - 2023</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.6rem'}}>Desarrollador de Software</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Instituto Tecnologico de las America</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'90%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1.2rem'}}>2017 - 2019</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.6rem'}}>Técnico en Informatica</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Politécnico Francisco Antonio Batista Garcias</p>
                    </div>
        
                </div>
        
        
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                    <svg className='me-3 ' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                  fill="#8750F7" stroke="#8750F7" stroke-width="2" />
         </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.6rem'}}>Mi Experiencia</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-5' style={{width:'90%'}} >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1.2rem'}}> May 2023 - Jul 2024</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.6rem'}}>Desarrollador  TI</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Laboratorios Rangel</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'90%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1.2rem'}}> Sept 2022 - Dic 2022</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.6rem'}}>Desarrollador Backend</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'1rem'}}>Nelmix Solution</p>
                    </div>
        
                </div>
        
        
              </div>
        
          </div>



{//Tamanio d-md
           
          }
  
          <div className=' d-none d-md-flex d-lg-none flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
              <div className='d-flex flex-row ' style={{width:'90%'}}>
              
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                        <svg className='me-3' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                            fill="#8750F7" stroke="#8750F7" stroke-width="2" />
        
                  
                        </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.2rem'}}>Mi Educacion</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-3' style={{width:'90%'}}  >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1rem'}}>2019 - 2023</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador de Software</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Instituto Tecnologico de las America</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'90%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1rem'}}>2017 - 2019</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Técnico en Informatica</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Politécnico Francisco Antonio Batista Garcias</p>
                    </div>
        
                </div>
        
        
                <div className='d-flex flex-column ' style={{width:'50%'}}>
        
                    <div className='d-flex flex-row '>
                    <svg className='me-3 ' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                  fill="#8750F7" stroke="#8750F7" stroke-width="2" />
         </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.2rem'}}>Mi Experiencia</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-3' style={{width:'90%'}} >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1rem'}}> May 2023 - Jul 2024</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador  TI</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Laboratorios Rangel</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'90%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1rem'}}> Sept 2022 - Dic 2022</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador Backend</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Nelmix Solution</p>
                    </div>
        
                </div>
        
        
              </div>
        
          </div>



{//Tamanio d-sm
           
          }
  
          <div className=' d-flex d-md-none flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
              <div className='d-flex flex-column align-items-center ' style={{width:'90%'}}>
              
                <div className='d-flex flex-column ' style={{width:'100%'}}>
        
                    <div className='d-flex flex-row '>
                        <svg className='me-3' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                            fill="#8750F7" stroke="#8750F7" stroke-width="2" />
        
                  
                        </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.2rem'}}>Mi Educacion</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-3' style={{width:'100%'}}  >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1rem'}}>2019 - 2023</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador de Software</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Instituto Tecnologico de las America</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'100%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1rem'}}>2017 - 2019</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Técnico en Informatica</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Politécnico Francisco Antonio Batista Garcias</p>
                    </div>
        
                </div>
        
        
                <div className='d-flex flex-column mt-5' style={{width:'100%'}}>
        
                    <div className='d-flex flex-row '>
                    <svg className='me-3 ' style={{width:'2.6rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                  fill="#8750F7" stroke="#8750F7" stroke-width="2" />
         </svg>
                        <h2 className='AcercaHomeTitle' style={{fontSize:'2.2rem'}}>Mi Experiencia</h2>
        
        
                    </div>
        
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-3' style={{width:'100%'}} >
                    <p className='AcercaHomeFecha' style={{margin:'0px', background:'transparent', fontSize:'1rem'}}> May 2023 - Jul 2024</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador  TI</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Laboratorios Rangel</p>
                    </div>
        
                    <div className=' AcercaHomeContenedor d-flex flex-column justify-content-start py-3 px-4 mt-4' style={{width:'100%'}}>
                    <p className='AcercaHomeFecha' style={{margin:'0px', fontSize:'1rem'}}> Sept 2022 - Dic 2022</p>
                    <h6 className='AcercaHomePrincipal mt-1' style={{margin:'0px', fontSize:'1.3rem'}}>Desarrollador Backend</h6>
                    <p className='AcercaHomeDescripcion mt-1' style={{margin:'0px', fontSize:'0.8rem'}}>Nelmix Solution</p>
                    </div>
        
                </div>
        
        
              </div>
        
          </div>


  
  </>)

}

function Habilidades() {








  return (
    <>
      <div
        className=" d-flex flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className="d-flex flex-column align-items-center" style={{ width: '85%' }}>
          <h2 className="AcercaHomeTitle d-none d-md-block">Mis Habilidades</h2>
          <h2 className="AcercaHomeTitle d-block d-md-none" style={{fontSize:'2rem'}}>Mis Habilidades</h2>
          <p className="HabilidadesDescripcion d-none d-md-block ">
            Fusionando conocimientos técnicos con creatividad para ofrecer resultados que marcan la diferencia en el mundo digital.
          </p>

          <p className="HabilidadesDescripcion d-block d-md-none " style={{fontSize:'0.9rem'}}>
            Fusionando conocimientos técnicos con creatividad para ofrecer resultados que marcan la diferencia en el mundo digital.
          </p>
          <div className="row mt-5" style={{ width: '95%' }}>



            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-4 ">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  fill="#61DBFB"
                  stroke="#61DBFB"
                  strokeWidth="2"
                />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>React</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease', fontSize:'1.1rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  fill="#61DBFB"
                  stroke="#61DBFB"
                  strokeWidth="2"
                />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>React</p>
              </div>
            </div>



            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                
                viewBox="0 0 256 288" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
    <g>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fill-rule="nonzero"></path>
        <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fill-rule="nonzero"></path>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fill-rule="nonzero"></path>
        <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF"></path>
        <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
    </g>
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>C#</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                
                viewBox="0 0 256 288" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
    <g>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fill-rule="nonzero"></path>
        <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fill-rule="nonzero"></path>
        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fill-rule="nonzero"></path>
        <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF"></path>
        <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
    </g>
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>C#</p>
              </div>
            </div>



            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                  <path
    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0z"
    fill="#e34c26"
    stroke="#ffffff"
    stroke-width="2"
  />
 
  <path
    d="M308.2 159.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
    fill="#ffffff"
  />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>HTML</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                  <path
    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0z"
    fill="#e34c26"
    stroke="#ffffff"
    stroke-width="2"
  />
 
  <path
    d="M308.2 159.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
    fill="#ffffff"
  />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>HTML</p>
              </div>
            </div>




            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                viewBox="0 0 384 512"><path
                d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0z"
                fill="#61DBFB"
                stroke="#61DBFB"
                stroke-width="2"
              />
              
              <path
                d="M313.1 112l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                fill="#ffffff"
              />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>CSS</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem' }}
                viewBox="0 0 384 512"><path
                d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0z"
                fill="#61DBFB"
                stroke="#61DBFB"
                stroke-width="2"
              />
              
              <path
                d="M313.1 112l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                fill="#ffffff"
              />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>CSS</p>
              </div>
            </div>



            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem'  }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                 <path
    d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96z"
    fill="#f0db4f"
    stroke="#f0db4f"
    stroke-width="2"
  />

  <path
    d="M180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"
    fill="#000"
  />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>JavaScript</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem'  }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                 <path
    d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96z"
    fill="#f0db4f"
    stroke="#f0db4f"
    stroke-width="2"
  />

  <path
    d="M180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"
    fill="#000"
  />
              </svg>
              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>JavaScript</p>
              </div>
            </div>



            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease',  maxHeight:'4rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48">
<path fill="#cfd8dc" d="M23.084,11.277c-1.633-2.449-1.986-5.722-2.063-7.067c-4.148,0.897-8.269,2.506-8.031,3.691 c0.03,0.149,0.218,0.328,0.53,0.502l-0.488,0.873c-0.596-0.334-0.931-0.719-1.022-1.179c-0.269-1.341,1.25-2.554,4.642-3.709 c2.316-0.789,4.652-1.26,4.751-1.279l0.597-0.12L22,3.6c0,0.042,0.026,4.288,1.916,7.123L23.084,11.277z"></path>
<path fill="#cfd8dc" d="M24.751,43H24.5c-8.192,0-17.309-2.573-18.386-6.879c-0.657-2.63,1.492-5.536,6.214-8.401 l0.52,0.854c-4.249,2.579-6.296,5.172-5.763,7.305c0.935,3.738,9.575,6.068,17.153,6.12c0.901-1.347,5.742-9.26,2.979-19.873 l0.967-0.252c3.149,12.092-3.218,20.837-3.282,20.924L24.751,43z"></path>
<path fill="#cfd8dc" d="M9.931,39.306c-0.539,0-0.806-0.059-0.85-0.07c-0.176-0.043-0.314-0.178-0.362-0.352 c-0.049-0.174,0.001-0.361,0.129-0.488c0.072-0.072,7.197-7.208,8.159-12.978l0.986,0.164c-0.827,4.964-5.715,10.623-7.656,12.707 c1.939-0.111,6.835-1.019,16.234-6.28c-7.335-0.804-8.495-6.676-8.507-6.739l0.983-0.181c0.047,0.246,1.226,6.011,9.244,6.011 c0.003,0,0.005,0,0.008,0l0,0c0.227,0,0.424,0.152,0.482,0.37c0.06,0.218-0.036,0.449-0.231,0.563 C17.315,38.542,11.867,39.305,9.931,39.306z"></path>
<path fill="#cfd8dc" d="M14.524,41.7c-0.207,0-0.395-0.128-0.468-0.325c-0.079-0.211-0.007-0.45,0.177-0.582 c0.034-0.025,1.813-1.338,3.706-4.228c-0.728-0.322-1.465-0.698-2.196-1.137c-0.888-0.533-1.559-1.105-2.06-1.691 c-2.57,0.678-4.942,0.946-7.025,0.769l0.084-0.996c1.876,0.159,4.009-0.063,6.321-0.64c-1.573-2.688-0.129-5.356-0.109-5.392 l0.874,0.487c-0.067,0.122-1.265,2.37,0.249,4.633c2.201-0.632,4.549-1.567,6.979-2.782c0.559-1.835,0.996-3.922,1.225-6.276 c0.016-0.161,0.108-0.304,0.248-0.385s0.311-0.088,0.458-0.021c0.032,0.015,3.264,1.491,5.604,2.454 c0.17,0.07,0.288,0.228,0.307,0.411c0.02,0.183-0.063,0.361-0.216,0.465c-2.289,1.56-4.563,2.913-6.778,4.042 c-0.702,2.225-1.571,4.077-2.459,5.591c3.702,1.383,6.915,1.404,6.956,1.404c0.228,0,0.427,0.154,0.484,0.375 c0.057,0.221-0.042,0.452-0.241,0.563c-4.54,2.522-11.767,3.232-12.072,3.261C14.556,41.699,14.54,41.7,14.524,41.7z M18.909,36.967c-1.04,1.614-2.062,2.773-2.826,3.53c1.998-0.294,5.501-0.938,8.408-2.139 C23.099,38.187,21.084,37.807,18.909,36.967z M14.767,33.431c0.393,0.392,0.883,0.775,1.49,1.14 c0.736,0.442,1.483,0.817,2.22,1.135c0.754-1.264,1.501-2.781,2.142-4.568C18.598,32.1,16.636,32.868,14.767,33.431z M23.202,24.329c-0.205,1.768-0.521,3.381-0.913,4.85c1.66-0.885,3.354-1.896,5.062-3.026 C25.802,25.497,24.099,24.734,23.202,24.329z"></path><path fill="#cfd8dc" d="M17.924,10.6c-0.117,0-0.233-0.042-0.325-0.12c-1.61-1.378-3.505-4.182-3.585-4.301 c-0.129-0.191-0.109-0.446,0.046-0.616c0.154-0.171,0.408-0.211,0.608-0.102c0.011,0.003,0.938,0.385,7.217,1.431 c0.181,0.03,0.33,0.156,0.39,0.328c0.061,0.172,0.022,0.364-0.1,0.5c-1.758,1.953-3.979,2.813-4.073,2.848 C18.044,10.589,17.983,10.6,17.924,10.6z M15.647,6.746c0.631,0.849,1.54,1.996,2.372,2.769c0.511-0.233,1.657-0.818,2.744-1.798 C18.18,7.276,16.604,6.962,15.647,6.746z"></path><path fill="#b71c1c" d="M21.843,24.4c-0.068,0-0.137-0.014-0.201-0.042c-0.199-0.088-0.319-0.294-0.296-0.51 c0.292-2.749-3.926-3.852-3.969-3.862c-0.174-0.044-0.312-0.179-0.359-0.352s0.002-0.359,0.129-0.486 c0.207-0.207,5.139-5.098,11.327-7.784c0.173-0.075,0.369-0.047,0.515,0.07c0.145,0.118,0.212,0.307,0.174,0.489 c-1.186,5.744-6.71,12.044-6.944,12.309C22.12,24.341,21.982,24.4,21.843,24.4z M18.455,19.285 c1.184,0.445,3.258,1.475,3.783,3.356c1.449-1.808,4.542-5.973,5.697-9.934C23.548,14.817,19.854,17.999,18.455,19.285z"></path>
<path fill="#b71c1c" d="M13.079,28.36l-0.475-0.88c1.883-1.015,4.04-2.883,5.807-5.054c-1.504,1.03-2.365,1.735-2.392,1.758 l-0.639-0.77c0.039-0.032,1.764-1.447,4.631-3.22c0.787-1.266,1.392-2.568,1.703-3.816c0.053-0.212,0.099-0.417,0.136-0.615 c-1.925-0.687-3.701-1.094-4.921-1.269c-0.185-0.026-0.339-0.153-0.401-0.328c-0.062-0.175-0.021-0.371,0.104-0.507 c0.085-0.092,2.116-2.268,4.654-3.463c0.197-0.093,0.433-0.047,0.581,0.114c0.067,0.073,1.44,1.615,1.091,4.805 c1.155,0.45,2.345,0.997,3.491,1.648c2.759-1.24,5.892-2.356,9.229-3.03c0.172-0.034,0.363,0.028,0.481,0.168 c0.117,0.14,0.149,0.333,0.083,0.503c-1.3,3.332-4.786,6.891-4.934,7.041c-0.101,0.102-0.239,0.153-0.383,0.148 c-0.143-0.008-0.275-0.076-0.365-0.188c-1.12-1.408-2.584-2.574-4.163-3.523c-2.175,1.004-4.101,2.078-5.684,3.049 C18.693,24.084,15.644,26.979,13.079,28.36z M27.492,17.396c1.29,0.832,2.491,1.81,3.484,2.948 c0.828-0.898,2.815-3.168,3.942-5.422C32.268,15.532,29.76,16.415,27.492,17.396z M22.799,16.122 c-0.033,0.163-0.071,0.33-0.113,0.5c-0.21,0.839-0.544,1.701-0.972,2.561c1.096-0.626,2.309-1.272,3.618-1.898 C24.494,16.841,23.639,16.455,22.799,16.122z M18.048,13.672c1.111,0.218,2.48,0.574,3.941,1.086 c0.152-1.843-0.346-2.972-0.647-3.472C19.966,12.004,18.761,13.014,18.048,13.672z"></path><path fill="#b71c1c" d="M18.05,18.5c0,4.38-3.65,7.86-6.28,10.4c-0.44,0.43-1.93,0.5-1.93,0.5 c0.37-0.38,0.79-0.78,1.24-1.21c2.5-2.42,5.97-5.73,5.97-9.69c0-4.69-1.89-6.54-3.38-8.02c-0.66-0.67-1.22-1.31-1.56-2.09 l0.31-0.13c0.34,0.15,0.73,0.32,1.03,0.45c0.24,0.35,0.56,0.69,0.93,1.06C15.91,11.3,18.05,13.4,18.05,18.5z"></path><path fill="#b71c1c" d="M42.935,19.794c0,0-0.605,0.086-0.775,0.106c-8.76,0.97-17.8,3.49-22.97,5.56 c-1.87,0.75-3.81,1.66-5.58,2.68c-0.01,0.01-0.02,0.01-0.04,0.02C12.53,28.76,10,30,7.95,31.09c3-3.19,8.62-5.65,10.86-6.55 c5.07-2.03,13.78-4.48,22.35-5.53c-1.01-1.18-3.48-3.68-8.34-5.54c-2.84-1.1-7.16-1.72-10.97-2.27c-6.06-0.87-9.51-1.45-9.84-3.1 c-0.07-0.33-0.02-0.66,0.13-0.98c0.33,0.54,0.8,0.92,1.11,1.14c0.15,0.1,0.26,0.16,0.3,0.18l0.01,0.01 c1.42,0.75,5.25,1.3,8.44,1.76c3.86,0.56,8.23,1.19,11.18,2.32c6.87,2.65,9.24,6.44,9.34,6.6 C42.61,19.28,42.935,19.794,42.935,19.794z"></path>

              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>Sql Server</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3.2rem', cursor: 'pointer', transition: 'all 0.5s ease',  maxHeight:'4rem' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48">
<path fill="#cfd8dc" d="M23.084,11.277c-1.633-2.449-1.986-5.722-2.063-7.067c-4.148,0.897-8.269,2.506-8.031,3.691 c0.03,0.149,0.218,0.328,0.53,0.502l-0.488,0.873c-0.596-0.334-0.931-0.719-1.022-1.179c-0.269-1.341,1.25-2.554,4.642-3.709 c2.316-0.789,4.652-1.26,4.751-1.279l0.597-0.12L22,3.6c0,0.042,0.026,4.288,1.916,7.123L23.084,11.277z"></path>
<path fill="#cfd8dc" d="M24.751,43H24.5c-8.192,0-17.309-2.573-18.386-6.879c-0.657-2.63,1.492-5.536,6.214-8.401 l0.52,0.854c-4.249,2.579-6.296,5.172-5.763,7.305c0.935,3.738,9.575,6.068,17.153,6.12c0.901-1.347,5.742-9.26,2.979-19.873 l0.967-0.252c3.149,12.092-3.218,20.837-3.282,20.924L24.751,43z"></path>
<path fill="#cfd8dc" d="M9.931,39.306c-0.539,0-0.806-0.059-0.85-0.07c-0.176-0.043-0.314-0.178-0.362-0.352 c-0.049-0.174,0.001-0.361,0.129-0.488c0.072-0.072,7.197-7.208,8.159-12.978l0.986,0.164c-0.827,4.964-5.715,10.623-7.656,12.707 c1.939-0.111,6.835-1.019,16.234-6.28c-7.335-0.804-8.495-6.676-8.507-6.739l0.983-0.181c0.047,0.246,1.226,6.011,9.244,6.011 c0.003,0,0.005,0,0.008,0l0,0c0.227,0,0.424,0.152,0.482,0.37c0.06,0.218-0.036,0.449-0.231,0.563 C17.315,38.542,11.867,39.305,9.931,39.306z"></path>
<path fill="#cfd8dc" d="M14.524,41.7c-0.207,0-0.395-0.128-0.468-0.325c-0.079-0.211-0.007-0.45,0.177-0.582 c0.034-0.025,1.813-1.338,3.706-4.228c-0.728-0.322-1.465-0.698-2.196-1.137c-0.888-0.533-1.559-1.105-2.06-1.691 c-2.57,0.678-4.942,0.946-7.025,0.769l0.084-0.996c1.876,0.159,4.009-0.063,6.321-0.64c-1.573-2.688-0.129-5.356-0.109-5.392 l0.874,0.487c-0.067,0.122-1.265,2.37,0.249,4.633c2.201-0.632,4.549-1.567,6.979-2.782c0.559-1.835,0.996-3.922,1.225-6.276 c0.016-0.161,0.108-0.304,0.248-0.385s0.311-0.088,0.458-0.021c0.032,0.015,3.264,1.491,5.604,2.454 c0.17,0.07,0.288,0.228,0.307,0.411c0.02,0.183-0.063,0.361-0.216,0.465c-2.289,1.56-4.563,2.913-6.778,4.042 c-0.702,2.225-1.571,4.077-2.459,5.591c3.702,1.383,6.915,1.404,6.956,1.404c0.228,0,0.427,0.154,0.484,0.375 c0.057,0.221-0.042,0.452-0.241,0.563c-4.54,2.522-11.767,3.232-12.072,3.261C14.556,41.699,14.54,41.7,14.524,41.7z M18.909,36.967c-1.04,1.614-2.062,2.773-2.826,3.53c1.998-0.294,5.501-0.938,8.408-2.139 C23.099,38.187,21.084,37.807,18.909,36.967z M14.767,33.431c0.393,0.392,0.883,0.775,1.49,1.14 c0.736,0.442,1.483,0.817,2.22,1.135c0.754-1.264,1.501-2.781,2.142-4.568C18.598,32.1,16.636,32.868,14.767,33.431z M23.202,24.329c-0.205,1.768-0.521,3.381-0.913,4.85c1.66-0.885,3.354-1.896,5.062-3.026 C25.802,25.497,24.099,24.734,23.202,24.329z"></path><path fill="#cfd8dc" d="M17.924,10.6c-0.117,0-0.233-0.042-0.325-0.12c-1.61-1.378-3.505-4.182-3.585-4.301 c-0.129-0.191-0.109-0.446,0.046-0.616c0.154-0.171,0.408-0.211,0.608-0.102c0.011,0.003,0.938,0.385,7.217,1.431 c0.181,0.03,0.33,0.156,0.39,0.328c0.061,0.172,0.022,0.364-0.1,0.5c-1.758,1.953-3.979,2.813-4.073,2.848 C18.044,10.589,17.983,10.6,17.924,10.6z M15.647,6.746c0.631,0.849,1.54,1.996,2.372,2.769c0.511-0.233,1.657-0.818,2.744-1.798 C18.18,7.276,16.604,6.962,15.647,6.746z"></path><path fill="#b71c1c" d="M21.843,24.4c-0.068,0-0.137-0.014-0.201-0.042c-0.199-0.088-0.319-0.294-0.296-0.51 c0.292-2.749-3.926-3.852-3.969-3.862c-0.174-0.044-0.312-0.179-0.359-0.352s0.002-0.359,0.129-0.486 c0.207-0.207,5.139-5.098,11.327-7.784c0.173-0.075,0.369-0.047,0.515,0.07c0.145,0.118,0.212,0.307,0.174,0.489 c-1.186,5.744-6.71,12.044-6.944,12.309C22.12,24.341,21.982,24.4,21.843,24.4z M18.455,19.285 c1.184,0.445,3.258,1.475,3.783,3.356c1.449-1.808,4.542-5.973,5.697-9.934C23.548,14.817,19.854,17.999,18.455,19.285z"></path>
<path fill="#b71c1c" d="M13.079,28.36l-0.475-0.88c1.883-1.015,4.04-2.883,5.807-5.054c-1.504,1.03-2.365,1.735-2.392,1.758 l-0.639-0.77c0.039-0.032,1.764-1.447,4.631-3.22c0.787-1.266,1.392-2.568,1.703-3.816c0.053-0.212,0.099-0.417,0.136-0.615 c-1.925-0.687-3.701-1.094-4.921-1.269c-0.185-0.026-0.339-0.153-0.401-0.328c-0.062-0.175-0.021-0.371,0.104-0.507 c0.085-0.092,2.116-2.268,4.654-3.463c0.197-0.093,0.433-0.047,0.581,0.114c0.067,0.073,1.44,1.615,1.091,4.805 c1.155,0.45,2.345,0.997,3.491,1.648c2.759-1.24,5.892-2.356,9.229-3.03c0.172-0.034,0.363,0.028,0.481,0.168 c0.117,0.14,0.149,0.333,0.083,0.503c-1.3,3.332-4.786,6.891-4.934,7.041c-0.101,0.102-0.239,0.153-0.383,0.148 c-0.143-0.008-0.275-0.076-0.365-0.188c-1.12-1.408-2.584-2.574-4.163-3.523c-2.175,1.004-4.101,2.078-5.684,3.049 C18.693,24.084,15.644,26.979,13.079,28.36z M27.492,17.396c1.29,0.832,2.491,1.81,3.484,2.948 c0.828-0.898,2.815-3.168,3.942-5.422C32.268,15.532,29.76,16.415,27.492,17.396z M22.799,16.122 c-0.033,0.163-0.071,0.33-0.113,0.5c-0.21,0.839-0.544,1.701-0.972,2.561c1.096-0.626,2.309-1.272,3.618-1.898 C24.494,16.841,23.639,16.455,22.799,16.122z M18.048,13.672c1.111,0.218,2.48,0.574,3.941,1.086 c0.152-1.843-0.346-2.972-0.647-3.472C19.966,12.004,18.761,13.014,18.048,13.672z"></path><path fill="#b71c1c" d="M18.05,18.5c0,4.38-3.65,7.86-6.28,10.4c-0.44,0.43-1.93,0.5-1.93,0.5 c0.37-0.38,0.79-0.78,1.24-1.21c2.5-2.42,5.97-5.73,5.97-9.69c0-4.69-1.89-6.54-3.38-8.02c-0.66-0.67-1.22-1.31-1.56-2.09 l0.31-0.13c0.34,0.15,0.73,0.32,1.03,0.45c0.24,0.35,0.56,0.69,0.93,1.06C15.91,11.3,18.05,13.4,18.05,18.5z"></path><path fill="#b71c1c" d="M42.935,19.794c0,0-0.605,0.086-0.775,0.106c-8.76,0.97-17.8,3.49-22.97,5.56 c-1.87,0.75-3.81,1.66-5.58,2.68c-0.01,0.01-0.02,0.01-0.04,0.02C12.53,28.76,10,30,7.95,31.09c3-3.19,8.62-5.65,10.86-6.55 c5.07-2.03,13.78-4.48,22.35-5.53c-1.01-1.18-3.48-3.68-8.34-5.54c-2.84-1.1-7.16-1.72-10.97-2.27c-6.06-0.87-9.51-1.45-9.84-3.1 c-0.07-0.33-0.02-0.66,0.13-0.98c0.33,0.54,0.8,0.92,1.11,1.14c0.15,0.1,0.26,0.16,0.3,0.18l0.01,0.01 c1.42,0.75,5.25,1.3,8.44,1.76c3.86,0.56,8.23,1.19,11.18,2.32c6.87,2.65,9.24,6.44,9.34,6.6 C42.61,19.28,42.935,19.794,42.935,19.794z"></path>

              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>Sql Server</p>
              </div>
            </div>



            <div className="col-xl-2 col-lg-3 col-md-3 mb-4 col-sm-4 col-6">
            <div className=" HabilidadesContenedor d-none d-lg-flex d-xl-none d-xxl-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease',  maxHeight:'4rem' }}
                xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 128 128"><g fill="#623697">
               <path d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"/>
               <path d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"/></g>

              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>.Net Api RestFUL</p>
              </div>


              <div className=" HabilidadesContenedor d-flex d-lg-none d-xl-flex d-xxl-none flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
              style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease',  maxHeight:'4rem' }}
              xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 128 128"><g fill="#623697">
             <path d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"/>
             <path d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"/></g>

            </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>.Net Api RestFUL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




function Trabajos(){



 
  const [Nota, setNota] = useState(0);
  const divRef = useRef([]);
  const {setModalValue, setModalStates, setModalContent} = useContext(ContextoGlobal)
  
  const proyectos = [
    { id: 1, 
      nombre :"Inventario",
      descripcion: "Sistema de inventario realizado en C# windowsForms.", 
      descripcionCompleta :`Es un sistema de inventario diseñado para gestionar eficientemente los artículos de los diferentes almacenes de una empresa. Permite registrar y administrar los almacenes, 
                            llevar un control detallado de los artículos almacenados, y registrar los movimientos de ingreso y retiro de cada artículo. Además, 
                            identifica a las personas responsables de realizar estas transacciones, proporcionando un historial completo y preciso de las operaciones realizadas.`, 
      imagenPrincipal:"/images/Trabajos/InventarioProject.png",
      imagenes:[
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/Articulos.png",
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/RegistrarArticulo.png",
        "/images/Trabajos/RegustrarAlmacen.png"
      ], 
      lenguajes:[
        {  nombre:"C#",
           logo: (
            <g>
                <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fill-rule="nonzero"></path>
                <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fill-rule="nonzero"></path>
                <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fill-rule="nonzero"></path>
                <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF"></path>
                <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>), 
           cajaLogo:"0 0 256 288", 
           colorLogoFill:"#61DBFB",
           ColorLogoStroke:"#61DBFB"}
      ],
       BotonURL: ''},

  ];

 /* useEffect(() => {
    function handleClickOutside(event) {
      if (!divRef.current.some(ref => ref && ref.contains(event.target))) {
        setNota(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);*/

  const onClickEvent = (e, valor) =>{
    console.log("Entroooo")
    e.stopPropagation();
    setModalValue(2);
    setModalStates(true);
    setModalContent({value:valor})
    
    
  }

const MouseEnter = (value) => {

  
  setNota(value);
  
}


const MouseLeave = () => {

  setNota(0);

}


const MouseClick = (value) => {

if (Nota !== value) {
  setNota(value);
}

}
  

  const ContainerNota = (value) =>
    {
  
  return( <div className='TrabajoSuperPuesto d-flex flex-row py-3 ps-3'  onClick={(e) => onClickEvent(e, value)}>
    <div className='d-flex flex-column' style={{width:'85%'}} >
    <h6 className='AcercaHomePrincipal mb-2 d-none d-xl-flex' style={{margin:'0px', fontSize:'1.5rem'}}>Inventario</h6>
    <h6 className='AcercaHomePrincipal mb-2 d-flex d-xl-none' style={{margin:'0px', fontSize:'1.2rem'}}>Inventario</h6>

    <p className="HabilidadesDescripcion m-0 d-none d-xl-flex" style={{fontSize:'0.9rem', textAlign:'start'}}>
{value.descripcion}
</p>

<p className="HabilidadesDescripcion m-0 d-flex d-xl-none " style={{fontSize:'0.8rem', textAlign:'start'}}>
{value.descripcion}
</p>


    </div>
    
    <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'15%'}}>

<svg

style={{ width: '1.5rem', cursor: 'pointer', transition: 'all 0.5s ease', maxHeight:'4rem', transform: 'rotate(-45deg)' }}
viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
fill="#fff"
stroke="#fff"
stroke-width="2"
/>


</svg>

</div>


  </div>)
  
  
    }


  return(<>
  
  <div  className='d-flex  flex-row justify-content-center align-items-center' style={{width:'100%', backgroundColor:'#0F0715', paddingTop:'120px', paddingBottom:'80px'}}>
      <div className='d-flex flex-column align-items-center ' style={{width:'85%'}}>
      <h2 className="AcercaHomeTitle d-none d-md-block">Proyectos Recientes</h2>
      <h2 className="AcercaHomeTitle d-block d-md-none" style={{fontSize:'2rem'}}>Proyectos Recientes</h2>
      <p className="HabilidadesDescripcion d-none d-md-block">
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

          <p className="HabilidadesDescripcion d-block d-md-none " style={{fontSize:'0.9rem'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

{//Pantalla XXL
}

          <div className="row mt-5 d-none d-xxl-flex" style={{ width: '100%' }}>
          {proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={(e) =>MouseClick(proyecto.id, e)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 mb-3 ">
          <div className='TrabajosContenedor d-flex flex-row justify-content-center pt-1' style={{ position: 'relative'}}>

            <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'438px', minHeight:''}} />
            

            {Nota === proyecto.id && ContainerNota(proyecto)}  
          </div>


          </div>

          ))}
         

            

          </div>



{//Pantalla XL
}

<div className="row mt-5 d-none d-xl-flex d-xxl-none" style={{ width: '100%', minWidth:'1100px' }}>
{proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)}onMouseLeave={MouseLeave} className="col-6 mb-3">
<div className='TrabajosContenedor d-flex flex-row justify-content-center pt-1' style={{ position: 'relative', width:'520px'}}>

  <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'360px', minHeight:''}} />
  

  {Nota === proyecto.id && ContainerNota(proyecto)}
</div>


</div>

))}


  

</div>





{//Pantalla lg
}

<div className="row mt-5 d-none d-lg-flex d-xl-none" style={{ width: '100%', minWidth:'930px' }}>
{proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 mb-3">
<div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'450px'}}>

  <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'270px', minHeight:''}} />
  
  {Nota === proyecto.id && ContainerNota(proyecto)}
          </div>


          </div>

          ))}
         


  

</div>






{//Pantalla md
}

<div className="row mt-5 d-none d-md-flex d-lg-none" style={{ width: '100%', minWidth:'755px' }}>
{proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 mb-3 ">
<div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'365px'}}>

  <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'270px', minHeight:''}} />
  

  {Nota === proyecto.id && ContainerNota(proyecto)}
          </div>


          </div>

          ))}
         




  

</div>





{//Pantalla sm
}

<div className="row mt-5 d-none d-sm-flex d-md-none" style={{ width: '100%', minWidth:'560px'  }}>
{proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-12 d-flex flex-row justify-content-center mb-4 ">
<div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'470px'}}>

  <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'290px', minHeight:''}} />
  
  {Nota === proyecto.id && ContainerNota(proyecto)}
          </div>


          </div>

          ))}
         



  

</div>





{//Pantalla xs
}

<div className="row mt-5 d-flex d-sm-none" style={{ width: '100%'  }}>
{proyectos.map((proyecto, index) => (
          <div key={proyecto.id} 
          ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-12 d-flex flex-row justify-content-center mb-4 ">
<div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'100%'}}>

  <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/Trabajos/InventarioProject.png`} alt="Projects" style={{width:'90%', height:'240px', minHeight:''}} />
  

  {Nota === proyecto.id && ContainerNota(proyecto)}  
          </div>


          </div>

          ))}
         


  

</div>





        </div>
      </div>
  
  
  </>)
}


function Contactar() {



  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {setModalValue, setModalStates, setModalContent} = useContext(ContextoGlobal)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que los campos no estén vacíos
    if (!name || !email || !message) {
      alert('Por favor, rellene todos los campos requeridos.');
      return;
    }

    // Usar EmailJS para enviar el correo
    const templateParams = {
      from_name: name,
      from_lastname: lastName,
      from_email: email,
      message: message,
      from_phone: phone,
       
    };

    emailjs
      .send(
        'service_8ay7lpp', // ID de tu servicio EmailJS
        'template_3463duu', // ID de tu plantilla de correo
        templateParams,
        'rL1_TFLzj_NLgS8NV' // ID de tu usuario EmailJS
      )
      .then(
        (response) => {
          setModalValue(1)
          setModalContent({
            value: 1,
            text: 'El mensaje se ha enviado con éxito.'
          })
          setModalStates(true);
          setName('');
          setEmail('');
          setMessage('');
          setLastName('');
          setPhone('');
        },
        (err) => {
          setModalValue(1)
          setModalContent({
            value: 2,
            text: 'Hubo un error al enviar el mensaje'
          })
          setModalStates(true);
          
          
        }
      );
  };




return(<>

  {/*pantalla xxl */

}

<div
        className=" d-none d-xxl-flex flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-row align-items-center  " style={{ width: '85%', minWidth:'1250px' }}>


<div style={{width:'50%'}}>
  <div className='d-flex flex-column  p-5' style={{width:'100%', borderRadius:'18px', backgroundColor:'#230840'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3' id='ContactForm'>

  <div className='d-flex flex-row justify-content-between'>
  <input value={name} onChange={(e) => setName(e.target.value)} className='ContactarInputs p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='ContactarInputs p-3' type="text" name="apellido" placeholder='Apellido'  />
  </div>

  <div className='d-flex flex-row justify-content-between mt-4'>
  <input value={email} onChange={(e) => setEmail(e.target.value)} className='ContactarInputs p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ContactarInputs p-3' type="text" name="telefono" placeholder='Telefono'  />
  </div>


 
  

  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'150px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-center' style={{width:'50%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span  className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.4rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.3rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.3rem', fontWeight:'500', width:'400px'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>





        

 {/*pantalla xl */

}

<div
        className=" d-none d-xl-flex d-xxl-none  flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-row align-items-center  " style={{ width: '85%', minWidth:'1100px' }}>


<div style={{width:'50%'}}>
  <div className='d-flex flex-column  ' style={{width:'550px', borderRadius:'18px', backgroundColor:'#230840', padding:'40px'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3' id='ContactForm'>

  <div className='d-flex flex-row justify-content-between'>
  <input value={name} onChange={(e) => setName(e.target.value)} className='ContactarInputs p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='ContactarInputs p-3' type="text" name="apellido" placeholder='Apellido'  />
  </div>

  <div className='d-flex flex-row justify-content-between mt-4'>
  <input value={email} onChange={(e) => setEmail(e.target.value)} className='ContactarInputs p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ContactarInputs p-3' type="text" name="telefono" placeholder='Telefono'  />
  </div>


 
  

  <textarea value={message} setMessage className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'150px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-center' style={{width:'50%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.4rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.3rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.3rem', fontWeight:'500', width:'400px'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>



{/*pantalla lg */

}

<div
        className=" d-none d-lg-flex d-xl-none  flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-row align-items-center  " style={{ width: '85%', minWidth:'950px' }}>


<div style={{width:'50%'}}>
  <div className='d-flex flex-column  ' style={{width:'452px', borderRadius:'18px', backgroundColor:'#230840', padding:'30px'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start', fontSize:'2.5rem'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start', fontSize:'1rem'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3' id='ContactForm'>

  <div className='d-flex flex-row justify-content-between'>
  <input value={name} onChange={(e) => setName(e.target.value)} className='ContactarInputs p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='ContactarInputs p-3' type="text" name="apellido" placeholder='Apellido'  />
  </div>

  <div className='d-flex flex-row justify-content-between mt-4'>
  <input value={email} onChange={(e) => setEmail(e.target.value)} className='ContactarInputs p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ContactarInputs p-3' type="text" name="telefono" placeholder='Telefono'  />
  </div>


 
  

  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'150px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-center' style={{width:'50%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>







        {/*pantalla md */

}

<div
        className=" d-none d-md-flex d-lg-none  flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-row align-items-center  " style={{ width: '95%', minWidth:'700px' }}>


<div style={{width:'55%'}}>
  <div className='d-flex flex-column  ' style={{width:'400px', borderRadius:'18px', backgroundColor:'#230840', padding:'30px'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start', fontSize:'2.5rem'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start', fontSize:'1rem'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3' id='ContactForm'>

  <div className='d-flex flex-row justify-content-between'>
  <input value={name} onChange={(e) => setName(e.target.value)} className='ContactarInputs p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='ContactarInputs p-3' type="text" name="apellido" placeholder='Apellido'  />
  </div>

  <div className='d-flex flex-row justify-content-between mt-4'>
  <input value={email} onChange={(e) => setEmail(e.target.value)} className='ContactarInputs p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ContactarInputs p-3' type="text" name="telefono" placeholder='Telefono'  />
  </div>


 
  

  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'150px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-center' style={{width:'45%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500', maxWidth:'225px'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>








  {/*pantalla sm */

}

<div
        className=" d-none d-sm-flex d-md-none  flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-column align-items-center  " style={{ width: '85%' }}>


<div style={{width:'100%'}}>
  <div className='d-flex flex-column  ' style={{width:'100%', borderRadius:'18px', backgroundColor:'#230840', padding:'30px'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start', fontSize:'2.5rem'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start', fontSize:'1rem'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3' id='ContactForm'>

  <div className='d-flex flex-row justify-content-between'>
  <input value={name} onChange={(e) => setName(e.target.value)} className='ContactarInputs p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='ContactarInputs p-3' type="text" name="apellido" placeholder='Apellido'  />
  </div>

  <div className='d-flex flex-row justify-content-between mt-4'>
  <input value={email} onChange={(e) => setEmail(e.target.value)} className='ContactarInputs p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ContactarInputs p-3' type="text" name="telefono" placeholder='Telefono'  />
  </div>


 
  

  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'200px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-start mt-5' style={{width:'100%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>




{/*pantalla xs */

}

<div
        className=" d-flex  d-sm-none  flex-column align-items-center justify-content-center"
        style={{ width: '100%', paddingTop: '70px', paddingBottom: '80px' }}
      >
        <div className=" d-flex flex-column align-items-center  " style={{ width: '95%' }}>


<div style={{width:'100%'}}>
  <div className='d-flex flex-column  ' style={{width:'100%', borderRadius:'18px', backgroundColor:'#230840', padding:'30px'}}>
  <h2 className="AcercaHomeTitle mt-1 " style={{textAlign:'start', fontSize:'2.5rem'}}>Contactame</h2>
   
      <p className="HabilidadesDescripcion " style={{textAlign:'start', fontSize:'1rem'}}>
      Explora mis proyectos y conoce el impacto de mi trabajo en el desarrollo de soluciones innovadoras.
          </p>

<form onSubmit={handleSubmit} className='mt-3 d-flex flex-column' id='ContactForm'>

  
  <input value={name} onChange={(e) => setName(e.target.value)} style={{width:'100%'}} className='ContactarInputs  p-3' type="text" name="name" placeholder='Nombre' required />
  <input value={lastName} onChange={(e) => setLastName(e.target.value)} style={{width:'100%'}} className='ContactarInputs mt-4 p-3' type="text" name="apellido" placeholder='Apellido'  />
  

  
  <input value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'100%'}} className='ContactarInputs mt-4 p-3' type="email" name="correo" placeholder='Correo' required />
  <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{width:'100%'}} className='ContactarInputs mt-4 p-3' type="text" name="telefono" placeholder='Telefono'  />
 


 
  

  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='ContactarInputs px-3 py-2 mt-4' name="message" placeholder='Mensaje'  required  style={{width:'100%', height:'200px',resize:'none'}}></textarea>

  <button type='submit' className='button-Default text mt-4'>Enviar Mensaje</button>
</form>
  </div>


</div>



<div className='d-flex flex-column justify-content-center align-items-start mt-5' style={{width:'100%'}}>

<div >

<div className='d-flex flex-row align-items-center mb-5 '  >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
  <svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 495">
<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Telefono</span>
  <a href="tel:8296721228" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>+1 (829) 672-1228</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>


 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Correo</span>
  <a href="mailto:raphielburdier72@gmail.com" className='AcercaHomePrincipal mt-1 ContactarbuttonSelected' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500'}}>raphielburdier72@gmail.com</a>
</div>


</div>


<div className='d-flex flex-row align-items-center mb-5 ' >

<div className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'50px', width:'50px'}} >
<svg className=' ' style={{width:'1.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          fill="#fff" stroke="#fff" stroke-width="2" />
 </svg>
 </div>
<div className='d-flex flex-column ps-4' >
  <span className='HabilidadesDescripcion' style={{color:'#DEDEDE', textAlign:'start', margin:'0px'}}>Direccion</span>
  <h6 className='AcercaHomePrincipal mt-1 ContactarbuttonSelected ' style={{margin:'0px', fontSize:'1.1rem', fontWeight:'500', maxWidth:'240px'}}>C/La Hermandad #23, Bonao,
  Republica Dominicana</h6>
</div>


</div>
</div>


</div>



        </div>
        
        </div>




</>)}




function FooterDown() {

  const onclickImage = () =>{
    window.scrollTo(0, 0);
  }

  return(<>
  <div className=' d-flex flex-row py-3 ps-3 justify-content-center py-5' style={{backgroundColor:'#0F0715'}}>
  <div className='d-flex flex-column align-items-center' style={{width:'85%', color:'#fff'}} >

 <img onClick={onclickImage} className='' src={`${process.env.PUBLIC_URL}/images/RaphLogo.png`} alt="Projects" style={{width:'5rem', height:'auto', minHeight:''}}/>
<div className=' mt-4 d-flex flex-row justify-content-center align-items-center'>

              
              <Link className="nav-link text me-3" style={{fontWeight:'600'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text me-3" style={{fontWeight:'600'}} to="/trabajos">Proyectos</Link>
              <Link className="nav-link text " style={{fontWeight:'600'}}to="/contactos">Contactos</Link>

</div>

<p className='text mt-4 ' style={{color:'#A3A3A3', fontSize:'1rem', textAlign:'center'}}>© 2024 All rights reserved <span  style={{color:'#fff', fontWeight:'600'}}> by RaphBH </span></p>






  </div>
  </div>
  
  
  
  
  </>)
}