import React from "react";

function TitleParagraph({ title, paragraph }) {
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="appie-section-title text-center">
            <h3 className="appie-title">{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleParagraph;
