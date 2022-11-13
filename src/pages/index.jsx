import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Bare bones</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
