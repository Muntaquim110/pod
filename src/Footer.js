import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (

    <footer className="Footer">
      <p> Copyright  ©   {currentYear}   All Rights Reserved </p> 

    </footer>
  );
}

export default Footer;
