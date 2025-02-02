import React from "react";

const PrivacyPolicyContent = () => {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4"><strong>Effective Date:</strong> 14 September 2024</p>
        <p className="mb-6">
          GoGreen (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and process your personal data when you use our mobile application for Android and iOS (“App”), and the corresponding website, both developed for the sustainability hub at University of Konstanz. This privacy policy also outlines your rights concerning your personal data and how the law protects you.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">1. Data Collection and Use</h2>
        <p className="mb-4">We collect and process various categories of personal data depending on how you interact with the GoGreen app and website.</p>
  
        <h3 className="text-xl font-semibold mb-2">1.1 Google Sign-in Data</h3>
        <p className="mb-4">
          Upon registering with the App via Google sign-in, we collect:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Google Display Name</strong>: Used to personalize your user profile within the app.</li>
          <li><strong>Google Profile Image</strong>: Displayed in your user profile and shared with other users.</li>
          <li><strong>Google Email Address</strong>: Used for authentication, identification, and communication within the app.</li>
        </ul>
  
        <h3 className="text-xl font-semibold mb-2">1.2 User Preferences</h3>
        <p className="mb-4">
          We collect user language preferences to customize the app&apos;s interface. You can select between supported languages (such as English), and this preference is stored in Firebase to personalize your app experience.
        </p>
  
        <h3 className="text-xl font-semibold mb-2">1.3 Organizer and Project Data</h3>
        <p className="mb-4">
          If you choose to become an organizer and create projects related to sustainability goals, we collect the following additional data:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Project/Event Information</strong>: This includes the project name, description, start date, end date, and its alignment with specific UN Sustainable Development Goals (SDGs).</li>
          <li><strong>Uploaded Images</strong>: Images related to the project or event are uploaded via Flutter&apos;s Image Picker. These images are stored in Firebase Storage.</li>
        </ul>
  
        <h3 className="text-xl font-semibold mb-2">1.4 Internet Access and External Communication</h3>
        <p className="mb-4">
          The GoGreen app requires an internet connection for essential functions, such as enrolling in projects, viewing project details, and accessing sustainability content.
        </p>
        <p className="mb-6">
          When a user sends an email through the app (e.g., contacting an event organizer), the app opens the device&apos;s native email application. The app does not send or process email content in the background.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">2. GDPR Compliance</h2>
        <p className="mb-4">
          As the GoGreen app will be used in the European Union (EU), we are fully compliant with the <strong>General Data Protection Regulation (GDPR)</strong>. If you are a resident of the European Economic Area (EEA), you have specific rights regarding your personal data, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Right of Access</strong>: You can request access to the personal data we hold about you.</li>
          <li><strong>Right to Rectification</strong>: You can request corrections to any inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure (Right to Be Forgotten)</strong>: You can request that we delete your personal data.</li>
          <li><strong>Right to Data Portability</strong>: You can request that your personal data be transferred in a structured, commonly used, machine-readable format.</li>
          <li><strong>Right to Restriction of Processing</strong>: You can request that we restrict our processing of your data in certain circumstances.</li>
          <li><strong>Right to Object</strong>: You have the right to object to the processing of your personal data under certain conditions.</li>
          <li><strong>Right to Withdraw Consent</strong>: You may withdraw your consent to the processing of your personal data at any time where consent was initially provided.</li>
        </ul>
        <p className="mb-4">
          You can exercise these rights by contacting us at <a href="mailto:greenoffice.sustainabilityhub@uni-konstanz.de" target="_blank" className="text-black font-bold underline">greenoffice.sustainabilityhub@uni-konstanz.de</a>. We will respond to your request within 30 days as required by GDPR.
        </p>
        <p className="mb-6">
          <strong>Data Transfers</strong>: If your data is transferred outside of the EU, we ensure appropriate safeguards, such as standard contractual clauses (SCCs), are in place to protect your personal data during cross-border transfers.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">3. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data (Google sign-in data, language preferences, and project data) for as long as your account is active. Once a user decides to delete their account, all associated data is permanently removed from Firebase.
        </p>
        <p className="mb-6">
          Users can delete their accounts via a delete button provided within the app, which will remove all personal data, including images, from our servers.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
        <p className="mb-6">
          The GoGreen app utilizes <strong>Firebase</strong> and its associated services for backend support, data storage, and analytics. The following services are used:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Firebase Authentication</strong>: Used for secure user authentication via Google sign-in.</li>
          <li><strong>Firebase Firestore</strong>: Used to store user profiles, project data, and images.</li>
          <li><strong>Google Analytics via Firebase</strong>: Used to track app performance and usage. We only collect aggregated, non-personally identifiable data for analytics purposes to enhance user experience.</li>
        </ul>
  
        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
        <p className="mb-4">
          We prioritize the security of your data and have implemented several technical and organizational measures to protect it:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Encryption</strong>: All data transmitted between the app and Firebase is encrypted using industry-standard protocols (HTTPS).</li>
          <li><strong>Access Control</strong>: User data is protected by access control measures enforced through Firebase Security Rules, ensuring that only authenticated users have access to their data.</li>
          <li><strong>Data at Rest</strong>: Data stored in Firebase is encrypted and protected with security measures that comply with industry standards.</li>
        </ul>
        <p className="mb-6">
          While we strive to protect your personal data, please be aware that no method of transmission over the internet is 100% secure. However, we continuously review and enhance our security practices.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">6. User Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>View and Access</strong>: Users can view their profile and project data at any time within the app.</li>
          <li><strong>Modify</strong>: Users can modify their language preferences and project details directly from the app interface.</li>
          <li><strong>Delete</strong>: Users can permanently delete their account and all associated data through the app&apos;s settings. This action is irreversible.</li>
        </ul>
        <p className="mb-6">
          We do not share personal data with third parties, except as required by Firebase for app functionality and analytics.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">7. Children&apos;s Privacy</h2>
        <p className="mb-6">
          The GoGreen app is not intended for use by individuals under the age of 13. We do not knowingly collect personal data from children under this age. If it is discovered that we have inadvertently collected such data, it will be promptly deleted.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
        <p className="mb-6">
          The GoGreen app does not use cookies or tracking technologies for user identification or tracking. However, aggregated analytics data collected via Firebase may involve the use of tracking technologies by Google Analytics for performance tracking.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We reserve the right to modify this privacy policy at any time. Any changes to this privacy policy will be communicated through the app and will become effective immediately. Continued use of the app after such changes will signify your acceptance of the updated terms.
        </p>
  
        <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:greenoffice.sustainabilityhub@uni-konstanz.de" target="_blank" className="text-black font-bold underline">greenoffice.sustainabilityhub@uni-konstanz.de</a>.
        </p>
      </div>
    );  
};

export default PrivacyPolicyContent;
