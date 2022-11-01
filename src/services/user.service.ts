import { $api } from '~/api'
import { API } from '~/constants/routes'
import { AxiosResponse } from 'axios'
import { ICart } from '~/interfaces/cart.interface'

class UserService {
  public async addToCart(
    cartProduct: ICart
  ): Promise<AxiosResponse<{ cart: ICart[] }>> {
    return $api.patch(API.user_cart_add, cartProduct)
  }

  public async removeFromCart(
    productId: string
  ): Promise<AxiosResponse<{ cart: ICart[] }>> {
    return $api.patch(API.user_cart_remove, { productId })
  }

  public async addToCompare(
    productId: string
  ): Promise<AxiosResponse<{ compare: string[] }>> {
    return $api.patch(API.user_compare_add, { productId })
  }

  public async removeFromCompare(
    productId: string
  ): Promise<AxiosResponse<{ compare: string[] }>> {
    return $api.patch(API.user_compare_remove, { productId })
  }

  public async addToWishlist(
    productId: string
  ): Promise<AxiosResponse<{ wishlist: string[] }>> {
    return $api.patch(API.user_wishlist_add, { productId })
  }

  public async removeFromWishlist(
    productId: string
  ): Promise<AxiosResponse<{ wishlist: string[] }>> {
    return $api.patch(API.user_wishlist_remove, { productId })
  }

  public async addProductReview(review: {
    comment: string
    productId: string
  }): Promise<AxiosResponse<unknown>> {
    return $api.patch(API.products_add_review, { ...review })
  }
}

export default new UserService()
