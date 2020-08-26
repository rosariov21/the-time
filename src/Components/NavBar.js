import React from 'react';
import App from '../App.css'



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
                       
                        </ul>
                  
                    <Switch>
                        <Route exact path = '/Home' component={Home}/>
                        
                    </Switch>
                </div>
            </Router>
        )
    }

}
export default NavBar
