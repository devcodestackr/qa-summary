export function hitungBungaAngsuran(nominal, lamaBulan, bunga) {
  const angsuran = nominal / lamaBulan + nominal * bunga;
  return Math.round(angsuran).toLocaleString("id-ID");
}

export function formatedCurrencyID(nominal) {
  if (typeof nominal !== "number") {
    nominal = parseFloat(nominal);
  }
  return nominal.toLocaleString("id-ID");
}
