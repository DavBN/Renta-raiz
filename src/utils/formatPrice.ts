export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-COP", {
    style: "currency",
    currency: "COP",
  });
}
