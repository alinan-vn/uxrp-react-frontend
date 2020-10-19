import React from 'react'

class Nav extends React.Component {
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <a href='/'>
                            LOGO
                        </a>
                    </li>
                    <li>
                        <a href='/login'>
                            Search Input
                        </a>
                    </li>
                    <li>
                        <a href='/login'>
                            Login
                        </a>
                    </li>
                    <li>
                        <a href='/join'>
                            Join
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav