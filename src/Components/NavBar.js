
import React from 'react';
import App from '../App.css'
import Home from './Home'
import InterviewDirectory from './InterviewDirectory'



import { BrowserRouter as Router,
Switch,
Link,
Route
} from "react-router-dom"

class NavBar extends React.Component{
    render(){
        return(
            <Router>
                <div className="nav_par">
                
                        <ul className = "nav_ul">
                        <li className="list_item"><Link to = '/Home'>Home</Link></li>
                        <li className="list_item"><Link to = '/interviewDirectory'>Interview Directory</Link></li>
                        </ul>
                  
                    <Switch>
                        <Route exact path = '/Home' component={Home}/>
                        <Route path ='/interviewDirectory' component={InterviewDirectory}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}
export default NavBar
