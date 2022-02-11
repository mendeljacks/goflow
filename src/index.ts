export const get_orders = (base_url: string, cookie: string, body: any) => {
    return {
        method: 'POST',
        url: `${base_url}/api/order/list`,
        data: body,
        headers: { cookie }
    }
}

export const order_get_order_id = (
    base_url: string,
    cookie: string,
    params: { orderId: number }
) => {
    return {
        method: 'GET',
        url: `${base_url}/api/order/get`,
        params: params,
        headers: { cookie }
    }
}

export type GetItemListResult = {
    itemId: number
    itemNumber: string
    isActive: boolean
    tags: any[]
    name: string
    purchaseDescription: string
    cost: number
    salesPrice: number
    onHandEstimate: number
    dropShipVendorQuantityOnHand: number
    itemType: string
    upcNumber?: any
    brand: string
    category: string
    isKitItem: boolean
    isPurchasable: boolean
    vendorInventory: number
    unitsOfMeasure: any[]
}

type GetItemListResponse = {
    count: number
    unfilteredCount: number
    results: GetItemListResult[]
}

export const get_item_list = async (
    base_url: string,
    cookie: string,
    params: {
        $inlinecount: 'allpages'
        filter: {
            loadInactive: boolean
            isActive: boolean
            brand: string[]
            buyer: string[]
            manufacturer: string[]
            'Vendors.Name': string[]
            category: string[]
            'Warehouses.Warehouse': string[]
            'tags.Id': string[]
        }
        itemNumber?: string
        $top: number
        $skip: number
    },
    axios
): Promise<{ data: GetItemListResponse }> => {
    return axios({
        method: 'GET',
        url: `${base_url}/api/item/getItemList`,
        params: params,
        headers: { cookie }
    })
}
