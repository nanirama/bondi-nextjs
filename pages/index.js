import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from "../components/layout"
import Link from 'next/link'

import HeroImg from "../assets/images/hero-img.jpg"
import Logo from "../assets/images/fitzgerald-logo.png"

import Video1 from "../assets/images/video-img1.png"
import Photo from "../assets/images/photo1.png"

import Map from "../assets/images/map.png"
import Avatar from "../assets/images/avatar.png"
import VideoModal from '../components/videomodal'

import { useState, useEffect } from "react";


export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()
  
  const site = { 
      id: 1, 
      host: '',
      path: '',
      url: '',
      name: 'Garden Services, Inc.',
      color: "#2d4c20",
      logo: "https://trady.link/_next/static/media/logo1.ad520969.png", /* {Logo1} */
      type: "Lawn care company", 
      location: "Tampa, FL", 
      stars: "4.8", 
      reviews: "14", 
      verified: true, 
      links: [
          { icon: "", text: "", link: "" }
      ],        
      twitter: "", 
      instagram: "", 
      facebook: "", 
      youtube: "", 
      tiktok: "", 
      googlemybusiness: "", 
      yelp: "",                 
  }    
  
  useEffect(() => {            
      site.host = window.location.host;
      const pathparts = router.asPath.split('/')  
      site.path = pathparts[1]  
      if (window.location.host == "trady.dev" || window.location.host == "trady.com") {
        site.url = "https://" + site.host + "/" + site.path;
      } else {
        site.url = "https://" + site.host;
      }
      console.log(site);
  }, [])  
  
          
  return (
    <Layout>
      <div className='w-full flex flex-col'>
        <Image src={HeroImg} alt="Bondi" className="object-contain"/>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className='flex -mt-14 mb-2'>
          <Image src={site.logo} alt="" width="117" height="120" />
        </div>
        <h2 className='text-black text-2xl font-semibold mb-1'>{site.name}</h2>
        <p className='text-gray-600 text-base font-normal mb-2'>{site.type}</p>
        <p className='flex gap-2 items-center text-sky-500 text-sm font-normal'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16637 14.8336C2.47321 14.1405 2.27435 13.0831 2.49173 11.6958C1.35703 10.8685 0.75 9.98028 0.75 9C0.75 8.01972 1.35703 7.13146 2.49173 6.30419C2.27435 4.91686 2.47321 3.85953 3.16637 3.16637C3.85953 2.47321 4.91686 2.27435 6.30419 2.49173C7.13146 1.35703 8.01972 0.75 9 0.75C9.98028 0.75 10.8685 1.35703 11.6958 2.49173C13.0831 2.27435 14.1405 2.47321 14.8336 3.16637C15.5268 3.85953 15.7256 4.91686 15.5083 6.30419C16.643 7.13146 17.25 8.01972 17.25 9C17.25 9.98028 16.643 10.8685 15.5083 11.6958C15.7256 13.0831 15.5268 14.1405 14.8336 14.8336C14.1405 15.5268 13.0831 15.7256 11.6958 15.5083C10.8685 16.643 9.98028 17.25 9 17.25C8.01972 17.25 7.13146 16.643 6.30419 15.5083C4.91686 15.7256 3.85953 15.5268 3.16637 14.8336ZM8.25 9.43934L11.4697 6.21967L12.5303 7.28033L8.25 11.5607L5.46967 8.78033L6.53033 7.71967L8.25 9.43934Z" fill="#2C93ED" />
        </svg> Business verified by Trady.</p>
        <div className='flex my-4 gap-3'>
          <Link href={`${site.url}/book`}><a>
          <button className="w-full justify-center sm:w-72 font-medium  flex rounded-md bg-green-300 text-white items-center p-3 gap-1 text-base" >
            <svg width="14" height="13" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9997 2.33331V0.99998C10.9997 0.823169 10.9294 0.653599 10.8044 0.528575C10.6794 0.403551 10.5098 0.333313 10.333 0.333313C10.1562 0.333313 9.98663 0.403551 9.8616 0.528575C9.73658 0.653599 9.66634 0.823169 9.66634 0.99998V2.33331H4.33301V0.99998C4.33301 0.823169 4.26277 0.653599 4.13775 0.528575C4.01272 0.403551 3.84315 0.333313 3.66634 0.333313C3.48953 0.333313 3.31996 0.403551 3.19494 0.528575C3.06991 0.653599 2.99967 0.823169 2.99967 0.99998V2.33331H0.333008V13H13.6663V2.33331H10.9997ZM12.333 11.6666H1.66634V3.66665H12.333V11.6666ZM9.70634 6.61331L8.90634 5.81331L6.53301 8.18665L5.09301 6.75331L4.29301 7.55331L6.53301 9.79331L9.70634 6.61331Z" fill="white" />
            </svg> Book Now           
          </button>
          </a></Link>
          <p className='bg-gray-600 rounded-md w-14 h-12 items-center justify-center flex'><svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Path 13" d="M7.30478 11.0072L9.3101 9.3261C9.60021 9.08289 10.018 9.06624 10.3265 9.28559L12.0838 10.5349C12.5394 10.8588 12.5522 11.531 12.1093 11.872L11.6891 12.1955C11.045 12.6913 10.1821 12.7962 9.4637 12.416C8.19755 11.7458 6.16941 10.5426 4.6882 9.03648C3.27206 7.5965 2.20692 5.73754 1.59415 4.51325C1.20528 3.7363 1.38609 2.81632 1.98778 2.18955L2.39158 1.76893C2.76647 1.37842 3.40856 1.44435 3.69628 1.90288L4.80382 3.66799C5.0107 3.99769 4.96129 4.42677 4.68489 4.70082L2.70336 6.66553" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
          </svg></p>
        </div>
        <div className='flex my-5 gap-3'>
          <div className='flex items-center gap-2 bg-orange-100 py-1 px-2 rounded-md text-sm font-medium text-yellow-700'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
          </svg> {site.stars}</div>
          <div className='flex items-center py-1 underline rounded-md text-sm font-medium text-gray-400'>
            {site.reviews} Reviews</div>
        </div>
        <p className='flex gap-2 items-center text-gray-400 text-sm font-normal mb-3.5'><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.46751 2.45802C11.4246 4.41507 11.4246 7.54635 9.4936 9.47731L6.25375 12.7172C6.09754 12.8734 5.84428 12.8734 5.68807 12.7172L2.44822 9.47731C0.517261 7.54635 0.517261 4.41507 2.44822 2.48411L2.47431 2.45802C4.40527 0.527062 7.51046 0.500968 9.46751 2.45802ZM9.46751 2.45802C9.44141 2.43193 9.44141 2.43193 9.46751 2.45802Z" stroke="#888D91" strokeWidth="1.5" strokeMiterlimit="10" />
          <path d="M5.97072 7.25933C6.69128 7.25933 7.27542 6.6752 7.27542 5.95463C7.27542 5.23407 6.69128 4.64993 5.97072 4.64993C5.25015 4.64993 4.66602 5.23407 4.66602 5.95463C4.66602 6.6752 5.25015 7.25933 5.97072 7.25933Z" stroke="#888D91" strokeWidth="1.5" strokeMiterlimit="10" />
        </svg> {site.location}</p>

        <div className='flex gap-2 mb-6'>
          <div className="justify-center font-medium  flex rounded-md bg-gray-200 text-gray-600 items-center py-1 px-2 text-sm" >
            Lawn care  </div>
          <div className="justify-center font-medium  flex rounded-md bg-gray-200 text-gray-600 items-center py-1 px-2 text-sm" >
            Lawn care  </div>
          <div className=" justify-center font-medium  flex rounded-md bg-gray-200 text-gray-600 items-center py-1 px-2 text-sm" >
            Lawn care  </div>
        </div>
        <h2 className='text-black text-2xl font-semibold mb-2.5'>Selected work</h2>
        <div className='flex gap-2 mb-10'>
          <Image src={Video1} alt="" onClick={() => setShowModal(true)}/>
          <Image src={Video1} alt="" onClick={() => setShowModal(true)}/>
          <Image src={Video1} alt="" onClick={() => setShowModal(true)} />
          { showModal ? (
            <VideoModal setShowModal={setShowModal}/>
          ): null}

        </div>
        <h2 className='text-black text-2xl font-semibold mb-2.5'>About us</h2>
        <p className='mb-6'>Proudly Serving Western Wisconsin & Eastern Minnesota. Whether you are just looking for a lawn company to cut your grass so you don’t have to or you need a qualified and seasoned lawn care professional to bring your lawn to life, F</p>
        <div className='border text-sm p-2.5 w-full font-medium text-gray-600 text-center text-sm mb-6 rounded-md  sm:w-72 w-full'>
          <Link href={`${router.pathname}about`}><a>About Us</a></Link>
        </div>
        <h2 className='text-black text-2xl font-semibold mb-4'>About us</h2>
        <ul>
          <li className='flex gap-2 text-sm text-gray-600 mb-5'><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" fill="#5D5E5E" />
            <path d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" fill="#5D5E5E" />
            <path d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" fill="#5D5E5E" />
            <path d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.43262 3.25977V12.6373" stroke="#5D5E5E" strokeWidth="1.5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" fill="#5D5E5E" />
            <path d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.7119 3.25977V12.7697" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 6.31317H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 9.41718H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
          </svg> Pool cleaning</li>
          <li className='flex gap-2 text-sm text-gray-600 mb-5'><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" fill="#5D5E5E" />
            <path d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" fill="#5D5E5E" />
            <path d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" fill="#5D5E5E" />
            <path d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.43262 3.25977V12.6373" stroke="#5D5E5E" strokeWidth="1.5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" fill="#5D5E5E" />
            <path d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.7119 3.25977V12.7697" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 6.31317H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 9.41718H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
          </svg> Pool cleaning</li>
          <li className='flex gap-2 text-sm text-gray-600 mb-5'><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" fill="#5D5E5E" />
            <path d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" fill="#5D5E5E" />
            <path d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" fill="#5D5E5E" />
            <path d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.43262 3.25977V12.6373" stroke="#5D5E5E" strokeWidth="1.5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" fill="#5D5E5E" />
            <path d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.7119 3.25977V12.7697" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 6.31317H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 9.41718H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
          </svg> Pool cleaning</li>
          <li className='flex gap-2 text-sm text-gray-600 mb-5'><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" fill="#5D5E5E" />
            <path d="M1 12.6376C1.67877 12.6296 2.22878 12.7861 2.65 13.1072C3.28184 13.5887 3.83564 14.5856 5.4044 13.4975C6.00493 13.0809 6.3114 12.6376 7.05348 12.6376C7.79556 12.6376 8.40579 13.3059 8.74259 13.4975C9.28828 13.8078 9.45293 13.9145 10.0757 13.9145C10.6984 13.9145 10.9645 13.6693 11.3056 13.4135C11.8277 13.0218 12.2287 12.6376 12.9908 12.6376C13.7528 12.6376 13.9804 12.8779 14.5477 13.4135C15.0509 13.8885 15.4469 13.8885 15.88 13.9145C16.4573 13.9492 17.0207 13.4902 17.26 13.3121C17.759 12.9409 18.102 12.6376 19 12.6376" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" fill="#5D5E5E" />
            <path d="M1 15.6506C1.67877 15.6426 2.22878 15.7991 2.65 16.1202C3.28184 16.6017 3.83564 17.5986 5.4044 16.5105C6.00493 16.0939 6.3114 15.6506 7.05348 15.6506C7.79556 15.6506 8.40579 16.3189 8.74259 16.5105C9.28828 16.8208 9.45293 16.9275 10.0757 16.9275C10.6984 16.9275 10.9645 16.6823 11.3056 16.4265C11.8277 16.0348 12.2287 15.6506 12.9908 15.6506C13.7528 15.6506 13.9804 15.8909 14.5477 16.4265C15.0509 16.9015 15.4469 16.9015 15.88 16.9275C16.4573 16.9622 17.0207 16.5032 17.26 16.3251C17.759 15.9539 18.102 15.6506 19 15.6506" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" fill="#5D5E5E" />
            <path d="M6.43243 3.25974C6.43243 2.01172 5.45463 1 4.24844 1C3.04226 1 2.06445 2.01172 2.06445 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.43262 3.25977V12.6373" stroke="#5D5E5E" strokeWidth="1.5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" fill="#5D5E5E" />
            <path d="M13.7127 3.25974C13.7127 2.01172 12.7349 1 11.5287 1C10.3225 1 9.34473 2.01172 9.34473 3.25974" stroke="#5D5E5E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.7119 3.25977V12.7697" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 6.31317H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
            <path d="M6.43262 9.41718H13.7126" stroke="#5D5E5E" strokeWidth="1.5" />
          </svg> Pool cleaning</li>
        </ul>
        <div className='border text-sm p-2.5 w-full font-medium text-gray-600 text-center text-sm mb-6 rounded-md  sm:w-72 w-full'>
          <Link href="/">See all services and prices</Link>
        </div>
        <h2 className='text-black text-2xl font-semibold mb-3'>Photos</h2>
        <div className='flex mb-4'>
          <Image src={Photo} alt="" />
        </div>
        <h2 className='text-black text-2xl font-semibold mb-3'>Services</h2>
        <div className='flex md:flex-row flex-col gap-2'>
          <div className='w-full border bg-gray-100 flex justify-between items-center px-3 py-2.5 rounded-md'>
            <div className='flex flex-col'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>Service 1</h4>
              <p className='text-xs text-gray-400'>Lorem · Ipsum · Dolor</p>
            </div>
            <div className='flex flex-col items-end'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>$187</h4>
              <p className='text-xs text-gray-400'>Lorem ipsum, yes</p>
            </div>
          </div>
          <div className='w-full border bg-gray-100 flex justify-between items-center px-3 py-2.5 rounded-md'>
            <div className='flex flex-col'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>Service 2</h4>
              <p className='text-xs text-gray-400'>Lorem · Ipsum · Dolor</p>
            </div>
            <div className='flex flex-col items-end'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>$250</h4>
              <p className='text-xs text-gray-400'>Lorem ipsum, yes</p>
            </div>
          </div>
          <div className='w-full border bg-gray-100 flex justify-between items-center px-3 py-2.5 rounded-md'>
            <div className='flex flex-col'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>Service 3</h4>
              <p className='text-xs text-gray-400'>Lorem · Ipsum · Dolor</p>
            </div>
            <div className='flex flex-col items-end'>
              <h4 className='text-black text-sm mb-1.5 font-medium'>Get Free estimate</h4>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <button className="w-full justify-center sm:w-72 font-medium flex rounded-md bg-blue-50 text-blue-500 items-center p-3 gap-1 text-base mt-5 mb-3" >
            See all services and prices
          </button>
          <p className='text-gray-400 text-xs text-center font-medium mb-5'>Prices may vary depending on lorem ipsum...</p>
        </div>
        <h2 className='text-black text-2xl font-semibold mb-3'>Service coverage area</h2>
        <Image src={Map} alt="" />
        <div className='flex items-center gap-2 py-1 px-2 rounded-md text-lg font-medium text-black mt-3 mb-2'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
        </svg> 4.8/5 · 14 Reviews</div>
        <div className='flex gap-5 justify-between mb-8'>
          <div className='flex flex-col w-full gap-y-2'>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 1 </p>
              <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" />
              <p className='text-xs'>4.8</p></div>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 2 </p> <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" /> <p className='text-xs'>4.8</p></div>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 3 </p> <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" /><p className='text-xs'>4.8</p></div>
          </div>
          <div className='flex flex-col w-full gap-y-2'>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 4 </p> <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" /><p className='text-xs'>4.8</p></div>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 5 </p> <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" /> <p className='text-xs'>4.8</p></div>
            <div className='flex justify-between text-gray-700 items-center'><p className='text-sm'>Criteria 6 </p>  <input className="sm:w-75 w-1/4 h-1  bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" x-model="total_value" min="0" max="100" step="5" /><p className='text-xs'>4.8</p></div>
          </div>
        </div>
        <div className=''>
          <p className='flex items-center gap-1 text-gray-400 font-medium text-lg mb-4'>Filter by <span className='text-black underline'> Latest </span> <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5L0.535899 0.5L7.4641 0.5L4 5Z" fill="#5E5E5E" />
          </svg>
          </p>
          <div className='flex justify-start gap-3 pb-3 mb-3 border-b'>
            <div className='w-8 h-8'>
              <Image src={Avatar} alt="" width="32" height="32" />
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='text-sm font-medium text-gray-800'>Laura M.</h5>
              <p className='text-xs font-medium text-gray-400'>April 4, 2021</p>
              <div className='flex'>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
              </div>
              <p className='text-xs text-black'>Perfect location! Beautiful views! Large, spacious home with lots of room for guests! It was the perfect place for a family get away!</p>

            </div>
          </div>
          <div className='flex justify-start gap-3 pb-3 mb-3 border-b'>
            <div className='w-8 h-8'>
              <Image src={Avatar} alt="" width="32" height="32" />
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='text-sm font-medium text-gray-800'>Laura M.</h5>
              <p className='text-xs font-medium text-gray-400'>April 4, 2021</p>
              <div className='flex'>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2693 0.639248C6.55119 0.00685751 7.44881 0.00685656 7.73069 0.639247L9.02221 3.53665C9.13848 3.79748 9.38495 3.97655 9.66894 4.00653L12.8236 4.33949C13.5122 4.41216 13.7896 5.26584 13.2752 5.72935L10.9187 7.85301C10.7066 8.04418 10.6125 8.33393 10.6717 8.61328L11.3299 11.7165C11.4736 12.3938 10.7474 12.9214 10.1476 12.5754L7.3997 10.9905C7.15233 10.8479 6.84767 10.8479 6.6003 10.9905L3.85239 12.5754C3.25263 12.9214 2.52644 12.3938 2.6701 11.7165L3.32829 8.61328C3.38754 8.33393 3.2934 8.04418 3.08126 7.85301L0.724768 5.72935C0.210437 5.26584 0.487814 4.41216 1.17636 4.33949L4.33106 4.00653C4.61505 3.97655 4.86152 3.79748 4.97779 3.53665L6.2693 0.639248Z" fill="#E8B128" />
                </svg>
              </div>
              <p className='text-xs text-black'>Perfect location! Beautiful views! Large, spacious home with lots of room for guests! It was the perfect place for a family get away!</p>

            </div>
          </div>


        </div>


      </div>
    </Layout>
  )
}