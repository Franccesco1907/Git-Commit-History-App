import axios from 'axios';
import React, { useState } from 'react';
import CommitList from './components/CommitList/CommitList';
import Layout from './components/Layout/Layout';
import Loader from './design-system/components/Loader/Loader';
import SearchBar from './design-system/components/SearchBar/SearchBar';
import './index.css';
import { GithubCommit } from './interfaces/github-commit.interface';

const App: React.FC = () => {
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = async (query: string) => {
    setLoading(true);

    try {
      const response = await axios.get<GithubCommit[]>(
        `http://localhost:8080/commit`
      );
      console.log('response', response.data)
      console.log('query', query)
      setCommits(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white-900">
              Github Commit History
            </h1>
          </div>
        </div>
      <div className="mx-auto max-w-7xl py-6 px-8 sm:px-10 lg:px-12">
        <SearchBar onSearch={handleSearch} />
        {loading ? <Loader /> : <CommitList commits={commits} />}
      </div>
    </Layout>
  );
};

export default App;
