import React from "react";
import "./TermsContent.css";

const TermsContent = ({ terms, language }) => {
  return (
    <div className="terms-content">
      <div className="terms-content-container">
        {terms && terms.length > 0 ? (
          terms.map((term) => (
            <section key={term.id} className="term-section">
              <div className="term-text" dangerouslySetInnerHTML={{ __html: term[`content_${language}`] }} />
            </section>
          ))
        ) : (
          <div className="no-terms">
            <p>{language === "en" ? "No terms available" : "Inga villkor tillgängliga"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsContent;
