import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"
import './TrabajoPopUp.css'
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { effectVirtualTransitionEnd } from 'swiper/effect-utils';
import { useContext } from 'react';
import { ContextoGlobal } from '../../Contexto/Contexto';

export function TrabajoPopUp() {
  const {setModalValue, setModalStates, modalContent} = useContext(ContextoGlobal)

  const onClickCerrar = () =>{
    setModalStates(false)
    setModalValue(0)
  }
  console.log(modalContent)

    return(<>
    <div onClick={(e) => e.stopPropagation()} className="d-none d-lg-flex flex-column align-items-center py-5 " style={{width:'70%', height:'100%', minWidth:'970px'}}>
        
        
        <div className="d-flex flex-row justify-content-end"  style={{width:'100%'}}>
        <div onClick={onClickCerrar}  className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'45px', width:'45px', cursor:'pointer'}} >
            <svg className=' ' style={{width:'1.1rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff" stroke="#fff" stroke-width="2" />
            </svg>
            </div>
        </div>
        

        <Imagen imagen={modalContent.value.imagenPrincipal}/>
        <Descripcion titulo={modalContent.value.nombre} descripcion={modalContent.value.descripcionCompleta}/>
        <Slider imagenes={modalContent.value.imagenes}/>
        <Tecologias lenguajes={modalContent.value.lenguajes}/>
    </div>
    
    <div onClick={(e) => e.stopPropagation()} className="d-none d-md-flex d-lg-none flex-column align-items-center  py-5 " style={{width:'70%', height:'100%', minWidth:'745px'}}>
        
        
        <div className="d-flex flex-row justify-content-end"  style={{width:'100%'}}>
        <div onClick={onClickCerrar} className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'45px', width:'45px', cursor:'pointer'}} >
            <svg className=' ' style={{width:'1.1rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff" stroke="#fff" stroke-width="2" />
            </svg>
            </div>
        </div>
        

        <Imagen imagen={modalContent.value.imagenPrincipal}/>
        <Descripcion titulo={modalContent.value.nombre} descripcion={modalContent.value.descripcionCompleta}/>
        <Slider imagenes={modalContent.value.imagenes}/>
        <Tecologias lenguajes={modalContent.value.lenguajes}/>
    </div>
    

    <div onClick={(e) => e.stopPropagation()} className="d-flex d-md-none  flex-column align-items-center py-5 " style={{width:'350px', height:'100%', minWidth:''}}>
        
        
        <div className="d-flex flex-row justify-content-end"  style={{width:'100%'}}>
        <div onClick={onClickCerrar} className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{background:'linear-gradient(90deg, #a855f7, #6d28d9)', height:'30px', width:'30px', cursor:'pointer'}} >
            <svg className=' ' style={{width:'0.7rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff" stroke="#fff" stroke-width="2" />
            </svg>
            </div>
        </div>
        

        <Imagen imagen={modalContent.value.imagenPrincipal}/>
        <Descripcion titulo={modalContent.value.nombre} descripcion={modalContent.value.descripcionCompleta}/>
        <Slider imagenes={modalContent.value.imagenes}/>
        <Tecologias lenguajes={modalContent.value.lenguajes}/>
    </div>

    </>)
}


function Imagen({imagen}){

   console.log(imagen)
    return(<>
    
    <div className="d-none d-md-flex " style={{width:'90%', backgroundColor:'#2A1454', paddingLeft:'35px', paddingRight:'35px', paddingTop:'40px'}}>
    
    <img className='' src={imagen} alt="Projects" style={{width:'100%', height:'auto', minHeight:''}} />
   
    </div>

    <div className="d-flex d-md-none " style={{width:'90%', backgroundColor:'#2A1454', paddingLeft:'5px', paddingRight:'5px', paddingTop:'10px'}}>
    
    <img className='' src={imagen} alt="Projects" style={{width:'100%', height:'auto', minHeight:''}} />
   
    </div>
    
    
    </>)

}


function Descripcion({titulo, descripcion}) {
    return(<>
    <div className='d-none d-md-flex flex-column' style={{width:'90%', backgroundColor:'#fff', padding:'35px 35px'}}>

        <h4 className='TextTitulo d-none d-lg-block'>{titulo}</h4>
        <p className='TextDescripcion d-none d-lg-block'>{descripcion}</p>
            


            <h4 className='TextTitulo d-none d-md-block d-lg-none' style={{fontSize:'2.3rem'}}>{titulo}</h4>
        <p className='TextDescripcion d-none d-md-block d-lg-none' style={{fontSize:'1rem'}}>{descripcion}</p>




            <button type='submit' className='button-Default text mt-4' style={{width:'180px'}}>Ver Proyecto</button>

            
    </div>


    <div className='d-flex d-md-none flex-column' style={{width:'90%', backgroundColor:'#fff', padding:'15px 15px'}}>

        <h4 className='TextTitulo ' style={{fontSize:'1.8rem'}}>{titulo}</h4>
        <p className='TextDescripcion' style={{fontSize:'0.9rem'}}>{descripcion}</p>
            


            




            <button type='submit' className='button-Default text mt-4'>Ver Proyecto</button>

            
    </div>
    
    </>)
}



function Slider({imagenes}) {
    const slides = [
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/InventarioProject.png",
        "/images/Trabajos/InventarioProject.png",
      ];
    return(<>
    <div className='d-none d-md-flex' style={{width:'90%', backgroundColor:'#fff', padding:'35px 0px'}}>

    <Swiper
    effect='coverflow'
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={2}
     
      pagination={{ clickable: true}}
      style={{width:'100%', height:'auto', minHeight:''}}
      className='swiper_container '
    >
      {imagenes.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", borderRadius:'0px' }}
          />
        </SwiperSlide>
      ))}
      
    </Swiper>
            
    </div>



    <div className='d-flex d-md-none' style={{width:'90%', backgroundColor:'#fff', padding:'35px 0px'}}>

<Swiper
effect='coverflow'
grabCursor={true}
centeredSlides={true}
loop={true}
modules={[Pagination]}
  spaceBetween={20}
  slidesPerView={1}
 
  pagination={{ clickable: true}}
  style={{width:'100%', height:'auto', minHeight:''}}
  className='swiper_container '
>
  {slides.map((image, index) => (
    <SwiperSlide key={index}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </SwiperSlide>
  ))}
  
</Swiper>
        
</div>
    
    </>)
}


function Tecologias({lenguajes}) {

    return(<>
         {/**
             
             pantalla-lg+

        
             */}
    <div className='row d-none d-lg-flex '  style={{width:'90%', backgroundColor:'#fff', padding:'35px 35px'}}>
 
    {lenguajes.map((lenguaje) => (
<div className="col-4 mb-3 ">
            <div className=" HabilidadesContenedor d-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '4rem', cursor: 'pointer', transition: 'all 0.5s ease' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={lenguaje.cajaLogo}
              >
                <path
                  d={lenguaje.logo}
                  fill={lenguaje.colorLogoFill}
                  stroke={lenguaje.ColorLogoStroke}
                  strokeWidth="2"
                />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>{lenguaje.nombre}</p>
              </div>


              
            </div>
              ))}




           

    </div>
     {/**
             
             pantalla-md

        
             */}

<div className='row d-none d-md-flex d-lg-none '  style={{width:'90%', backgroundColor:'#fff', padding:'35px 35px'}}>

{lenguajes.map((lenguaje) => (
<div className="col-4 mb-3 ">
            <div className=" HabilidadesContenedor d-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '3rem', cursor: 'pointer', transition: 'all 0.5s ease' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={lenguaje.cajaLogo}
              >
                <path
                  d={lenguaje.logo}
                  fill={lenguaje.colorLogoFill}
                  stroke={lenguaje.ColorLogoStroke}
                  strokeWidth="2"
                />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>{lenguaje.nombre}</p>
              </div>


              
            </div>
))}
           
            </div>



            {/**
             
             pantalla-md

        
             */}

<div className='row d-flex d-md-none  '  style={{width:'90%', backgroundColor:'#fff', padding:'35px 10px'}}>
{lenguajes.map((lenguaje) => (
<div className="col-6 mb-3 ">
            <div className=" HabilidadesContenedor d-flex flex-column align-items-center py-4 " style={{ width:'100%' }}>
              <svg
              
                style={{ width: '2.5rem', cursor: 'pointer', transition: 'all 0.5s ease' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={lenguaje.cajaLogo}
              >
                <path
                  d={lenguaje.logo}
                  fill={lenguaje.colorLogoFill}
                  stroke={lenguaje.ColorLogoStroke}
                  strokeWidth="2"
                />
              </svg>

              <p className='HabilidadesPorciento mt-4 p-0' style={{margin:'0px', textAlign:'center', transition: 'all 0.5s ease'}}>{lenguaje.nombre}</p>
              </div>


              
            </div>

))}
           
            </div>
    </>)
}