export interface Address {
    companyName: string
    attention?: any
    phoneNumber: string
    phoneExtension?: any
    fax?: any
    email: string
    url?: any
    address1: string
    address2?: any
    city: string
    state: string
    zipCode: string
    country: string
}

export interface NegativeInventory {
    allowedForOrders: boolean
    allowedForTransfers: boolean
}

export interface GetWarehouseListResult {
    id: string
    status: string
    name: string
    warehouseType: string
    warehouseId: string
    useForInventorySplit: boolean
    address: Address
    negativeInventory: NegativeInventory
    usesInventoryLocations: boolean
    canReceiveWithoutPO: boolean
    belongsToStoreName?: any
    orderSourceMap: any[]
    transferShippingAccounts: any[]
}

export interface ShippingInformation {
    companyName: string
    attention?: any
    phoneNumber: string
    phoneExtension?: any
    fax?: any
    email: string
    url?: any
    address1: string
    address2?: any
    city: string
    state: string
    zipCode: string
    country: string
}

export interface Vacation {
    period?: any
    sendZero: boolean
    lastRun?: any
}

export interface DefaultInventorySplitOptions {
    amount: number
    manual: boolean
    maxQuantity: number
    minQuantity: number
    safetyLevel: number
    leadTime: number
    sources: any[]
    vacation: Vacation
    fullAllocationRequestedAt?: any
}

export interface FulfillmentWarehous {
    warehouseId: string
    shipsTo: any[]
}

export interface ShippingAccount {
    carrier: string
    account: string
    warehouse: string
    checkForResidentialAddress: boolean
}

export interface AccountingSettings {
    qbCompanyName?: any
    storeQbCustomerName?: any
    storeCustomerListId?: any
    storeAmazonFbaQbCustomerName?: any
    sendInvoiceToQb: boolean
    invoicePoNumber: string
    accountingInvoiceDate: string
}

export interface RemovalTransfers {
    autoImport: boolean
    toWarehouseId?: any
    startAt?: any
}

export interface GetAllStoresResult {
    id: string
    storeName: string
    storeType: string
    storeStatus: string
    showInFiltersWhenInactive: boolean
    externalWarehouseId: string
    defaultCurrency: string
    shippingInformation: ShippingInformation
    defaultInventorySplitOptions: DefaultInventorySplitOptions
    warehouses?: any
    legacyFulfillmentWarehouses: string[]
    fulfillmentWarehouses: FulfillmentWarehous[]
    thirdPartyShippingAccounts: any[]
    useThirdPartyShipping: boolean
    enforceThirdPartyShipping: boolean
    reviewAllOrders: boolean
    shippingAccounts: ShippingAccount[]
    packingSlipId: string
    billOfLadingId?: any
    cartonLabelId?: any
    generatePackingSlip: boolean
    printStorePackingSlip: boolean
    autoImportOrders: boolean
    autoImportStoreFulfilledOrders: boolean
    autoImportListings: boolean
    packingSlipCopies: number
    packingSlipLtlCopies: number
    billOfLadingCopies: number
    billOfLadingLtlCopies: number
    cartonLabelCopies: number
    cartonLabelLtlCopies: number
    accountingSettings: AccountingSettings
    recordSerialNumbers: boolean
    putOrdersInAwaitingPickupWhenShipping: boolean
    sendShipmentTrackingForNonLtlOrdersInPickup: boolean
    sendShipmentConfirmationToStore: boolean
    useStoreAddressForShippingReturnAddress: boolean
    captureFunds: boolean
    removalTransfers: RemovalTransfers
    registeredWarehouses: any[]
}
