import Logo from './Logo.png'
import {useState} from "react";


const Header = () =>{


    const [open,setOpen] = useState(false)




    return (
        <header className= {`header ${open ? 'active': ''}`}>
            <div className={`header__top `} onClick={() =>{
                if (open){
                    setOpen((prev)=>!prev)
                }
            }}>
                <p className='header__top-text'>export default Header</p>
                <span onClick={()=>{
                    setOpen((prev)=>!prev)
                }} className="header__top-close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8353 14.3639L14.3638 14.8353C14.1035 15.0956 13.6814 15.0956 13.421 14.8353L7.9999 9.4141L2.5787 14.8352C2.3184 15.0956 1.89626 15.0956 1.63591 14.8352L1.1645 14.3638C0.904151 14.1035 0.904151 13.6814 1.1645 13.421L6.5857 7.9999L1.1645 2.5787C0.904151 2.3184 0.904151 1.89626 1.1645 1.63591L1.6359 1.16451C1.89625 0.904159 2.3184 0.904159 2.5787 1.16451L7.9999 6.5857L13.421 1.1645C13.6814 0.90415 14.1035 0.90415 14.3638 1.1645L14.8353 1.6359C15.0956 1.89625 15.0956 2.3184 14.8353 2.5787L9.4141 7.9999L14.8353 13.421C15.0956 13.6814 15.0956 14.1035 14.8353 14.3639Z" fill="white"/>
</svg>
</span>
            </div>
            <div className='Header__end'>
                <div className="container">
                    <nav className="header__end-nav">
                        <img src={Logo} alt="Relaco"/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header