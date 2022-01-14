import {useState, useEffect} from 'react';
import React from 'react'
import AccountBalance from '../Components/AccountBalance';

export default function Credit(props){
    const [creditData, setCreditData] = useState([])
    const [inputDes, setDescription] = useState("")
    const [inputAmount, setAmount] = useState("")
    const [accountBalance, setAccountBalance] = useState(0)

    async function fetchData () {
        const response = await fetch ("https://moj-api.herokuapp.com/credits")
        const jsonData = await response.json()
        setCreditData(jsonData)
        setAccountBalance(props.accountBalance)
    }

    useEffect( async ()=> {
        fetchData();       
    },[]) 

    async function updateData(){
        const newData = [...creditData]
        newData.push({id: "ant198", description: inputDes, amount: inputAmount, date: "1/13/2021"})
        setCreditData(newData)
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
            <h1 className='title'>Credit Page</h1>
            {creditData.map(index => {
                return(
                    <tbody key={index.id} className='infoDisplay'>
                    <tr>
                        <td className='column'> Description: {index.description} </td>
                        <td className='column'> Amount: {index.amount} </td>
                        <td className='column'> Date: {index.date} </td>
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