import React from 'react';

export const Skills = ({ skill }) => {
  return (
    <div className='skills'>
      <h3>{skill.type}</h3>
      <ul>
        {skill.skills.map((skill) => (
          <li key={skill.id}>{skill.text}</li>
        ))}
      </ul>
    </div>
  );
};
