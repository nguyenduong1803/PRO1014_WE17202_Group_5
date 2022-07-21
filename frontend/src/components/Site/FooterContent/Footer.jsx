import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import logo from "../../assets/img/blog"
const useLink = [
  {
    name: "WordPress Themes",
    href: "#",
  },
  {
    name: "WordPress Plugins",
    href: "#",
  },
  {
    name: "Admin Templates",
    href: "#",
  },
  {
    name: "Website Templates",
    href: "#",
  },
  {
    name: "Flutter Apps",
    href: "#",
  },
];
const serviceLink = [
  {
    name: "Freebies",
    href: "#",
  },
  {
    name: "Hope UI",
    href: "#",
  },
  {
    name: "Graphina",
    href: "#",
  },
  {
    name: "Business",
    href: "#",
  },
  {
    name: "WordPress",
    href: "#",
  },
  {
    name: "Mobile App Development",
    href: "#",
  },
];
const contacts = [
  {
    name: "Tech Support",
    href: "#",
  },
  {
    name: "Get A Quote",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
  {
    name: "Support Policy",
    href: "#",
  },
  {
    name: "Licenses",
    href: "#",
  },
];
const company = [
  {
    name: "Freebies",
    href: "#",
  },
  {
    name: "Hope UI",
    href: "#",
  },
  {
    name: "Graphina",
    href: "#",
  },
  {
    name: "Business",
    href: "#",
  },
  {
    name: "WordPress",
    href: "#",
  },
  {
    name: "Mobile App Development",
    href: "#",
  },
];
function Footer() {
  return (
    <footer className="footer_home spad" style={{ paddingLeft: "24px" }}>
      <div className="containerss">
        <div
          className="row"
          style={{
            justifyContent: "center",
            padding: "30px ",
            float: "center",
            marign: "0 auto",
          }}
        >
          <div className="col-lg-3">
            <div
              className="footer__about footer__widget"
              style={{ width: "100%", paddingLeft: "24px" }}
            >
              <h6>Products</h6>
              <ul style={{ width: "100%" }}>
                {useLink.map((ele, index) => (
                  <li key={index}>
                    <a href={ele.href} className="text-decoration-none">
                      {ele.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div
              className="footer__widget"
              style={{ width: "100%", paddingLeft: "24px" }}
            >
              <h6>Blog</h6>
              <ul style={{ width: "100%" }}>
                {serviceLink.map((ele, index) => (
                  <li key={index}>
                    <a href={ele.href} className="text-decoration-none">
                      {ele.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="footer__widget"
              style={{ width: "100%", paddingLeft: "24px" }}
            >
              <h6>Support</h6>
              <ul style={{ width: "100%" }}>
                {contacts.map((ele, index) => (
                  <li key={index}>
                    <a href={ele.href} className="text-decoration-none">
                      {ele.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="footer__widget"
              style={{ width: "100%", paddingLeft: "24px" }}
            >
              <h6>Support</h6>
              <ul style={{ width: "100%" }}>
                {company.map((ele, index) => (
                  <li key={index}>
                    <a href={ele.href} className="text-decoration-none">
                      {ele.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright ©2022 by group 5. All Right Reserved.{" "}
                  <FavoriteIcon /> by{" "}
                  <a href="/" target="_blank">
                    Group 5
                  </a>
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src="" alt="" />
                <div className="footer__widget__social">
                  <ul>
                    <li>
                    <a href="#" style={{ color: "#3b5999" }}>
                    <FacebookIcon />
                  </a>
                    </li>
                    <li>
                    <a href="#" style={{ color: "#55acee" }}>
                    <LinkedInIcon />
                  </a>
                    </li>
                    <li>
                    <a href="#" style={{ color: "#0077b5" }}>
                    <TwitterIcon />
                  </a>
                    </li>
                    <li>
                    <a href="#" style={{ color: "#dd4b39" }}>
                    <PinterestIcon />
                  </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
