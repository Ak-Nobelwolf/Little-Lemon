import React from 'react';

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Oops! Page Not Found</h1>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default ErrorPage;
