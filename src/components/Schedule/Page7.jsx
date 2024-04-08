'use client'
import React, { useEffect } from 'react'
import "./Page7.css"
import style from "./Page7Style.module.css"
import Lenis from '@studio-freight/lenis'


const Page7 = () => {

    useEffect(() => {

        const lenis = new Lenis()
    
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
    
          requestAnimationFrame(raf)
        return () => {
    
        }
      }, [])

      
    return (
        <div className={`${style.page7Div}`}>
            <div className={`${style.page7DivHDiv}`}>
            <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Schedule</h1>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical page7Timeline">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeLineCardPg7">
                        <time className="font-mono italic">10 March 2023</time>
                        <div className="text-lg font-black">Hackathon Begins</div>
                        
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">1998</time> */}
                        <div className="text-lg font-black"><span>Select the Challenge and prepare your project idea.</span> <button className="btn btn-primary">Idea Submission Template</button></div>
                       
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2001</time> */}
                        <div className="text-lg font-black"><span>Submit your idea report. Also don't forget to create your metamask wallet for NFT prizes.</span> <button className="btn btn-primary">Idea Submission Link</button></div>
                        
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2007</time> */}
                        <div className="text-lg font-black">Attend sessions to get insights into ideation, design and development.</div>
                        
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2015</time> */}
                        <div className="text-lg font-black">Stucked? Get help from mentors having industry experience.</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2015</time> */}
                        <div className="text-lg font-black">Join our discord server and WhatsApp group to stay updated with announcements.</div>
                    </div>
                    <hr />
                </li>  
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2015</time> */}
                        <div className="text-lg font-black"><span>Get review on your UI design. Submit your UI design in below link if you want review over your design. (UI submission is optional)</span>
                        <button className="btn btn-primary">UI Design Submission Link</button>
                        </div>
                    </div>
                    <hr />
                </li>   
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeLineCardPg7">
                        {/* <time className="font-mono italic">2015</time> */}
                        <div className="text-lg font-black">Build your solution (project)</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeLineCardPg7">
                        <time className="font-mono italic">09 April 2023</time>
                        <div className="text-lg font-black"><span>Project Submission</span>
                        <button className="btn btn-primary">Submit here</button></div>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeLineCardPg7">
                        <time className="font-mono italic">20 April 2023</time>
                        <div className="text-lg font-black">Result Announcement (3 Winners per Theme)</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Page7