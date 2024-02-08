// src/pages/scraper.tsx
import React from 'react';
import UrlInputForm from '../components/UrlInputForm';

const ScraperPage: React.FC = () => {
  const handleUrlSubmit = async (url: string) => {
    console.log('URL submitted:', url);
    console.log('URLUU submitted:', url);
    try {
      // Make a POST request to your API route
      const response = await fetch('/api/linkedinProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }), // Send the URL as JSON
      });

      if (!response.ok) {
        console.log(response, 'response not ok');
        // Handle response errors

        console.log('response not ok');
        throw new Error(`Error: ${response.status}`);
      }

      // Parse JSON response
      const data = await response.json();
      console.log(data);
      // Here you can handle the response data, e.g., display it on the page
    } catch (error) {
        console.log('error:', JSON.stringify(error));
      console.error('Error fetching profile:', error);
      // Here you can handle any exceptions, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h1>LinkedIn Scraper</h1>
      <UrlInputForm onSubmit={handleUrlSubmit} />
      {/* You can add more content or components here if needed */}
    </div>
  );
};

export default ScraperPage;
