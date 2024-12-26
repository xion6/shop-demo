import { inject, injectable } from 'tsyringe';
import { type ShopType } from 'domain/shop/entity/Shop.ts';
import { ShopId } from 'domain/shop/value/ShopId.ts';
import { type IShopRepository } from 'application/port/out/IShopRepository.ts';


@injectable()
class ShopService {
    constructor(
        @inject('IShopRepository')
        private shopRepository: IShopRepository
    ) { }

    async getShopById(shopId: ShopId): Promise<ShopType> {
        const shop = await this.shopRepository.findById(shopId);
        return {
            id: shop.getId,
            name: shop.getName,
        };
    }
}
