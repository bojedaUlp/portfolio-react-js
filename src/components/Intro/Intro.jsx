import React from 'react'
import './intro.scss'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'
const Intro = () => {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
             showCursor: true,
             backDelay:1500,
             backSpeed:60,
             strings: ['Developer', 'Designer', 'Customer' ] })
    },[]) 
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="img/perfil.png" alt="foto de perfil" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I´m </h2>
                    <h1>Brayam Ojeda</h1>
                    <h3>Freelance <span ref={textRef}>{useEffect}</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="img/down.png"  alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Intro
