import React from 'react';


const NavBar = () => {

    const navStyle = {
        backgroundColor: "orange",
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