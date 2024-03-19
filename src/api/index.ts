import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from '@medusajs/medusa/dist/api/routes/admin/products/create-product';
import {StoreGetProductsParams} from '@medusajs/medusa/dist/api/routes/store/products/list-products'
import { IsString, IsInt } from 'class-validator';

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
	@IsString()
    gender: string;
    @IsInt()
    external: boolean;
}

registerOverriddenValidators(AdminPostProductsReq);
