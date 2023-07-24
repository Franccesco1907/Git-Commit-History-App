import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import CommitList from '../../components/CommitList/CommitList';
import Loader from '../../design-system/components/Loader/Loader';
import SearchBar from '../../design-system/components/SearchBar/SearchBar';
import http from '../../utils/http';
import { GithubCommit } from '../../interfaces/github-commit.interface';
import ErrorAlert from '../../design-system/components/ErrorAlert/ErrorAlert';

const GitCommitHistory: React.FC = () => {
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  const handleSearch = async (query: string) => {
    setLoading(true);
    getCommits(query);
  };

  const getCommits = async (query: string = '') => {
    setLoading(true);
    if (query) {
      query = `?query=${query}`;
    }
    try {
      const { data } = await http.get('/commit' + query);
      if (data) {
        setCommits(data);
      }
    } catch (e: any) {
      console.error(`The following error has occurred: ${e.message}`);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
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
        {error !== undefined && (
          <ErrorAlert error={error} />
        )}
      </div>
    </>
  );
};

export default GitCommitHistory;
