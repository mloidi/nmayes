import Layout from '@components/Layout';

const About = ({ title }) => {
  return (
    <Layout pageTitle={title}>
      <div className="about">

      <h1>About</h1>
      </div>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
    },
  };
}
