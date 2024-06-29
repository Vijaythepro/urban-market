export interface Product {
    brandName: string;
    type: string;
    originalPrice: number;
    discountedPrice: number;
    userRating: number;
    ratingCount: number;
    percentage: number;
    leftover?: string;
    img: string;
    id: string;
}