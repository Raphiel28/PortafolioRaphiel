import { useContext, useState } from 'react'
import emailjs from 'emailjs-com'
import { ContextoGlobal } from '../Contexto/Contexto'
import { Link } from 'react-router-dom';

export function Contactos() {

    return(<>
     <div style={{width:'100%', height:'auto'}}>
<Portada/>
<Contactar/>
<FooterDown/>
    </div>
    
    
    </>)
}





function Portada() {
    return(
        <>
        <div className='contenedorAcerca d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage:'url("/images/office.jpg")' }}>
        <div className='contentIn d-flex flex-column justify-content-center align-items-center'>
        <h2 className='textAcerca'>Contactos</h2>
        <p className='textAcercaSub'>Inicio -{">"} Contactos </p>
        </div>

        </div>
        
        </>
    )
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

    return(<>
    <div className=' d-flex flex-row py-3 ps-3 justify-content-center py-5' style={{backgroundColor:'#2D1559'}}>
    <div className='d-flex flex-column align-items-center' style={{width:'85%', color:'#fff'}} >
  
    <Link to="/"> <img className='' src="/images/RaphLogo.png" alt="Projects" style={{width:'5rem', height:'auto', minHeight:''}}/></Link>
  <div className=' mt-4 d-flex flex-row justify-content-center align-items-center'>
  
  <Link className="nav-link text me-3 " style={{fontWeight:'600'}}to="/">Inicio</Link>
  <Link className="nav-link text me-3" style={{fontWeight:'600'}} to="/acerca">Acerca de</Link>
              <Link className="nav-link text " style={{fontWeight:'600'}} to="/trabajos">Proyectos</Link>
              
  
  
  </div>
  
  <p className='text mt-4 ' style={{color:'#A3A3A3', fontSize:'1rem', textAlign:'center'}}>© 2024 All rights reserved <span  style={{color:'#fff', fontWeight:'600'}}> by RaphBH </span></p>
  
  
  
  
  
  
    </div>
    </div>
    
    
    
    
    </>)
  }