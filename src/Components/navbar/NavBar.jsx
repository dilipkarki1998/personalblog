import "./navbar.css"



export default function NavBar() {
  return (
    <div className="navi ">
        <div className="topleft">
        <i className="topicon fa-brands fa-facebook-f"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
        </div>
        <div className="topcenter">
       <ul className="toplist">
           <li className="toplistitems">HOME</li>
           <li className="toplistitems">ABOUT US</li>
           <li className="toplistitems">CONTACT US</li>
           <li className="toplistitems">UPLOAD</li>
           <li className="toplistitems">LOGOUT</li>
        </ul>
       </div>
        <div className="topright">
        
        <img className="topimg" 
             src="./images/dilip.jpg" alt=""/>
             <i className="topsearchicon fa-solid fa-magnifying-glass"></i>

            
            </div>
        </div>
  )
}
