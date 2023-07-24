import React, { useState } from 'react';
import search_icon from '../../img/icons/search-icon.svg'

type SearchBarProps = {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative mb-10">
      <input
        type="text"
        id="large-input"
        placeholder="Search by commit message"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
        name="message"
        value={query}
      ></input>
      <button
        type="submit"
        className="flex items-center justify-center absolute top-0 right-0 p-4 h-full bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800"
        onClick={handleSubmit}
      >
        <img
          className="h-6 w-6"
          src={search_icon} alt="search_icon" 
        />
      </button>
    </div>
  );
};

export default SearchBar;
