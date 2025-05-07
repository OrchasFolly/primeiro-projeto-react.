import { Component } from 'react';
import './Checkbox.css'

export default class ClassCheckbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            estado: false,
            title: this.props.title
        };
    }

    handleCheck = () => {
        this.setState({
            estado: this.state.estado == false ? true : false,
            title: this.state.estado == true ? this.props.title : "Alterado"
        })
    }

    render() {
        return (
            <label className="styleBox" style={{color: this.state.estado == false ? "#ca6d6d" : "white"}}>
                <input type="checkbox" onChange={this.handleCheck}/>
                {this.state.title}
            </label>
        );
    }
}