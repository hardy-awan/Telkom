import React, {Component} from 'react';
import Home from './Home/home';
import '../style/style.css';
import { BrowserRouter as Router,Link} from "react-router-dom";
import $ from 'jquery';
window.jQuery =$;
window.$ = $;
global.jQuery = $;


class App extends Component {
    render(){
      return(
        <Router>
        <div className="header">
         <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                <Link className="navbar-brand" href="#"> <img className="logo" src={require('../gambar/logo.png')} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expended="false">
                          PROMO
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item" href="#">PROMO</Link>
                          <Link class="dropdown-item" href="#">Partnership</Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expended="false">
                          PAKET & ADD-ON
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" href="#">Action</Link>
                          <Link className="dropdown-item" href="#">Another Action</Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" href="#">Something else here</Link>
                          </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link">PUSAT BANTUAN</Link>
                      </li>
                    </ul>
                </div>
            </nav>
         </div>
         <div className="">
            <Home/>
         </div>

        </div>
        </Router>
      )
    }
}


export default App;
