import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { FaApplePay, FaAmazonPay, FaPaypal, FaGooglePay } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Hakkımızda</h4>
          <ul>
            <li><Link to="#">Şirket Bilgileri</Link></li>
            <li><Link to="#">Kariyer</Link></li>
            <li><Link to="#">Basın Bültenleri</Link></li>
            <li><Link to="#">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Destek</h4>
          <ul>
            <li><Link to="#">Bize Ulaşın</Link></li>
            <li><Link to="#">SSS</Link></li>
            <li><Link to="#">Yükümlülükler</Link></li>
            <li><Link to="#">Gizlilik Politikası</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sosyal Medya</h4>
          <ul className="social-icons">
            <li><Link to="#"><TiSocialFacebook /></Link></li>
            <li><Link to="#"><TiSocialTwitter /></Link></li>
            <li><Link to="#"><TiSocialInstagram /></Link></li>
            <li><Link to="#"><TiSocialLinkedin /></Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Ödeme Yöntemleri</h4>
          <ul className="payment-icons">
            <li><Link to="#"><FaApplePay /></Link></li>
            <li><Link to="#"><FaGooglePay /></Link></li>
            <li><Link to="#"><FaAmazonPay /></Link></li>
            <li><Link to="#"><FaPaypal /></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
