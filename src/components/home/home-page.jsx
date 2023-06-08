import Link from "next/link"
import Image from "next/image"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const HomePage= ({data}) =>{
    return(
        <div className="home_body">

            {data.map(ev => <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref >
            <Image width={500} height={350} src={ev.image}></Image>
            <div className="content">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </div>    
            </Link>)}
        
        </div>
    )
}