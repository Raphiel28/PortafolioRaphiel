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
        <div className='contenedorAcerca d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage:'url("/images/office.jpg")' }}>
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
        descripcion: "Descripcion del Proyecto 1.", 
        descripcionCompleta :"lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. \
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
        imagenPrincipal:"/images/Trabajos/InventarioProject.png",
        imagenes:[
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png"
        ], 
        lenguajes:[
          {  nombre:"React",
             logo:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z", 
             cajaLogo:"0 0 512 512", 
             colorLogoFill:"#61DBFB",
             ColorLogoStroke:"#61DBFB"},
        
          {  nombre:"React",
             logo:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z", 
             cajaLogo:"0 0 512 512", 
             colorLogoFill:"#61DBFB",
             ColorLogoStroke:"#61DBFB"},
              
             
          {  nombre:"React",
             logo:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z", 
             cajaLogo:"0 0 512 512", 
             colorLogoFill:"#61DBFB",
             ColorLogoStroke:"#61DBFB"}
        ] },
  
  
      { id: 2, 
        nombre :"Inventario2",
        descripcion: "Descripción del Proyecto 2.", 
        descripcionCompleta :"Descripcion del Proyecto 2", 
        imagenPrincipal:"/images/Trabajos/InventarioProject.png",
        imagenes:[
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png",
          "/images/Trabajos/InventarioProject.png"
        ], 
        lenguajes:[
          {  nombre:"React",
             logo:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z", 
             cajaLogo:"0 0 512 512", 
             colorLogoFill:"#61DBFB",
             ColorLogoStroke:"#61DBFB"}
        ] },
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
            ref={el => divRef.current[index] = el}  onClick={(e) =>MouseClick(proyecto.id, e)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 ">
            <div className='TrabajosContenedor d-flex flex-row justify-content-center pt-1' style={{ position: 'relative'}}>
  
              <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'438px', minHeight:''}} />
              
  
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
            ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)}onMouseLeave={MouseLeave} className="col-6 ">
  <div className='TrabajosContenedor d-flex flex-row justify-content-center pt-1' style={{ position: 'relative', width:'520px'}}>
  
    <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'360px', minHeight:''}} />
    
  
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
            ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 ">
  <div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'450px'}}>
  
    <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'270px', minHeight:''}} />
    
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
            ref={el => divRef.current[index] = el}  onClick={() =>MouseClick(proyecto.id)} onMouseEnter={() =>MouseEnter(proyecto.id)} onMouseLeave={MouseLeave} className="col-6 ">
  <div className='TrabajosContenedor d-flex flex-row justify-content-center' style={{ position: 'relative', width:'365px'}}>
  
    <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'270px', minHeight:''}} />
    
  
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
  
    <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'290px', minHeight:''}} />
    
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
  
    <img className='mt-4' src="/images/Trabajos/InventarioProject.png" alt="Projects" style={{width:'90%', height:'240px', minHeight:''}} />
    
  
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
  
   <Link to="/"> <img className='' src="/images/RaphLogo.png" alt="Projects" style={{width:'5rem', height:'auto', minHeight:''}}/></Link>
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