import React from 'react';

export const Profile = ({ profile }) => {
  return (
    <div className='profile'>
      <p>{profile.text}</p>
    </div>
  );
};
