import React from 'react';
import App from '../App.css'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
const Pics=()=>{
    return(
        <Router>
        <div>
            <h3>Interview Directory</h3>
            <div className="wrapBox">
                <div><img className="pic" src="#" alt="Box Image" />;</div>
                <div><img className="pic" src="#" alt="Box Image" /></div>
                <div><img className="pic" src="#" alt="Box Image" /></div>
                <div><img className="pic" src="#" alt="Box Image" /></div>
                <div><img className="pic" src="#" alt="Box Image" /></div>
                <div><img className="pic" src="#" alt="Box Image" /></div>
            </div>
            <Switch>

                
            </Switch>
        </div>
        </Router>
    )
}
export default Pics;