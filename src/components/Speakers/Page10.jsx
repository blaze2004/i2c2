import React from 'react'
import style from "./Page10Style.module.css"
import "./Page10.css"

const speakerArr = [
    {
        name: "Pranav Malik",
        text: "Pranav Malik is an experienced software engineer with a passion for Fullstack and Big Data Distributed Systems. With over 3.7 years in the software industry, he has worked for various product-based companies.",
        lIn: "https://www.linkedin.com/in/candidatepstx-95adfsdk23/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/pranav_malik.9aeada3b.jpeg"

    },
    {
        name: "Naveen Pal",
        text: "Naveen Pal is an experienced UX/UI designer with 3 years of experience in IT industry, specialized in creating intuitive and seamless technology experiences for diverse range of projects, passionate about innovation and user-friendly design.",
        lIn: "https://www.linkedin.com/in/naveen-pal-72435919a/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/naveen_pal.516a5ae3.jpeg"

    },
    {
        name: "Prateek Narang",
        text: "Prateek Narang is a software engineer and professional coding instructor, ex-Google SDE and currently works at Scaler and founded, CodingMinutes.com. He mentored over 50,000 students in programming as a former co-founder at Coding Blocks.",
        lIn: "https://www.linkedin.com/in/prateeknarang27/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/prateek_narang.6c4093b9.jpeg"

    }
]

const mentorsArr = [
    {
        name: "Rishav Agarwal",
        text: "Idea Generation",
        lIn: "https://www.linkedin.com/in/rishav-agarwal/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/rishav_agarwal.bbde0df5.jpg"

    },
    {
        name: "Bratati Das",
        text: "UI/UX Design",
        lIn: "https://www.linkedin.com/in/bratatidas/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/bratati_das.e03677b6.jpeg"

    },
    {
        name: "Akash Jaiswal",
        text: "Project Development",
        lIn: "https://www.linkedin.com/in/akashjaiswal03/",
        imgLink: "https://i2c2.vercel.app/_next/static/media/akash_jaiswal.dd8f224d.jpeg"

    }
]

const Page10 = () => {
    return (
        <div className={style.div10Div}>

            <div className={style.div10DivNext}>
            <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Speakers & Mentors</h1>

                <div className={style.div10DivBot}>
                    <div className={style.div10SpeDiv}>
                        <div className={style.div10HSpeDiv}><h2></h2></div>
                        <div className={style.div10PSpeDiv}><p>Get to know the speakers of this amazing Hackathon</p></div>
                        <div className={style.div10CardDiv}>
                            {speakerArr.map((i) => {
                                return <div class="cardPg10">
                                    <div class="first-contentPg10">
                                        <span style={{backgroundImage:`url(${i.imgLink})`}}>
                                            {/* <img src={i.imgLink} alt="" /> */}
                                        </span>
                                    </div>
                                    <div class="second-contentPg10">
                                        <h2 style={{fontSize:'1.5em', fontWeight:'bold'}}>{i.name}</h2>
                                        <span>{i.text}</span>
                                        <span><a target='_blank' href={i.lIn}><button style={{color:"white", backgroundColor:"transparent", border:'none'}} className="btn btn-primary"><i class="fa-brands fa-linkedin"></i></button></a></span>
                                    </div>


                                </div>

                            })}


                        </div>

                    </div>
                </div>


                {/* <div className={style.div10HDiv}><h1>Mentors</h1></div> */}

                <div className={style.div10DivBot}>
                    <div className={style.div10SpeDiv}>
                        <div className={style.div10HSpeDiv}><h2></h2></div>
                        <div className={style.div10PSpeDiv}><p>Grab the opportunity to learn from great mentors.</p></div>
                        <div className={style.div10CardDiv}>
                            {mentorsArr.map((i) => {
                                return <div class="cardPg10">
                                    <div class="first-contentPg10">
                                        <span style={{backgroundImage:`url(${i.imgLink})`}}>
                                            {/* <img src={i.imgLink} alt="" /> */}
                                        </span>
                                    </div>
                                    <div class="second-contentPg10">
                                        <h2 style={{fontSize:'1.5em', fontWeight:'bold'}}>{i.name}</h2>
                                        <span>{i.text}</span>
                                        <span><a target='_blank' href={i.lIn}><button style={{color:"white", backgroundColor:"transparent", border:'none'}} className="btn btn-primary"><i class="fa-brands fa-linkedin"></i></button></a></span>
                                    </div>


                                </div>

                            })}


                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Page10