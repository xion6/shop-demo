import { ShopId } from 'domain/shop/value/ShopId.ts';
import { ReviewId } from 'domain/review/value/ReviewId.ts';


type ReviewType = {
    id: ReviewId;
    rating: number;
    comment: string
    shopId: ShopId;
}

class Review {
    private constructor(
        private id: ReviewId,
        private rating: number,
        private comment: string,
        private ShopId: ShopId
    ) { }

    // Factory method
    static create(props: ReviewType): Review {
        return new Review(props.id, props.rating, props.comment, props.shopId);
    }

    get getRating(): number {
        return this.rating;
    }
}
