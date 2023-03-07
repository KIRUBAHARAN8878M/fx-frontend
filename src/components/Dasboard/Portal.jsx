import React from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import '../../css/dasborad.css'

function Portal() {
    return (
        <div id="wrapper" >
            <TopBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content" className='mt-5 pt-4'>
                    
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portal;