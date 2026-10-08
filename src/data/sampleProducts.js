const now = Date.now();

const sampleProducts = [
  { id: 1, name: "Hyaluronic Acid Serum", brand: "The Ordinary", category: "Skincare", type: "Serum", expiryDate: "2027-04-20", status: "In use", addedAt: now - 6 },
  { id: 2, name: "Vintage Rose", brand: "KIKO Milano", category: "Makeup", type: "Lipstick", expiryDate: "2027-09-01", status: "New", addedAt: now - 5 },
  { id: 3, name: "Hydrating Cleanser", brand: "CeraVe", category: "Skincare", type: "Cleanser", expiryDate: "2026-10-25", status: "In use", addedAt: now - 4 },
  { id: 4, name: "Soft Matte Foundation", brand: "NARS", category: "Makeup", type: "Foundation", expiryDate: "2026-03-01", status: "Finished", addedAt: now - 3 },
  { id: 5, name: "Daily Sunscreen SPF 50", brand: "Biore", category: "Skincare", type: "Sunscreen", expiryDate: "2027-12-15", status: "New", addedAt: now - 2 },
  { id: 6, name: "Volume Mascara", brand: "Maybelline", category: "Makeup", type: "Mascara", expiryDate: "2027-01-10", status: "In use", addedAt: now - 1 },
];

export default sampleProducts;
