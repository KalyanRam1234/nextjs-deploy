import Link from "next/link"

import Image from "next/image"
export const Header=() => {
    return (
        <header>
          <div className="topNav">
              <Image src={`/vercel.svg`} alt="logo" width={120} height={70}/>
              <nav >
                <ul>
                  <li>
                    <Link href='/' passHref>Home</Link>
                  </li>
                  <li>
                    <Link href='/events' passHref>Events</Link>
                  </li>
                  <li>
                    <Link href='/about-us' passHref>About Us</Link>
                  </li>
                </ul>
                
              
              </nav>
        </div>
        <h1>Learn about events around the world</h1>
      </header>
    )
}