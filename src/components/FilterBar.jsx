const CATEGORIES = ["All", "Makeup", "Skincare"];

export default function FilterBar({ filters, onChange }) {
  const update = (patch) => onChange({ ...filters, ...patch });

  return (
    <div className="filters">
      <div className="tabs" role="group" aria-label="Category">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className="tab"
            aria-pressed={filters.category === category}
            onClick={() => update({ category })}
          >
            {category}
          </button>
        ))}
      </div>

      <label className="field inline">
        <span className="sr-only">Search products</span>
        <input
          type="search"
          placeholder="Search name, brand or type"
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
        />
      </label>

      <label className="field inline">
        <span className="sr-only">Sort by</span>
        <select value={filters.sort} onChange={(e) => update({ sort: e.target.value })}>
          <option value="name">Name (A to Z)</option>
          <option value="expiry">Expiry date (soonest)</option>
          <option value="added">Recently added</option>
        </select>
      </label>
    </div>
  );
}
