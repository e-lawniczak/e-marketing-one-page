import React from 'react'
import { Advertisment } from '../pages/Advertisment'

export const PageWrapper = (props) => {
    return <div className="page page-wrapper">
        <div className="left-space ad">
            <Advertisment type='noAd' />
        </div>
        <div className="content">
            {props?.children}
        </div>
        <div className="right-space ad">
            <Advertisment type='verticalAd' />
        </div>
    </div>
}