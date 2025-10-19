import { Brand } from '~/@types/brand';

interface ProductAttribute {
    key: string;
    name: string;
    value: string;
    _id: string;
}
interface VariantAttribute {
    key: string;
    name: string;
    value: string;
    _id: string;
}

export interface ProductVariant {
    _id: string;
    price: number;
    image: string;
    imageUrlRef: string;
    quantity: number;
    sold: number;
    sku: string;
    isActive: boolean;
    variantAttributes: VariantAttribute[];
}

export type IProductAdmin = {
    _id: string;
    name: string;
    description: string;
    images: string[];
    imageUrlRefs: string[];
    thumbnail: string;
    thumbnailUrlRef: string;
    parentSku: string;
    status: string;
    isAvailable: boolean;
    isDeleted: boolean;
    isHide: boolean;
    attributes: ProductAttribute[];
    rating: number;
    reviewCount: number;
    variationIds: ProductVariant[];
    brandId: Brand;
    priceFilter: number;
    attributeVariantForFilter: string[];
    createdAt: string;
    updatedAt: string;
};
