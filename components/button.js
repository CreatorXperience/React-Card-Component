import React from 'react'
import ReactDOM from 'react-dom'

export default class  utton extends React.Component {
    render(){
        return (
            
            <button style={{backgroundColor: this.props.bgcolor, color: this.props.color}}><i className={this.props.icon}></i>
            {this.props.text}
            </button>
            
    
          
        )
    }
}