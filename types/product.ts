/* eslint-disable import/no-extraneous-dependencies */
import { OutputData } from '@editorjs/editorjs'

export interface IShipSpec {
  launch: string
  cabin: number
  shell: string
  trip: string
  admin: string
}

export enum TypeProduct {
  SHIP = 'ship',
}

export interface ProductRes {
  _id: string
  defaultPrice: number
  category: string
  title: string
  address: string
  mapLink: string
  mapIframeLink: string
  spec: {
    ship?: IShipSpec
  }
  shortDescription: string[]
  features: string[]
  longDescription: OutputData
  slug: string
  numReviews: number
  scoreReview: number
  typeProduct: TypeProduct
}
