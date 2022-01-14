import React from "react"

export default function AccountBalance(props){
    return (
        <div className="accountBal">
            <div>Balance: ${props.accountBalance}</div>
        </div>
    );
}