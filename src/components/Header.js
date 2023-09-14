import React from 'react';

function Header() {
  return (
    <div>
      <h1 className="app-title mt-5 fw-bold">WARS Calculator</h1>
      <p className="mt-4 mb-4">
        The <strong>WedgeDawg's Applicant Rating System (WARS)</strong> is a widely recognized tool designed to help medical school applicants gauge which schools they should apply to. This calculator provides an interactive interface to streamline the process and give personalized recommendations based on your individual profile. For an in-depth explanation and discussion of the WARS system, visit the <a href="https://forums.studentdoctor.net/threads/wedgedawgs-applicant-rating-system-updated-jan-2017.1131149/" target="_blank" rel="noopener noreferrer">original forum post</a>.
      </p>
    </div>
  );
}

export default Header;
