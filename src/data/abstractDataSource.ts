import { TProduct, Order } from "./entities";

export type TProductProp = keyof TProduct

export abstract class AbstractDataSource {

    private _products: TProduct[]
    private _categories: Set<string>

    public order: Order
    public loading: Promise<void>

    constructor() {

        this._products = []
        this._categories = new Set<string>()
        this.order = new Order()
        this.loading = this.getData()
    }

    async getProducts(sortProp: TProductProp = "id",
        category?: string): Promise<TProduct[]> {

        await this.loading;
        return this.selectProducts(this._products, sortProp, category)
    }

    protected async getData(): Promise<void> {
        this._products = []
        this._categories.clear()
        const rawData = await this.loadProducts()

        rawData.forEach(p => {
            this._products.push(p)
            this._categories.add(p.category)
        })
    }

    protected selectProducts(prods: TProduct[],
        sortProp: TProductProp, category?: string): TProduct[] {

        return prods.filter(p => category === undefined ||
            p.category === category
        ).sort((p1, p2) => p1[sortProp] < p2[sortProp] ? -1 :
            p1[sortProp] > p2[sortProp] ? 1 : 0
        )
    }

    async getCategories(): Promise<string[]> {

        await this.loading;
        return [...this._categories.values()]
    }

    protected abstract loadProducts(): Promise<TProduct[]>;

    abstract storeOrder(): Promise<number>;
}