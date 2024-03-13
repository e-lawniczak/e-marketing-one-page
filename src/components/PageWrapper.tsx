import React from 'react'

export const PageWrapper = (props) => {
    return <div className="page page-wrapper">
        <div className="left-space ad"></div>
        <div className="content">
            {props?.children}
        </div>
        <div className="right-space ad"></div>
    </div>
}