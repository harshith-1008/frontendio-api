import React, { useState } from "react"
import mobBackground from "./assets/pattern-bg-mobile.png"
import 'leaflet/dist/leaflet.css';


export default function Navbar(props){
    return(
        
        <nav className="relative flex flex-col items-center z-10">
            <img src={mobBackground} className="w-full"/>
            <h1 className="absolute top-10 text-white text-3xl mb-6">IP Address Tracker</h1>
            <div className=" absolute top-28">
                <div className="relative">
                    <input 
                    className="h-14 relative rounded-xl p-4 w-80" 
                    placeholder="Search for any IP address and domain"
                    value={props.value}
                    onChange={props.onChange}
                    >
                    </input>
                    <svg type="submit" className="absolute text-black top-5 right-3 " xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#000000" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
                </div>
            </div>
            <div className="absolute top-56 rounded-lg">
                <div className="h-60 w-80 bg-white pt-6 rounded-xl">
                    <h3 className=" text-gray-400 text-semibold text-xs">IP ADDRESS</h3>
                    <p className="pb-2">{props.ip}</p>
                    <h3 className=" text-gray-400 text-semibold text-xs">LOCATION</h3>
                    <p className="pb-2">{props.loc}</p>
                    <h3 className=" text-gray-400 text-semibold text-xs">TIMEZONE</h3>
                    <p className="pb-2">{props.time}</p>
                    <h3 className=" text-gray-400 text-semibold text-xs">ISP</h3>
                    <p className="pb-2">{props.isp}</p>
                </div>
            </div>
        </nav>
    )
}