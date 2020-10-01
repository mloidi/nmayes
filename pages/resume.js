import Layout from '@components/Layout';
import Education from '@components/Education';
import { Profile } from '@components/Profile';
import { ProffesionalExperience } from '@components/ProffesionalExperience';
import { Skills } from '@components/Skills';

const Resume = ({
  title,
  role,
  email,
  phone,
  education,
  profile,
  proffesionalExperience,
  skills,
}) => {
  return (
    <Layout pageTitle={title}>
      <div className='resume'>
        <div className='title'>
          <button
            className='printButton'
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
          <h1>{title}</h1>
          <h2>{role}</h2>
        </div>
        <div className='left'>
          <h2>Contact Details</h2>
          <address>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <br />
            <span>Phone: {phone}</span>
          </address>
          <h2>Skills</h2>
          {skills.map((skill) => (
            <Skills key={skill.id} skill={skill} />
          ))}
          <h2>Education</h2>
          {education.map((edu) => (
            <Education key={edu.id} education={edu}></Education>
          ))}
        </div>
        <div className='right'>
          <h2>Profile</h2>
          {profile.map((prof) => (
            <Profile key={prof.id} profile={prof} />
          ))}
          <h2>Professional Experience</h2>
          {proffesionalExperience.map((profExp) => (
            <ProffesionalExperience
              key={profExp.id}
              proffesionalExperience={profExp}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      role: configData.default.role,
      email: configData.default.email,
      phone: configData.default.phone,
      description: configData.default.description,
      education: configData.default.education,
      profile: configData.default.profile,
      proffesionalExperience: configData.default.proffesionalExperience,
      skills: configData.default.skills,
    },
  };
}
