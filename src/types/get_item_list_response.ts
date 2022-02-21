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

export type GetItemListResponse = {
    count: number
    unfilteredCount: number
    results: GetItemListResult[]
}
