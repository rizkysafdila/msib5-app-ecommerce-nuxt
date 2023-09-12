// export interface IProduct {
//   id: number
//   title: string
//   description: string
//   price: number
//   discountPercentage: number
//   rating: number
//   stock: number
//   brand: string
//   category: string
//   thumbnail: string
//   image?: string[]
// }

export interface IProduct {
  label: string
  title: string
  price: number
  discount: number
  value: number
  fileName: string
}
