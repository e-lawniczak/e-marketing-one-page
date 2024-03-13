import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectComponents } from './projectComponents'
import { Image } from './Image'

export const MainLayout = (props: { children, [x: string]: any }) => {
    const
        menu = projectComponents.map((p, idx) => <NavLink className={"menu-opt"} key={idx} to={p.path}  >{p.label}</NavLink>)
    return <div className="layout marketing">
        <header>
            <div className="logo">
                <Image src={'./images/logo.png'} />
            </div>
            <nav>{menu}</nav>
            <div className=""></div>
        </header>
        <div className="main-content">
            {props?.children}
        </div>
    </div>
}