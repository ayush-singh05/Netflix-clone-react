import React from 'react'

function Header() {
    return (
        <div className='relative' >
            <div className='w-40 bg-gradient-to-b from-black z-10 absolute'>
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
            </div>
            <div className='absolute top-0'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            </div>
            
        </div>
    )
}

export default Header
