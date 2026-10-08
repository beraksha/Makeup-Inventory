function expiryState(date) {
  if (!date) return null;
  const days = Math.ceil((new Date(date) - new Date()) / 86400000);
  if (days < 0) return { label: "Expired", tone: "danger" };
  if (days <= 30) return { label: `Expires in ${days} day${days === 1 ? "" : "s"}`, tone: "warn" };
  return null;
}

export default function ProductCard({ product, onEdit, onDelete }) {
  const expiry = expiryState(product.expiryDate);

  return (
    <article className={`card ${product.category.toLowerCase()}`}>
      <header>
        <h3>{product.name}</h3>
        <p className="brand">{product.brand}</p>
      </header>

      <dl>
        <div><dt>Type</dt><dd>{product.type || "Not set"}</dd></div>
        <div><dt>Status</dt><dd>{product.status}</dd></div>
        <div><dt>Expires</dt><dd>{product.expiryDate || "Not set"}</dd></div>
      </dl>

      {expiry && <p className={`badge ${expiry.tone}`}>{expiry.label}</p>}

      <footer>
        <button type="button" className="btn small" onClick={() => onEdit(product)}>
          Edit<span className="sr-only"> {product.name}</span>
        </button>
        <button type="button" className="btn small danger" onClick={() => onDelete(product.id)}>
          Delete<span className="sr-only"> {product.name}</span>
        </button>
      </footer>
    </article>
  );
}
