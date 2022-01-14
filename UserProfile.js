import React from "react"

export default function UserProfile(props){
    console.log(props.memberSince)
    console.log(props.userName)
    return (
        <div>
          <h1 className="title">User Profile</h1>
          <div>Username: {props.userName}</div>
          <div>Member Since: {props.memberSince}</div>
        </div>
    ); 
}