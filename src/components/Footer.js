import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto">
        <p className=" text-white text-left">
          &copy; {new Date().getFullYear()} Soben All rights reserved
        </p>
        <p className="text-white text-right">
          v1.0.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
