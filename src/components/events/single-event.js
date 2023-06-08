import Image from 'next/image';
import { useRouter } from 'next/router';
import React, {useRef, useState} from 'react';;
const SingleEvent= ({data}) => {
    const inputEmail= useRef();
    const router = useRouter();
    const [message, setMessage]= useState();
    const onSubmit=async (e) =>{
        e.preventDefault();
        const emailValue= inputEmail.current.value;
        const eventId=router.query.id
       
        try{
            const response = await fetch('/api/email-registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailValue, eventId: eventId})
            })

            const data= await response.json();
            setMessage(data.message);
            inputEmail.current.value=' '
            if(!response.ok) throw new Error(`Error: ${response.status}`)
        }
        catch(p){
            console.log("ERROR", p);
        }
    }
    return (
        <div className='event_single_page'>
        <h1>{data.title}</h1>
        <Image src= {data.image} width={800} height={450} alt={data.title}></Image>
        
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className='email_registration'>
            <label>Get Registered for this event</label>
            <input ref={inputEmail} type="email" id="email"/>
            <button type='submit'>Submit</button>
        </form>
        <p>{message}</p>
    </div>
    )
}

export default SingleEvent;