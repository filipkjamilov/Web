import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark " >

                <Link className="navbar-brand" to={"/"}>Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/products"}>Products</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/"}>Contact Us</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/products/add"}>Add new products</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <a className="btn btn-outline-info my-2 my-sm-0" href="/">Login</a>
                    </form>
                </div>
            </nav>
        </header>




        </div>

    )
}
export default Nav;