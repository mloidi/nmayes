import React from 'react';

const Education = ({ education }) => {
  return (
    <div className='education'>
      <h2>{education.title}</h2>
      <div>{education.location}</div>
      <div>{education.year}</div>
    </div>
  );
};

export default Education;
