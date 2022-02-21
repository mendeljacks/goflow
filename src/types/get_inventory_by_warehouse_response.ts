export type WarehouseInventoryInfo = {
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

export type VendorInventory = {
    vendor: string
    vendorId: number
    itemNumber: string
    quantity: number
    cost: number
    lastUpdated: Date
    expirationDate?: any
}

export type GetInventoryByWarehouseResponse = {
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
