import { FaTimes}from "react-icons/fa"

const Modal = ({handleClick}) => {
  return (
    <div>
        <div className="overley">
            <div className="modal">
                <div className="cross">
                <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda reprehenderit sunt, porro laudantium nam itaque iusto dolores atque possimus?</h1>
            </div>
        </div>
    </div>
  )
}

export default Modal