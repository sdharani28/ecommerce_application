import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">user</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">logout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">cart</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

