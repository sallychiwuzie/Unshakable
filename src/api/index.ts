import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from '@medusajs/medusa/dist/api/routes/admin/products/create-product';
import { IsString, IsBoolean } from 'class-validator';

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
	@IsString()
    gender: string;
    @IsBoolean()
    is_external: boolean;
}

registerOverriddenValidators(AdminPostProductsReq);
