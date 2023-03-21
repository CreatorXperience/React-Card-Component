import React from "react"
import ReactDOM from "react-dom"
import Button from "./button"
 import Info from "./info"
export default class DBescription extends React.Component {
    render(){
        return(
            <div className ="desc"> 
        <h3 className="userName"> Laura Smith </h3> 
        <p className="post"> Frontend Developer </p> 
        <p className="MyLink"><a href="#"> laurasmith.website </a></p>
        <div className="Flex-cont">
        <Button text="Email" icon="fa-solid fa-envelope"  bgcolor="#fff" color="black" />  
            <Button text="LinkedIn" icon="fa-brands fa-linkedin" bgcolor="#5093E2" color="white" />  
           </div>
            <Info header ="About" content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. "/>
             <Info header ="interest" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
            </div> 
        )
    }
}