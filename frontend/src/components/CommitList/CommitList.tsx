import React from 'react';
import { GithubCommit } from '../../interfaces/github-commit.interface';

type CommitListProps = {
  commits: GithubCommit[];
}

const CommitList: React.FC<CommitListProps> = ({ commits }) => {
  return (
    <ul className="relative border-l border-gray-200 dark:border-gray-700">
      {commits.map((commit) => (
        <li key={commit.sha} className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src={commit.author.avatar_url}
              alt="Logo de Github"
            />
          </span>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="justify-between items-center mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                {new Date(commit.commit.author.date).toLocaleDateString()} |{" "}
                {new Date(commit.commit.author.date).toLocaleTimeString()}
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                <a href={commit.author.html_url}>
                  {" "}
                  {commit.author.login}{" "}
                </a>
                <span> has committed on</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  <a href="https://github.com/Franccesco1907">
                    Repository
                  </a>
                </span>
              </div>
            </div>
            <a href={commit.html_url}>
              <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                ({commit.sha.substring(0, 7)}) {commit.commit.message}
              </div>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommitList;
