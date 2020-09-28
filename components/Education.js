import React from 'react';

const Education = ({ education }) => {
  return (
    <div className='education'>
      <h3>{education.center}</h3>
      <h4>{education.title}</h4>
      <div>
        {education.location} / {education.year}
      </div>
    </div>
  );
};

export default Education;
