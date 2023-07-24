import React from 'react';
import Layout from './components/Layout/Layout';
import GitCommitHistory from './pages/GitCommitHistory/GitCommitHistory';
import './index.css';

const App: React.FC = () => {
  return (
    <Layout>
      <GitCommitHistory />
    </Layout>
  );
};

export default App;
