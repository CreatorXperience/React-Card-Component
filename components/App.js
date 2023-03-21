import React from "react"
import image from "./image"
import Desc from "./desc"
import Footer from "./footer"
export default class App extends React.Component {
    render(){
        return (
            <div className="Container"> 
       <div className = "image"> 
       
       </div>
       
       <Desc /> 
   
   
   <Footer /> 
            </div> 
        )
    }
}