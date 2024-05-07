import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div>
            <ul className='sidebar'>
                <li>
                    <Link to='home' className='sidebar-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.5 12.618c.307-.275.5-.674.5-1.118V6.977a1.5 1.5 0 0 0-.585-1.189l-3.5-2.692a1.5 1.5 0 0 0-1.83 0l-3.5 2.692A1.5 1.5 0 0 0 3 6.978V11.5A1.496 1.496 0 0 0 4.493 13H5V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13h.507c.381-.002.73-.146.993-.382m2-1.118a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6.977A3 3 0 0 1 2.67 4.6l3.5-2.692a3 3 0 0 1 3.66 0l3.5 2.692a3.003 3.003 0 0 1 1.17 2.378zm-5-2A.5.5 0 0 0 9 9H7a.5.5 0 0 0-.5.5V13h3z" clip-rule="evenodd" /></svg>
                    </Link>
                </li>
                <li>
                    <Link to='asset' className='sidebar-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m8 9.524l.976.837l2.988 2.56a.325.325 0 0 0 .536-.246V4.5A1.5 1.5 0 0 0 11 3H5a1.5 1.5 0 0 0-1.5 1.5v8.175a.325.325 0 0 0 .536.247l2.988-2.56zM14 4.5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8.175a1.825 1.825 0 0 0 3.013 1.386L8 11.5l2.987 2.56A1.825 1.825 0 0 0 14 12.676z" clip-rule="evenodd" /></svg>
                    </Link>
                </li>
                <li>
                    <Link to='plan' className='sidebar-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z" clip-rule="evenodd" /></svg>
                    </Link>
                </li>
                <li>
                    <Link to='progress' className='sidebar-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none"><g clip-path="url(#gravityUiChartMixed0)"><path fill="currentColor" fill-rule="evenodd" d="M14.98 1.826a.75.75 0 0 0-.96-1.152L10.376 3.71a1.25 1.25 0 0 1-1.196.225l-2.155-.718a2.75 2.75 0 0 0-2.973.837L.926 7.767a.75.75 0 1 0 1.148.966l3.125-3.712a1.25 1.25 0 0 1 1.352-.38l2.155.718a2.75 2.75 0 0 0 2.63-.496zM13.5 8h-2a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5m-4 5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2.5A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5zM5 13a.5.5 0 0 1-.5.5h-2A.5.5 0 0 1 2 13v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zm-2.5 2h11a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.063A2.004 2.004 0 0 0 9 8.5H7a2 2 0 0 0-2 2v.063a2.005 2.005 0 0 0-.5-.063h-2a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2" clip-rule="evenodd" /></g><defs><clipPath id="gravityUiChartMixed0"><path fill="currentColor" d="M0 0h16v16H0z" /></clipPath></defs></g></svg>
                    </Link>
                </li>
                <li>
                    <Link to='cart' className='sidebar-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.018 3.068L3.395 4.5L4.58 9.005a3 3 0 0 0 4.186 1.948l4.518-2.14A3 3 0 0 0 15 6.102V5a2 2 0 0 0-2-2H4.556l-.15-.535A2 2 0 0 0 2.48 1H.75a.75.75 0 0 0 0 1.5h1.73a.5.5 0 0 1 .482.366zm5.106 6.53l4.518-2.14a1.5 1.5 0 0 0 .858-1.356V5a.5.5 0 0 0-.5-.5H4.946L6.03 8.624a1.5 1.5 0 0 0 2.093.973ZM12 14.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5M4.75 13a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd" /></svg>
                    </Link>
                </li>
            </ul>

        </div>

    )
}
