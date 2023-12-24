import { LiaTimesSolid } from "react-icons/lia"
import "./ModalPost.scss"

const ModalPost = ({hide, title, children}) => {
    return (
        <>
            <div className="post-modal-popup">
                <div className="modal-popup-container">
                    <div className="modal-popup-header">
                        <div className="header-content">
                            {title && <h2>{title}</h2> }
                        </div>
                        <button onClick={() => hide(false)}><LiaTimesSolid /></button>
                    </div>

                    <div className="modal-popup-content">
                        {children}
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default ModalPost