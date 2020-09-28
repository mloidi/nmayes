import Layout from '@components/Layout';
import Education from '@components/Education';
import { Profile } from '@components/Profile';
import { ProffesionalExperience } from '@components/ProffesionalExperience';

const Resume = ({
  title,
  description,
  siteTitle,
  education,
  profile,
  proffesionalExperience,
  ...props
}) => {
  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      <div className='resume'>
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
        <h2>Education</h2>
        {education.map((edu) => (
          <Education key={edu.id} education={edu}></Education>
        ))}
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
    },
  };
}
