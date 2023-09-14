export function rupiahCurrency(value: number): string {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  return formatter.format(value)
}

export function usdCurrency(value: number): string {
  const formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(value)
}
