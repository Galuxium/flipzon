// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { updateUserProfile } from '@clerk/frontend-api-client';

interface SettingsPageProps {
  userProfile: {
    firstName: string;
    lastName: string;
    emailAddress: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = ({ userProfile }) => {
  const router = useRouter();
  const [firstName, setFirstName] = React.useState(userProfile.firstName);
  const [lastName, setLastName] = React.useState(userProfile.lastName);
  const [emailAddress, setEmailAddress] = React.useState(userProfile.emailAddress);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUserProfile({
      firstName,
      lastName,
      emailAddress,
    });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="emailAddress">Email Address:</label>
      <input
        type="email"
        name="emailAddress"
        id="emailAddress"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      />
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default SettingsPage;