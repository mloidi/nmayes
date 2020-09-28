import React from 'react';

export const ProffesionalExperience = ({ proffesionalExperience }) => {
  return (
    <div className='proffesionalExperience'>
      <h2>{proffesionalExperience.role}</h2>
      <div>{proffesionalExperience.company}</div>
      <div>
        {proffesionalExperience.start} - {proffesionalExperience.end}
      </div>
      <div>{proffesionalExperience.location}</div>
      <ul>
        {proffesionalExperience.responsability.map((resp) => (
          <li key={resp.id}>{resp.text}</li>
        ))}
      </ul>
    </div>
  );
};
