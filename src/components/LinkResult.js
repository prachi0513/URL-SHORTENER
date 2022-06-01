import React, { useEffect } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import axios from 'axios'
import '../styles/Input.css'
function LinkResult({ inputValue }) {
    console.log(inputValue)
    const [shortenLink, setShortenLink] = React.useState("")
    const [copied, setCopied] = React.useState(false)
    const [loading , setLoading] = React.useState(false)
    const[error , setError] = React.useState(false)


     
   const fetchData = async() =>{
       try{
       setLoading(true) 
       const fetch = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
       setShortenLink(fetch.data.result.full_short_link)
       }catch(err){
           setError(true)
       }finally{
            setLoading(false)
       }
   }

   useEffect(()=>{
       if(inputValue.length)  {
        fetchData();
       }
   }, [inputValue] )
   
   if(loading){
       return <p>Loading</p>
   }

   if(error){
    return <p>Something went wrong :( , Try using correct link !!!</p>
}

    return (

        <>
        {shortenLink &&
        
        <div className='link-main'>
            <p className='link-p'>{shortenLink}</p>
            <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}
            >
            <button className='link-button'>Copy to clipboard</button>
            </CopyToClipboard>
        </div>}
        
        </>
    )
}

export default LinkResult

