import { Shop } from 'domain/shop/entity/Shop.ts';
import { ShopId } from 'domain/shop/value/ShopId.ts';


export interface IShopRepository {
    findById(shopId: ShopId): Promise<Shop>;
}
