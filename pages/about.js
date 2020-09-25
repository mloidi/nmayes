import Layout from '@components/Layout';

const About = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={`${title} | About`} description={description}>
      <div className='about'>
        <h1>Hi, my name is Mikel Loidi</h1>
        <p>{description}</p>
        <p>
          I'm a web developer currently located in Pamplona Spain. You know, the
          running of the bulls. When I’m not running with them, my main focus is
          to developing new web technologies. In my free time, I am constantly
          experimenting with new projects, pushing my skills to adapt the latest
          web tech to build new web designs.
        </p>
        <p>
          I am passionate about development and design. On the frontend, I work
          mainly with React while on the backend I work with Node and Express.
          As for a data base I prefer to use MongoDB.
        </p>
        <p>
          As a growing community, the web industry is one that I have learned so
          much from and hope to give back just as much. I am mostly excited
          about the future of this industry. There is so much we have yet to
          discover, and I cannot wait to see what is coming next.
        </p>
        <h2>Profile</h2>
        <p>
          Advanced developer with 15 years of experience in structuring,
          developing and implementing applications and innovative use of
          technology. Able to complete projects efficiently and satisfy clients.
        </p>
        <ul>
          <li>Advanced programming and design skills</li>
          <li>Excellent problem solving skills</li>
          <li>Strong collaborative skills</li>
          <li>Project Management</li>
        </ul>
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
      description: configData.default.description,
    },
  };
}
