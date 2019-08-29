import React, {Component} from 'react'
import Home from "./pages/home/home";

class AppComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: true
        }
    }


    render(){
        console.log(this.state.active)

        return(
            <div>
                <div onClick={() => this.setState({active: !this.state.active})}>AppComponent привет мир s</div>
                {this.state.active ? <Home /> : null}
            </div>
        )
    }

}

export default AppComponent
