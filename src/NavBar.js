import React from 'react';


const NavBar = () => {

    const navStyle = {
        alignSelf: "flex-start",
        width: "100%",
        backgroundColor: "rgba(100, 0, 0, 1)",
        color: "white",
        display: "flex",
    }

    const navTitle = {
        textTransform: "uppercase",
        marginLeft: "1.5em"
    }

    return (
        <div style={navStyle}>
            <h1 style={navTitle}>Seazonal</h1>
        </div>
    )
}

export default NavBar;