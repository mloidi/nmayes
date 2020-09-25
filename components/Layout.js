import Head from 'next/head';

export default function Layout({ children, pageTitle, ...props }) {
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
      <section>
        <div>{children}</div>
      </section>
      <footer>
        Built by
        <a href='https://mloidi.com/' target='_blank'>
          Mikel Loidi
        </a>
      </footer>
    </>
  );
}
