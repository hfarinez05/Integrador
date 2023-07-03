export default function SearchBar(props) {
  return (
    // props = { onSearch : function() }
    <div>
      <input type="search" />
      <button
        onClick={() => props.onSearch("Esto seria el ID de un personaje")}
      >
        Agregar
      </button>
    </div>
  );
}
