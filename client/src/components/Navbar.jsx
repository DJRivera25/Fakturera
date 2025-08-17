import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ language, onLanguageToggle, loading }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setIsLanguageDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const onMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    if (isMenuOpen) onMenuClick();
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (lang) => {
    onLanguageToggle(lang);
    setIsLanguageDropdownOpen(false);
  };

  const navLinks = [
    { en: "Home", sv: "Hem", href: "#" },
    { en: "Order", sv: "Beställ", href: "#" },
    { en: "Our Customers", sv: "Våra Kunder", href: "#" },
    { en: "About us", sv: "Om oss", href: "#" },
    { en: "Contact Us", sv: "Kontakta oss", href: "#" },
  ];
  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Left side - Logo and Hamburger Menu */}
        <div className="navbar-left">
          {/* Hamburger Menu - Hidden during initial loading */}
          {!loading && (
            <button className="hamburger-menu" onClick={onMenuClick} aria-label="Toggle menu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}

          {/* Logo - Always visible, even during loading */}
          <div className="logo">
            <img
              src="https://storage.123fakturera.se/public/icons/diamond.png"
              alt="123Fakturera"
              className="logo-icon"
            />
          </div>
        </div>

        {/* Right side - Navigation links and Language selector */}
        <div className="navbar-right">
          {/* Navigation Links - Hidden during loading and when menu is open */}
          {!loading && (
            <nav className={`nav-links ${isMenuOpen ? "mobile-menu-open" : ""}`}>
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="nav-link">
                  {language === "en" ? link.en : link.sv}
                </a>
              ))}
            </nav>
          )}

          {/* Language Selector - Hidden during initial loading */}
          {!loading && (
            <div className="language-selector-container">
              <div className="language-selector" onClick={toggleLanguageDropdown}>
                <span className="language-text">{language === "en" ? "English" : "Svenska"}</span>
                <img
                  src={
                    language === "en"
                      ? "https://storage.123fakturere.no/public/flags/GB.png"
                      : "https://storage.123fakturere.no/public/flags/SE.png"
                  }
                  alt={language === "en" ? "English" : "Swedish"}
                  className="flag-icon"
                />
              </div>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  <div className="dropdown-item" onClick={() => selectLanguage("sv")}>
                    <span className="dropdown-text">Svenska</span>
                    <img
                      src="https://storage.123fakturere.no/public/flags/SE.png"
                      alt="Swedish"
                      className="dropdown-flag"
                    />
                  </div>
                  <div className="dropdown-item" onClick={() => selectLanguage("en")}>
                    <span className="dropdown-text">English</span>
                    <img
                      src="https://storage.123fakturere.no/public/flags/GB.png"
                      alt="English"
                      className="dropdown-flag"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "show" : "hide"}`} onClick={onMenuClick}>
        <div className={`mobile-menu ${isMenuOpen ? "show" : "hide"}`} onClick={(e) => e.stopPropagation()}>
          <nav className="mobile-nav">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="mobile-nav-link">
                {language === "en" ? link.en : link.sv}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
