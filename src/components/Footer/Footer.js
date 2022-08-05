import React from "react";
import { Link } from "react-router-dom";
import flag from "../../assets/logo.png";
import { footer } from "../../utils/data";
import "./Footer.css";
import { IoCaretBack } from "react-icons/io5";
import { BsFillFileArrowUpFill } from "react-icons/bs";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  const goToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    window.scrollTo(0,0);
  };
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-right">
          <img src={flag} alt="flag" />
        </div>
        <div className="footer-top-left">
          <div>
            <h1>مصر</h1>
            {footer[0]?.egypt.map((item, index) => (
              <motion.ul
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                key={index}
              >
                <li>
                  <Link to={item.path}>
                    <IoCaretBack /> {item.title}
                  </Link>
                </li>
              </motion.ul>
            ))}
          </div>
          <div>
            <h1>الرئاسة</h1>
            {footer[1]?.chair.map((item, index) => (
              <motion.ul
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                key={index}
              >
                <li>
                  <Link to={item.path}>
                    <IoCaretBack /> {item.title}
                  </Link>
                </li>
              </motion.ul>
            ))}
          </div>
          <div>
            <h1>الأنشطة الرئاسية</h1>
            {footer[2]?.activities.map((item, index) => (
              <motion.ul
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                key={index}
              >
                <li>
                  <Link to={item.path}>
                    <IoCaretBack /> {item.title}
                  </Link>
                </li>
              </motion.ul>
            ))}
          </div>
          <div>
            <h1>الأنشطة الرئاسية</h1>
            {footer[3]?.opens.map((item, index) => (
              <motion.ul
                whileInView={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                key={index}
              >
                <li className="footer-item-list">
                  <Link to={item.path}>
                    <IoCaretBack /> {item.title}
                  </Link>
                </li>
              </motion.ul>
            ))}
          </div>
          <motion.div
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={() => goToTop()}
            className="go-to-top"
          >
            <BsFillFileArrowUpFill />
          </motion.div>
        </div>
      </div>

      <motion.div whileInView={{ yx: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "spring" }} className="footer-bottom">
        <div>
          <h5>الأحكام والشروط سياسة الخصوصية</h5>
        </div>
        <div>
          <h5>
            © جميع الحقوق محفوظة للموقع الإلكتروني لرؤية المملكة ٢٠٣٠ ، المملكة

          </h5>
        </div>
        <div>
          <a
            href="https://www.facebook.com/hany.magdy25"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/hanymagdy_99"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/iamhanymagdy/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a href="/">
            <BsYoutube />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
