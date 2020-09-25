import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import Layout from '@components/Layout';

const Index = ({
  title,
  description,
  siteTitle,
  frontmatter,
  markdownBody,
  ...props
}) => {
  return (
    <Layout pageTitle={title}>
      <h1>Welcome to my web!</h1>
      <div className='resume'>
        <h2>{frontmatter.author}</h2>
        <h2>ksdjbf sdkjfbk asdkjfblsdkf osadihf;sahdf osdfhlsjdkafn oasidfbn</h2>
        <a href={`mailto:${frontmatter.email}`} target='_blank'>
          {frontmatter.email}
        </a>
        <ReactMarkdown source={markdownBody} />
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const content = await import(`../posts/resume.md`);
  const data = matter(content.default);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
