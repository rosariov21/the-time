
import React from 'react';
import App from '../App.css'
import Home from './Home'

import MostReadInterviews from './MostReadInterviews'
import WorldGuid from './WorldGuid';



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
                       
                        <li className="list_item"><Link to = '/MostReadInterviews'>MostReadInterviews</Link></li>
                        <li className="list_item"><Link to = '/WorldGuid'>WorldGuid</Link></li>
                        </ul>
                  
                    <Switch>
                        <Route exact path = '/Home' component={Home}/>
                        <Route path ='/MostReadInterviews' component={MostReadInterviews}/>
                        <Route path ='/WorldGuid' component={WorldGuid}/>

                    </Switch>
                </div>
            </Router>
        )
    }

}
export default NavBar
