import React from 'react';

export const ProffesionalExperience = ({ proffesionalExperience }) => {
  return (
    <div className='proffesionalExperience'>
      <h3>{proffesionalExperience.role}</h3>
      <div>{proffesionalExperience.company}</div>
      <div>
        {proffesionalExperience.location} / {proffesionalExperience.start} -{' '}
        {proffesionalExperience.end}
      </div>
      <ul>
        {proffesionalExperience.responsability.map((resp) => (
          <li key={resp.id}>{resp.text}</li>
        ))}
      </ul>
    </div>
  );
};
