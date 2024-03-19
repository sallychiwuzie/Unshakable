import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from '@medusajs/medusa/dist/api/routes/admin/products/create-product';
import { IsString, IsInt } from 'class-validator';

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
	@IsString()
    gender: string;
    @IsInt()
    external: boolean;
}

registerOverriddenValidators(AdminPostProductsReq);
