import Image from 'next/image'
import Link from 'next/link';

const EventsPage=({data})=>{
    return (
        <div >
            <h1>Events Page</h1>
            <div className='events_page' >
                {data.map(ev => (
                    <Link className='card' key={ev.id} href= {`/events/${ev.id}`} passHref>
                        <Image src={ev.image} alt={ev.title} width={500} height={500}></Image>
                        <h2>{ev.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default EventsPage;