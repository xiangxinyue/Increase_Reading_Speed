import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase';

const SignInPart = () => {
    return (
        <div className="position">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-5 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="login-title">
                                    <h4>ReadingResearch</h4>
                                </div>
                                <div className="form-group">
                                    <button  onClick={signInWithGoogle} className="btn btn-lg btn-primary btn-block">SignIn by Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPart;