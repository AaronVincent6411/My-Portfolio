import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({children}) {

    return(
        <div className="container">
            <div className="rectangle">
                <Navbar/>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default Layout