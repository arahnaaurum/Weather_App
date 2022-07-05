import React from "react";
import "../styles/App.css";
import Header from "./Header"
import Cities from "./Cities";
import Local from "./Local";

function App () {
    return (
        <div className="container">
            <Header />
            <Local />
            <Cities />
        </div>
    )
}

export default App;