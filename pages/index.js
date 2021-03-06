import Layout from '@components/Layout';

const Index = ({ title }) => {
  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
    },
  };
}
