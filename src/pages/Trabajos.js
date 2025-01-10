import { ContextoGlobal } from '../Contexto/Contexto'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
export function Trabajos() {
    return(<>
    <div style={{width:'100%', height:'auto'}}>
<Portada/>
<TrabajosContainer/>
<FooterDown/>
    </div>
    </>)
}



function Portada() {
    return(
        <>
        <div className='contenedorAcerca d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/images/office.jpg)` }}>
        <div className='contentIn d-flex flex-column justify-content-center align-items-center'>
        <h2 className='textAcerca'>Proyectos</h2>
        <p className='textAcercaSub'>Inicio -{">"} Proyectos </p>
        </div>

        </div>
        
        </>
    )
}


function TrabajosContainer(){



 
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
        ] ,
        BotonURL: ''
      
      },
  
           
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
            ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)}onMouseLeave={MouseLeave} className="col-6 mb-3 ">
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
            ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 mb-3 ">
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




function FooterDown() {

    return(<>
    <div className=' d-flex flex-row py-3 ps-3 justify-content-center py-5' style={{backgroundColor:'#2D1559'}}>
    <div className='d-flex flex-column align-items-center' style={{width:'85%', color:'#fff'}} >
  
   <Link to="/"> <img className='' src={`${process.env.PUBLIC_URL}/images/RaphLogo.png`} alt="Projects" style={{width:'5rem', height:'auto', minHeight:''}}/></Link>
  <div className=' mt-4 d-flex flex-row justify-content-center align-items-center'>
  <Link className="nav-link text me-3" style={{fontWeight:'600'}} to="/">Inicio</Link>
  <Link className="nav-link text me-3" style={{fontWeight:'600'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text " style={{fontWeight:'600'}}to="/contactos">Contactos</Link>
  
  </div>
  
  <p className='text mt-4 ' style={{color:'#A3A3A3', fontSize:'1rem', textAlign:'center'}}>© 2024 All rights reserved <span  style={{color:'#fff', fontWeight:'600'}}> by RaphBH </span></p>
  
  
  
  
  
  
    </div>
    </div>
    
    
    
    
    </>)
  }