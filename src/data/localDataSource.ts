import { AbstractDataSource } from "./abstractDataSource";
import { TProduct } from "./entities";


export class LocalDataSource extends AbstractDataSource{

    protected loadProducts(): Promise<TProduct[]> {
        return Promise.resolve([
            {id:1,name:"p1", category:"Watersports",
                description:"p1 (watersports)",price:3
            },
            {id:2,name:"p2", category:"Watersports",
                description:"p2 (watersports)",price:4
            },
            {id:3,name:"p3", category:"Running",
                description:"p3 (Running)",price:5
            },
            {id:4,name:"p4", category:"Chess",
                description:"p4 (Chess)",price:6
            },
        ])
    }

    storeOrder(): Promise<number> {
        console.log("Store Order")
        console.log(JSON.stringify(this.order))
        return Promise.resolve(1)
    }
}