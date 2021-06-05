import React from 'react'
import './topbar.scss'
import {Person,Mail} from '@material-ui/icons'
const Topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Brayam</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+54 2664690658</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>brayamojeda05@gmail.com</span>
                    </div>
                </div>
              
                <div className="right">
                        <div className="menuLateral" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="linea1"></span>
                            <span className="linea2"></span>
                            <span className="linea3"></span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
