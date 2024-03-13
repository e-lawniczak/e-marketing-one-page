import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectComponents } from './projectComponents'

export const MainLayout = (props: { children, [x: string]: any }) => {
    const
        menu = projectComponents.map((p, idx) => <NavLink className={"menu-opt"} key={idx} to={p.path}  >{p.label}</NavLink>)
    return <div className="layout marketing">
        <header>
            {menu}
        </header>
        <div className="main-content">
           
        </div>
    </div>
}