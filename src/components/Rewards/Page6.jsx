'use client'
import React, { useState } from 'react'
import style from "./Page6.module.css"
import "./Page6.css"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'

const priceArr = [
    {
        priceHead: "Silver",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy2.6fb80587.png&w=256&q=75",
        price: "₹ 5,000",
        pDiagList: ["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "silverPricePg6"
    },
    {
        priceHead: "Gold",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy.1ae0614f.png&w=256&q=75",
        price: "₹ 10,000",
        pDiagList: ["Cash Prize: ₹5k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        pDiagList: ["Cash Prize: ₹10k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "goldPricePg6"

    },
    {
        priceHead: "Bronze",
        pImgLink: "https://i2c2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy3.78b9282c.png&w=256&q=75",
        price: "₹ 2,000",
        pDiagList: ["Cash Prize: ₹2k", "Goodies & Tshirts", "Vouchers worth ₹5k", "Food Coupons, domain name etc.", "* You can see special prizes for a challenge in the challenge section."],
        cName: "bronzePricePg6"
    }
]

const Page6 = () => {
    const [dialogText, setDialogText] = useState([])
    const [myPriceHead, setMyPriceHead] = useState("")
    const [pImgLink, setPImgLink] = useState("")
    const handleOnCloseRewardPage = () => {
        gsap.to(".pg6WindowDiv", {
            y: "100vh"
        })
    }

    const handleOnShowPrices = (dialist, phead, pimlink) => {
        setDialogText(dialist)
        setPImgLink(pimlink)
        setMyPriceHead(phead)
        gsap.to(".pg6WindowDiv", {
            y: "0vh"
        })
    }

    return (
        <div className={style.page6Height}>
            <div className={`${style.showPriceWindow} pg6WindowDiv`}>
                <button onClick={handleOnCloseRewardPage} style={{ backgroundColor: "transparent", bordern: 'none', color: 'white', height: "35px", width: "35px", position: "absolute", right: "5%", top: "5%" }}> <svg style={{ width: "100%" }} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                        <g transform="scale(10.66667,10.66667)">
                            <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
                        </g>
                    </g>
                </svg></button>

                <div className={style.imgSectionPg6}>
                    <div style={{width:"90%"}}>
                        <div ><img style={{ width: "22%", padding: "2%" }} src={pImgLink} alt="" /></div>
                        <h3 className="font-bold text-lg">Prizes for {myPriceHead} Medallist</h3>
                        {dialogText.map((i) => {
                            return <p className="py-4">{i}</p>
                        })}

                    </div>
                </div>
            </div>
            <dialog style={{ color: "white" }} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div><img style={{ width: "42%", padding: "4%" }} src={pImgLink} alt="" /></div>
                    <h3 className="font-bold text-lg">Prizes for {myPriceHead} Medallist</h3>
                    {dialogText.map((i) => {
                        return <p className="py-4">{i}</p>
                    })}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className={style.page6HeightInsideDiv}>
                <div className={style.page6HDiv}><h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Rewards</h1></div>
                <div className={style.page6BottomDiv}>
                    {priceArr.map((i) => {
                        return <div class={`cardPg6 ${i.cName}`}>
                            <div class="iconPg6">
                                <img src={i.pImgLink} alt="" />
                            </div>
                            <strong> {i.priceHead}
                            </strong>
                            <div class="card__bodyPg6">
                                {i.price}
                            </div>
                            <span onClick={() => handleOnShowPrices(i.pDiagList, i.priceHead, i.pImgLink)} style={{ cursor: "pointer" }}>More Prices</span>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Page6