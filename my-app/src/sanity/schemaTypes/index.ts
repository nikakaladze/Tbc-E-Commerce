import { order, orderItem, shippingAddress } from '../schemaTypes/schemas/order'
import {product } from './schemas/products'
import { productCategory } from '../schemaTypes/schemas/product-category'
import { promotionCampaign } from '../schemaTypes/schemas/promotion-campaign'
import { promotionCode } from '../schemaTypes/schemas/promotion-codes'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        promotionCode,
        promotionCampaign,


        productCategory,
        product,

        shippingAddress,
        orderItem,
        order,
    ],
}