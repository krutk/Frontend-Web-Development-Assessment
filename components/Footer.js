import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#152F2E] py-8 sm:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img
          src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
          alt=""
          data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
          data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
          className="h-8 w-40"
        />
        <p className="text-right">
          <span
            style={{
              fontSize: "12px",
              lineHeight: "20px",
              fontFamily: "Muli",
              color: "rgb(162, 172, 172)",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            © 2020 Insert Name Here. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
