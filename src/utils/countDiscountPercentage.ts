const countDiscountPercentage = (oldPrice: number, price: number) => {
  return (100 - (price * 100) / oldPrice).toFixed(0)
}

export { countDiscountPercentage }
