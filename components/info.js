import React from "react"
import ReactDOM from "react-dom"

export default class Info extends React.Component {
    render(){
        return (
            <div className="Info"> 
            <h1> {this.props.header} </h1> 
            <p>{this.props.content} </p> 
            </div> 
        )
    }
}