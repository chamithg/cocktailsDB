import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="" className="name">
            Search your favourite cocktail!!
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
