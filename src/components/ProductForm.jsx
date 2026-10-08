import { useEffect, useRef, useState } from "react";

const EMPTY = { name: "", brand: "", category: "Skincare", type: "", expiryDate: "", status: "New" };

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function ProductForm({ product, onSave, onClose }) {
  const dialogRef = useRef(null);
  const [form, setForm] = useState({ ...EMPTY, ...product });

  // <dialog> gives us focus trapping and Escape-to-close for free.
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, name: form.name.trim(), brand: form.brand.trim() });
  };

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose} aria-labelledby="form-title">
      <form onSubmit={handleSubmit}>
        <h2 id="form-title">{form.id ? "Edit product" : "Add product"}</h2>

        <Field label="Name">
          <input name="name" value={form.name} onChange={handleChange} required />
        </Field>
        <Field label="Brand">
          <input name="brand" value={form.brand} onChange={handleChange} required />
        </Field>
        <div className="row">
          <Field label="Category">
            <select name="category" value={form.category} onChange={handleChange}>
              <option>Makeup</option>
              <option>Skincare</option>
            </select>
          </Field>
          <Field label="Type (serum, lipstick...)">
            <input name="type" value={form.type} onChange={handleChange} />
          </Field>
        </div>
        <div className="row">
          <Field label="Expiry date">
            <input type="date" name="expiryDate" value={form.expiryDate} onChange={handleChange} />
          </Field>
          <Field label="Status">
            <select name="status" value={form.status} onChange={handleChange}>
              <option>New</option>
              <option>In use</option>
              <option>Finished</option>
            </select>
          </Field>
        </div>

        <div className="actions">
          <button type="button" className="btn" onClick={() => dialogRef.current.close()}>Cancel</button>
          <button type="submit" className="btn primary">Save product</button>
        </div>
      </form>
    </dialog>
  );
}
