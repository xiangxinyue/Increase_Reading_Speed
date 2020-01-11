import React from "react";
import "./signinpage.css";

export const SignIn = (props) => {
    return(
<div className="position">
    <div className="container">
        <div className="row text-center">
            <div className="col-md-5 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <div className="login-title">
                            <h4>ReadingResearch</h4>
                        </div>
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-lg btn-primary btn-block">Sign In</button>
                            </div>
                            <div className="form-group">
                                <a href="/signup">Do not have an account?</a>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}