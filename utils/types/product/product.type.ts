export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

export interface ICart {
  id: number
  userId: number
  date: Date
  products: IBaseCartProduct[]
}

export interface IBaseCartProduct {
  productId: number
  quantity: number
}

export interface ICartProduct extends IBaseCartProduct {
  title: string
  image: string
  price: number
  totalPrice: number
}
