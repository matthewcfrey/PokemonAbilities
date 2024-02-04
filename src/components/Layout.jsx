import {Outlet, Link } from "react-router-dom"

const Layout = props => {
    return (
        <>
            <div className='header'>
                <div className='link-box'>
                    <Link className='header-link' to='/'>Home</Link>
                </div>
                <div className='link-box'>
                    <Link className='header-link' to='/CompMount'>CompMount</Link>
                </div>
                <div className='link-box'>
                    <Link className='header-link' to='/UEFetch'>UEFetch</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Layout