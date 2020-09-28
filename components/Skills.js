import React from 'react';

export const Skills = ({ skill }) => {
  return (
    <div className='skills'>
      <h4>{skill.type}</h4>
      <ul>
        {skill.skills.map((skill) => (
          <li key={skill.id}>{skill.text}</li>
        ))}
      </ul>
    </div>
  );
};
