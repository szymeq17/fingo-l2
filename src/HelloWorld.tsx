import { Component } from "react";
import './HelloWorld.css'

class HelloWorld extends Component {
    render() {
        return (
        <div>
            <p className="welcome">Hello</p>
            <p className="welcome">World!</p>
        </div>);
    }
}

export default HelloWorld