export const loginUser = async (email, password) => {
  if (email === "manager@example.com" && password === "pass") {
    return { role: "Manager", token: "abc123", theme: "light", name: "Manager" };
  }
  if (email === "store@example.com" && password === "pass") {
    return { role: "Store Keeper", token: "xyz789", theme: "light", name: "Store Keeper" };
  }
  throw new Error("Invalid credentials");
};

export const getProducts = async () => {
  return [
    { id: 1, name: "Rice", category: "Grain", quantity: 100, price: 20 },
    { id: 2, name: "Wheat", category: "Grain", quantity: 80, price: 18 }
  ];
};

export const saveProduct = async (product) => {
  return { ...product, id: Date.now() };
};