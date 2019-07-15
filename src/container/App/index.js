import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Widget from "../../components/Widget/index";
import './style.scss'

class App extends Component {

    static propTypes = {

    }

    render(){

        return(
            <div className="app">
                <Widget/>
            </div>
        )
    }

}

export default App