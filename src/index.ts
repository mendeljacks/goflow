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

type WarehouseInventoryInfo = {
    warehouseId: string
    warehouseName: string
    quantityOnHand: number
    quantityInTransit: number
    quantityOnSO: number
    quantityOnPO: number
    available: number
    unfulfillableQuantity: number
    bin?: any
    aisle?: any
}

type VendorInventory = {
    vendor: string
    vendorId: number
    itemNumber: string
    quantity: number
    cost: number
    lastUpdated: Date
    expirationDate?: any
}

type GetInventoryByWarehouseResponse = {
    itemMasterId?: any
    itemNumber?: any
    itemId: number
    available: number
    onHand: number
    inTransit: number
    onPo: number
    onSo: number
    vendor: number
    warehouseInventoryInfo: WarehouseInventoryInfo[]
    vendorInventory: VendorInventory[]
}

export const get_inventory_by_warehouse = async (
    base_url: string,
    cookie: string,
    params: {
        itemNumber: string
        warehouseId: string
    },
    axios
): Promise<{ data: GetInventoryByWarehouseResponse }> => {
    return axios({
        method: 'GET',
        url: `${base_url}/api/item/getInventoryByWarehouses`,
        params: params,
        headers: { cookie }
    })
}

export const post_inventory_adjustment = (
    base_url: string,
    cookie: string,
    data: {
        referenceNumber: string
        warehouse: string
        warehouseId: string
        notes: string[]
        items: {
            itemNumber: string
            cost?: number
            quantity: string
        }[]
    },
    axios
): Promise<{ data: string }> => {
    return axios({
        method: 'POST',
        url: `${base_url}/api/inventoryAdjustment/adjust`,
        data: data,
        headers: { cookie }
    })
}
