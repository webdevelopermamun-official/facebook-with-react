import { Link } from "react-router-dom";
import "./SmallModal.scss"
import { FaTimes } from "react-icons/fa";



const SmallModal = ({children, hide}) => {
  return (
    <>
        <div className="small-modal">
            <div className="small-content">
                <Link className="hide" onClick={() => hide(false)}><FaTimes /></Link>
                {children}
                
            </div>
        </div>
    </>
  )
}

export default SmallModal