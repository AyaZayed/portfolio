import React from 'react'

export default function Resume() {
    const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch("resume.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Aya Zayed Resume.pdf";
                alink.click();
            });
        });
    };
    return (
        <button className="contact-button" onClick={downloadResume}>
            DOWNLOAD CV
        </button>
    )
}
