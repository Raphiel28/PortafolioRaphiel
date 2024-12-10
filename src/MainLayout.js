import { Barra } from "./Barra/Barra";
import { Home } from "./pages/Home";
import { MainPopUp } from "./pages/PopUps/MainPopUp";
import { ContextoGlobal } from "./Contexto/Contexto";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca } from "./pages/Acerca";
import { Trabajos } from "./pages/Trabajos";
import { Contactos } from "./pages/Contactos";
import ScrollToTop from "./Contexto/ScrollToTop";

export function MainLayout(){

const {modalStates} = useContext(ContextoGlobal);
console.log('modalState ' + modalStates )
    return(
        <BrowserRouter basename="/PortafolioRaphiel">
        
           <ScrollToTop/>
        <div className="d=flex flex-column" style={{height:'auto', width:'100%'}}>
            
            {modalStates &&
            <MainPopUp/>
            }
            
            <Barra/>
            
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/trabajos" element={<Trabajos />} />
            <Route path="/contactos" element={<Contactos />} />
            </Routes>
        </div>
        
       
        </BrowserRouter>
        
    )

}