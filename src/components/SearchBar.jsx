import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`You want to search images for ${searchTerm}`);
    onSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <header className="bg-stone-800 text-stone-100 w-full h-32 flex items-center justify-center">
      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <div className="px-8 py-4 border-2 border-orange-600">
          <label htmlFor="inputTerm" className="text-2xl ">
            Search Images{" "}
          </label>
          <input
            className="px-4 py-2 rounded-sm text-stone-200   text-lg font-bold outline-none border-2 border-stone-50 bg-stone-700"
            type="text"
            id="inputTerm"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <p className="text-blue-700">{searchTerm}</p>
        </div>

        <button
          type="submit"
          className="bg-orange-600 px-4 py-2 rounded-sm border-none outline-none  hover:bg-orange-400 transition-all duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
