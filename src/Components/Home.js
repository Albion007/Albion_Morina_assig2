import React, { Component } from 'react'
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>MashUp</h1>
                
                <p>The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more.</p>
                <p>This API is designed for people who feel comfortable integrating with RESTful APIs. If you prefer a more guided approach check out our Quickstarts or our Libraries.</p>
                <h3>Click LoginButton to continue to the next steps!</h3>
                
                <LoginButton/>
                <LogoutButton/>
                <Profile/>
            </div>
        )
    }
}