import Head from 'next/head';

import Header from '@components/Header';
import Footer from './Footer';

const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          href='https://fonts.googleapis.com/css2?family=Grandstander:wght@100&family=Ranchers&display=swap'
          rel='stylesheet'
        />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <section className="section">
        <div>{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
