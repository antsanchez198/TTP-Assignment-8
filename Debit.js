import {useState, useEffect, useCallback} from 'react';
import React from 'react'
import AccountBalance from '../Components/AccountBalance';

export default function Debit(props){
    let [debitData, setDebitData] = useState([])
    const [inputDes, setDescription] = useState("")
    const [inputAmount, setAmount] = useState("")
    const [accountBalance, setAccountBalance] = useState(0)

    async function fetchData () {
        const response = await fetch ("https://moj-api.herokuapp.com/debits")
        const jsonData = await response.json()
        setDebitData(jsonData)
        setAccountBalance(props.accountBalance)
    }

    useEffect( async ()=> {
        fetchData(); 
    },[])

    async function updateData(){
        const newData = [...debitData]
        newData.push({id: "ant198", description: inputDes, amount: inputAmount, date: "1/13/2021"})
        setDebitData(newData)
        setAccountBalance(accountBalance - parseInt(inputAmount))
    }

    const onDesChange = (e) => {
        setDescription(e.target.value)
    }

    const onAmtChange = (e) => {
        setAmount(e.target.value)
    }

    return (
        <div>
            <h1 className='title'>Debit Page</h1>
            {debitData.map(index => {
                return(
                    <tbody key={index.id}>
                    <tr className='infoDisplay'>
                        <td>| Description: {index.description} </td>
                        <td>| Amount: {index.amount} </td>
                        <td>| Date: {index.date} |</td>
                    </tr>
                    </tbody>
                    )
                    })}
            <input type = "text" placeholder='Enter a description' onChange={onDesChange}></input>
            <input type = "text" placeholder='Enter an amount' onChange={onAmtChange}></input>
            <button onClick={updateData}>Submit</button>
            <AccountBalance accountBalance={accountBalance}/>
        </div>
    );
}