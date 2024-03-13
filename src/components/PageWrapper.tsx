import React from 'react'
import { Advertisement } from '../pages/Advertisment'
import { NavLink } from 'react-router-dom'

export const PageWrapper = (props) => {
    return <div className="page page-wrapper">
        <div className="left-space ad">
            <Advertisement type='noAd' />
        </div>
        <div className="content">
            {props?.children}
        </div>
        <div className="right-space ad">
            <NavLink to={'/promocja'}>
            <Advertisement isFixed={true} type='verticalAd' />
            
            </NavLink>
        </div>
    </div>
}