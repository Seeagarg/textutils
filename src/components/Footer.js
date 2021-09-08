import React from 'react'

const Footer = () => {

  let footerStyle = {
    position: "relative",
    top: "20vh",
    // width: "110%",
   border: "2px solid red"
  }
  return (
    <footer className = "bg-dark text-light py-3" style={footerStyle}>
     <p className = "text-center" >
       copyright &copy :TextUtils.com 
     </p>
     
    </footer>
  )
}

export default Footer;