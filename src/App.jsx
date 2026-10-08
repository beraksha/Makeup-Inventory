import { useMemo, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import sampleProducts from "./data/sampleProducts";
import FilterBar from "./components/FilterBar";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

export default function App() {
  const [products, setProducts] = useLocalStorage("makeup-inventory:products", sampleProducts);
  const [filters, setFilters] = useState({ category: "All", search: "", sort: "name" });
  const [editing, setEditing] = useState(null); // null = closed, {} = new product

  const visible = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return products
      .filter((p) => filters.category === "All" || p.category === filters.category)
      .filter((p) => !query || `${p.name} ${p.brand} ${p.type}`.toLowerCase().includes(query))
      .sort((a, b) => {
        if (filters.sort === "expiry") return (a.expiryDate || "9999").localeCompare(b.expiryDate || "9999");
        if (filters.sort === "added") return b.addedAt - a.addedAt;
        return a.name.localeCompare(b.name);
      });
  }, [products, filters]);

  const saveProduct = (product) => {
    setProducts((prev) =>
      product.id
        ? prev.map((p) => (p.id === product.id ? product : p))
        : [...prev, { ...product, id: Date.now(), addedAt: Date.now() }]
    );
    setEditing(null);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="page">
      <header className="top">
        <div>
          <h1>My shelf</h1>
          <p className="muted" aria-live="polite">
            Showing {visible.length} of {products.length} products
          </p>
        </div>
        <button type="button" className="btn primary" onClick={() => setEditing({})}>
          Add product
        </button>
      </header>

      <FilterBar filters={filters} onChange={setFilters} />

      {visible.length === 0 ? (
        <p className="empty">No products match. Clear the search or add a new product.</p>
      ) : (
        <section className="grid" aria-label="Products">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onEdit={setEditing} onDelete={deleteProduct} />
          ))}
        </section>
      )}

      {editing && <ProductForm product={editing} onSave={saveProduct} onClose={() => setEditing(null)} />}
    </main>
  );
}
