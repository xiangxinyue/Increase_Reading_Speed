import React from "react";

import { auth } from '../../firebase/firebase';

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Read Train</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" style={{textAlign: "right", paddingRight: 0}}>
                    {props.currentUser
                    ?
                    <li className="nav-item active">
                        <a className="nav-link" href="/signin" onClick={() => auth.signOut()}>Log Out <span className="sr-only">(current)</span></a>
                    </li>
                    :
                    <div>
                    <li className="nav-item active">
                        <a className="nav-link" href="/signin">Sign In <span className="sr-only">(current)</span></a>
                    </li>
                    </div>
                    }
                    </ul>
                </div>
            </nav>
        </div>
    )
}