import matter from 'gray-matter';

import Layout from '@components/Layout';
import Education from '@components/Education';

const Index = ({
  title,
  description,
  siteTitle,
  education,
  ...props
}) => {
  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      <div className='resume'>
        <h2>Education</h2>
        {education.map(edu => (
          <Education key={edu.id} education={edu}></Education>
        ))}
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      education: configData.default.education
    },
  };
}
