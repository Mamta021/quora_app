import React from 'react'
import './Sidebar.css';
export default function Sidebar() {
  return (
    <div>
       
  <div className="sidebar col-2 d-flex flex-column">
   <a className='create_space' href='#'>
    <span className='rounded'>+</span> 
    <span>create spaces</span></a> 
    <li><a href="#"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    width={20} height={20} alt=""></img>
    <span>Technology <br /></span></a></li>
    <li><a href="#"><img src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={20} height={20} alt=""></img>
    <span>Fruits <br /></span></a></li>
    <li><a href="#"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={20} height={20} alt=""></img>
    <span>Science Lab<br /></span></a></li>
    <li><a href="#"><img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={20} height={20} alt=""></img>
    <span>Coding <br /></span></a></li>
    <li><a href="#"><img src="https://images.unsplash.com/photo-1616002411355-49593fd89721?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={20} height={20} alt=""></img>
    <span>IIT Kanur<br /> </span></a></li>
   </div>
    </div>
  )
}
