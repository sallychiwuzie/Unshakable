export default async function () {
	const imports = (await import(
		'@medusajs/medusa/dist/api/routes/store/products/index'
	)) as any;
	imports.allowedStoreProductsFields = [
		...imports.allowedStoreProductsFields,
		'gender',
		'is_external',
	];
	imports.defaultStoreProductsFields = [
		...imports.defaultStoreProductsFields,
		'gender',
		'is_external',
	];
}
