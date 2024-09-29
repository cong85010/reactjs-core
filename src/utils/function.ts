export function formatMoney(
  amount: number,
  type = 'vi-VN',
  currency = 'VND',
): string {
  return amount.toLocaleString(type, {
    style: 'currency',
    currency,
  });
}

export function formatNumber(number: number, separator = ','): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
