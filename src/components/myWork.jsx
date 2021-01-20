import React from "react";
import { Link } from "react-router-dom";

function myWork() {
    return (
        <div>
            <h2>My Works</h2>
            <p> Checkout my works below </p>
            <Link to='/work/1'>One</Link>
            <Link to='/work/2'>Two</Link>
            <Link to='/work/3'>Three</Link>
        </div>
    )

}

export default myWork;