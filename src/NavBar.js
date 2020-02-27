import React from 'react';


const NavBar = () => {

    const navStyle = {
        alignSelf: "flex-start",
        width: "100%",
        backgroundColor: "rgba(112, 46, 62, .95)",
        color: "#f5fffa",
        display: "flex",
    }

    const navTitle = {
        textTransform: "uppercase",
        marginLeft: "1.5em"
    }

    return (
        <div style={navStyle}>
            <a href="/" style={{textDecoration: "none", color: "#f5fffa"}}>
                <h1 style={navTitle}>Seazonal</h1>
            </a>
        </div>
    )
}

export default NavBar;