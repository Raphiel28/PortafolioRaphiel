import './AlertaPopUp.css'
import { ContextoGlobal } from '../../Contexto/Contexto'
import { useContext } from 'react'

export function AlertaPopUp() {

    const {setModalValue, setModalStates, modalContent} = useContext(ContextoGlobal)

    const ClosePopUp = () =>{

        setModalStates(false);
        setModalValue(0);
    }

    function Alertas() {
        if(modalContent.value === undefined || modalContent.text === undefined){
            return(<></>)
        }


        switch(modalContent.value){
            case 1: 
                return <AlertaExito ClosePopUp={ClosePopUp} modalContent={modalContent}/>
            
            case 2:
                return <AlertaError ClosePopUp={ClosePopUp} modalContent={modalContent}/>
            
            default: return <></>
        }
            
    }

    return(<div  className="d-flex flex-row justify-content-center align-items-start p-4" style={{width:'100%', height:'100%'}}>
        {Alertas()}
    </div>)
}



function AlertaError({ClosePopUp, modalContent}) {

    return(<>
    <div onClick={(e) =>e.stopPropagation()} className="d-flex flex-column" style={{backgroundColor:'#8750F7', width:'510px', height:'auto'}}>
        <div className="d-flex flex-row justify-content-between align-items-center px-3" style={{width:'100%', height:'60px'}}>
            <span className='TextTituloA'>Error</span>

            <div onClick={ClosePopUp} className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{backgroundColor:'#20113A', height:'35px', width:'35px', cursor:'pointer'}} >
            <svg className=' ' style={{width:'0.8rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff" stroke="#fff" stroke-width="2" />
            </svg>
            </div>

        </div>
        <div className='p-3'   style={{width:'100%', backgroundColor:'#fff'}}>

            <p className='TextDescripcion m-0' style={{color:'#F23642'}}>{modalContent.text}</p>

        </div>
        <div className="d-flex flex-row justify-content-between align-items-center px-3" style={{width:'100%', height:'60px'}}></div>

    </div>
    
    </>)
}





function AlertaExito({ClosePopUp, modalContent}) {

    return(<>
    <div onClick={(e) =>e.stopPropagation()}  className="d-flex flex-column" style={{backgroundColor:'#8750F7', width:'510px', height:'auto'}}>
        <div className="d-flex flex-row justify-content-between align-items-center px-3" style={{width:'100%', height:'60px'}}>
            <span className='TextTituloA'>Exito</span>

            <div onClick={ClosePopUp} className=' d-flex flex-row justify-content-center align-items-center rounded-circle'  style={{backgroundColor:'#20113A', height:'35px', width:'35px', cursor:'pointer'}} >
            <svg className=' ' style={{width:'0.8rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff" stroke="#fff" stroke-width="2" />
            </svg>
            </div>

        </div>
        <div className='p-3'   style={{width:'100%', backgroundColor:'#fff'}}>

            <p className='TextDescripcion m-0' style={{color:'#3745E8'}}>{modalContent.text}</p>

        </div>
        <div className="d-flex flex-row justify-content-between align-items-center px-3" style={{width:'100%', height:'60px'}}></div>

    </div>
    
    </>)
}