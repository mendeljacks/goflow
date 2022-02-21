export interface BillingAddress {
    companyName?: any
    fullName: string
    firstName: string
    lastName: string
    attention?: any
    street1: string
    street2: string
    street3?: any
    city: string
    state: string
    zipCode: string
    country: string
    countryCode: string
    email: string
    phone: string
    phoneExtension?: any
    verified: boolean
    isResidential: boolean
    identifier?: any
    displayableCountry: string
}

export interface ShippingAddress {
    companyName?: any
    fullName: string
    firstName: string
    lastName: string
    attention?: any
    street1: string
    street2: string
    street3?: any
    city: string
    state: string
    zipCode: string
    country: string
    countryCode: string
    email: string
    phone: string
    phoneExtension?: any
    verified: boolean
    isResidential: boolean
    identifier?: any
    displayableCountry: string
}

export interface Qty {
    amount: number
    measure?: any
    units: number
}

export interface TotalPrice {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface Item {
    itemMasterItemId: number
    itemNumber: string
    lineId: string
    kitPartLineId?: any
    itemType: string
    description: string
    storeDescription: string
    qty: Qty
    totalPrice: TotalPrice
    uspsPackageType: string
    fedExPackageType: string
}

export interface OrderTotal {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShipDates {
    earliestShip?: any
    latestShip: Date
    earliestDelivery: Date
    latestDelivery: Date
    queuedUntil: Date
    storeLatestShip: Date
    storeLatestDelivery: Date
    ensureDeliveredOnSpecificDay: boolean
    requiredDeliveryDate?: any
}

export interface OrderListResult {
    orderId: string
    storeOrderNumber: string
    source: string
    storeName: string
    orderStatus: string
    tags: any[]
    shipVia: string
    shipType: string
    standardCarrierAlphaCode?: any
    trackingNumber?: any
    orderDate: Date
    expectedShipDate: Date
    shipDate: Date
    warehouse: string
    billingAddress: BillingAddress
    shippingAddress: ShippingAddress
    items: Item[]
    orderTotal: OrderTotal
    customerId: string
    qbInvoiceNumber?: any
    shipDates: ShipDates
}

export interface OrderListResponse {
    count: number
    unfilteredCount: number
    results: OrderListResult[]
}
