import Layout from '@components/Layout';
import Education from '@components/Education';
import { Profile } from '@components/Profile';
import { ProffesionalExperience } from '@components/ProffesionalExperience';
import { Skills } from '@components/Skills';

const Resume = ({
  title,
  description,
  siteTitle,
  education,
  profile,
  proffesionalExperience,
  skills
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
        </div>
        <div className='left'>
          <h2>Contact Details</h2>
          <p>Email: nnn@mmm.com</p>
          <p>Phone: (456) 256 2648</p>
          <h2>Skills</h2>
            {skills.map(skill=>(
              <Skills key={skill.id} skill={skill}/>
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
      description: configData.default.description,
      education: configData.default.education,
      profile: configData.default.profile,
      proffesionalExperience: configData.default.proffesionalExperience,
      skills: configData.default.skills
    },
  };
}
