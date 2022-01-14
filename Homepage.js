import React from "react"
import AccountBalance from "../Components/AccountBalance";
import { Link } from "react-router-dom"

export default function Homepage(props){
    return (
        <div>
          <div >
            <h1 className="title">Bank of React</h1>
            <img className = "imageBank" src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
          </div>
          <AccountBalance accountBalance={props.accountBalance}/>
          <div className="mainNav">          
              <Link to = "/home/debit" element className="navOption">Debit</Link>
              <Link to = "/home/credit" element className="navOption">Credit</Link>
          </div>
        </div>
    );
}