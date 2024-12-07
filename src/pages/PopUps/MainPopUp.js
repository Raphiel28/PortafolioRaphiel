import { useContext } from "react"
import { ContextoGlobal } from "../../Contexto/Contexto"
import { AlertaPopUp } from "./AlertaPopUp";
import { TrabajoPopUp } from "./TrabajoPopUp";
import './MainPopUp.css'

export function MainPopUp() {
    const {setModalValue, setModalStates} = useContext(ContextoGlobal)

    const ClosePopUp = () =>{

        setModalStates(false);
        setModalValue(0);
    }
return(
    <>
    <div className="principal d-flex flex-row justify-content-center align-items-center" onClick={ClosePopUp}  style={{position:'fixed', height:'100%', width:'100%', zIndex:'50', background:'rgba(0, 0, 0, 0.8)'}}>
    <PopUps />
    </div>
    
    </>
)

}


function PopUps(){

const {modalValue} = useContext(ContextoGlobal);

    switch(modalValue){
        case 1:
            return <AlertaPopUp/>

        case 2: 
            return <TrabajoPopUp/>

        default:
            return <></>
    }

}