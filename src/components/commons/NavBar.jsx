import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {
    const style = {
        nav:{
            backgroundColor: "#0371b9",
            color:"whitesmoke",
            height:"2.2em"
        },
        link:{
            color:"whitesmoke",
            backgroundColor: "#0371b9",
            padding:"0.75em",
            margin:"0.25em"
        },
        active:{
            color:"whitesmoke",
            backgroundColor: "#254881"
        }
    }

    return (
        <nav style={style.nav}>
            {
                props.pages && props.pages.map(
                    (page, index) => 
                        <NavLink
                            key={index}
                            style={style.link}
                            activeStyle={style.active}
                            to={page.href}>
                                {page.name}
                        </NavLink>
                ) 
            }
        </nav>
    )
}
