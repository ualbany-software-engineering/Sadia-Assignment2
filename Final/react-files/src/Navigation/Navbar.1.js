import React from "react";


export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={require("./logo.jpeg")} width="40" height="40" class="d-inline-block align-top" alt="" />
                    Welcome to my page!
                </a>
        </nav>
    );
}
