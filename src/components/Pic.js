import React from "react"
import pic from '../images/my-card-pic.png';

export default function Pic() {
    return (
        <div>
        <img className='profile-pic' src={pic} alt="my pic" />
        </div>
    )
}