import "./searchBar.css"

function SearchBar() {
  return (
    <>
      <div className="search-container">
        <input
          className="input-search"
          type="email"
          placeholder="O que você busca?"
        />
        <button className="button-search">Buscar</button>
      </div>
    </>
  );
}

export default SearchBar;
