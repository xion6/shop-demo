import { ShopId } from 'domain/shop/value/ShopId.ts';


export type ShopType = {
    id: ShopId;
    name: string;
}

export class Shop {
    private constructor(
        private id: ShopId,
        private name: string,
    ) { }

    // Factory method
    static create(props: ShopType): Shop {
        return new Shop(props.id, props.name);
    }

    get getId(): ShopId {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }
}
