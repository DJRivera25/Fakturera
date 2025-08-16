import { useState, useEffect } from "react";
import { termsAPI } from "../services/api";
import Navbar from "../components/Navbar";
import TermsContent from "../components/TermsContent";
import CloseButton from "../components/CloseButton";
import "./TermsPage.css";

const TermsPage = () => {
  const [language, setLanguage] = useState("en");
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTerms();
  }, [language]);

  const fetchTerms = async () => {
    try {
      if (terms.length === 0) {
        setLoading(true);
      }
      const response = await termsAPI.getByLanguage(language);
      setTerms(response.data);
    } catch (error) {
      console.error("Error fetching terms:", error);
      // Set some fallback data if API fails
      setTerms([
        {
          id: 1,
          content_en: "<p>Terms and conditions content will be loaded here.</p>",
          content_sv: "<p>Villkor och bestämmelser kommer att laddas här.</p>",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageToggle = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleClose = () => {
    // Navigate back or close the terms page
    window.history.back();
  };

  return (
    <div className="terms-page">
      {/* Navbar */}
      <Navbar language={language} onLanguageToggle={handleLanguageToggle} loading={loading} />

      {/* Page Content - Hidden during initial loading */}
      {!loading && (
        <>
          <div className="page-title-section">
            <h1 className="page-title">{language === "en" ? "Terms" : "Villkor"}</h1>
            {/* Close Button */}
            <CloseButton language={language} onClick={handleClose} />
          </div>

          {/* Main Content Container */}
          <div className="terms-page-container">
            <div className="terms-content-box">
              {/* Terms Content */}
              <TermsContent terms={terms} language={language} loading={false} />
            </div>
            <div className="page-title-section">
              <CloseButton language={language} onClick={handleClose} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TermsPage;
