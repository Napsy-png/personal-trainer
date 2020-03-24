import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

export default function NavigationBar() {
   
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg -light">
            
            <div className="collapse navbar-collapse" id ="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav -itemactive">
                    <Link className="nav-link"to="/">Clients</Link>
                    </li>
                    <li className="nav -item">
                        <Link className="nav-link"to="/trainings">Trainings</Link>
                        </li>
                        <li className="nav -item">
                    <Link className="nav-link"to="/calendar">Calendar</Link>
                    </li>
             </ul >
            </div>
        </nav>
        
        );
    
}

