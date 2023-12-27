// DownloadButton.js

import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '';

    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;

    // Set the download attribute with the desired file name
    link.download = 'karan_resume.pdf'; // Replace with your name

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
