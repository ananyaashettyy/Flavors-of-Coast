import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
      <p>
        We value your privacy and are committed to protecting your personal information. This policy outlines what data we collect, how it is used, and your rights.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>We do not collect any personal data from users.</li>
        <li>We may collect anonymous data such as page views and recipe clicks for analytics purposes.</li>
      </ul>

      <h2>Use of Information</h2>
      <p>
        Any data collected is solely for improving your experience on our site. We do not sell or share your information.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance functionality, such as remembering your preferences. You can disable cookies in your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about our privacy policy, feel free to <a href="mailto:ananyashetty82987@gmail.com">email us</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
