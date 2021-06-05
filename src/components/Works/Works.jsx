import React from 'react'
import './works.scss'
import {useState} from 'react'
const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
      {
        id:"1",
        icon:"../../img/social.jpg",
        title:"Branding",
        desc:"Lorem dfsafd sfd s fs fsa fds f d fs fdsf",
        img:"../../img/aplication.jpg"
      },
      {
        id:"2",
        icon:"../../img/social.jpg",
        title:"Branding2",
        desc:"Lorem dfsafd sfd s fs fsa fds f d fs fdsf",
        img:"../../img/aplication.jpg"
      },
      {
        id:"3",
        icon:"../../img/social.jpg",
        title:"Branding3",
        desc:"Lorem dfsafd sfd s fs fsa fds f d fs fdsf",
        img:"../../img/aplication.jpg"
      }
    ]
    const handleClick = (way)=>{
        way==='left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2):setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0 )
    } 

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.descripcion}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                               <img src="../../img/social.jpg" alt="" /> 
                        </div>
                    </div>
                </div> ))}
            </div>
           
            <img src="../../img/down.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="../../img/down.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
            
        </div>
    )
}

export default Works
