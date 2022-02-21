import { ShipDates } from './get_order_list_response'

export interface Store {
    id: number
    name: string
    channel: string
}

export interface Tag {
    id: string
    name: string
    color: string
}

export interface Confirmation {
    confirmedAt?: any
}

export interface ItemsInBox {
    lineId: string
    itemNumber: string
    itemMasterItemId: number
    storeSku: string
    kitPartLineId?: any
    quantity: number
}

export interface ShipmentBox {
    carrier: string
    shipType: string
    trackingNumber: string
    cost: string
    insuredValue: number
    deliveryConfirmationOption?: any
    pounds: string
    ounces: string
    height: string
    width: string
    length: string
    itemsInBox: ItemsInBox[]
}

export interface ShippingCharge {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingCost {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingFeeToSeller {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingTax {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface SalesTaxAmount {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface OtherCharge {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface DiscountAmountTotal {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface OrderSubTotal {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface OrderTotal {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface PaymentFee {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface Qty {
    amount: number
    measure?: any
    units: number
}

export interface Price {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface GroupItemPrice {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface DiscountAmount {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface AvgCost {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface Tax {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingCharge2 {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingFeeToSeller2 {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface ShippingTax2 {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface Commission {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface TotalPrice {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface GroupItemTotalPrice {
    amount: number
    baseAmount: number
    currencyCode: string
    baseCurrencyCode: string
}

export interface Item {
    lineId: string
    itemNumber: string
    itemMasterItemId: number
    barCodeNumber?: any
    upcNumber: string
    manufacturerPartNumber: string
    itemType: string
    storeSku: string
    storeItemId: string
    storeOrderItemId: string
    description: string
    storeDescription: string
    unitOfMeasure?: any
    qty: Qty
    price: Price
    groupItemPrice: GroupItemPrice
    discountAmount: DiscountAmount
    avgCost: AvgCost
    tax: Tax
    shippingCharge: ShippingCharge2
    shippingFeeToSeller: ShippingFeeToSeller2
    shippingTax: ShippingTax2
    commission: Commission
    totalPrice: TotalPrice
    groupItemTotalPrice: GroupItemTotalPrice
    okToPick: boolean
    qtyToPick: number
    qtyPicked: number
    qtyToShip: number
    amazonCancelReason?: any
    kitPart: boolean
    kitPartItemNumber?: any
    kitPartLineId?: any
    expirationDate?: any
    customizationText?: any
}

export interface Currency {
    code: string
    exchangeRate: number
    exchangeRateAtTime: Date
}

export interface OrderReport {
    name: string
    type: string
    path: string
    created: Date
}

export interface ShipmentInsurance {
    insure: boolean
    value: number
}

export interface ThirdPartyShippingInformation {
    companyName?: any
    address?: any
    city?: any
    state?: any
    zipCode?: any
    countryCode: string
    accountNumber: string
    checkForResidentialAddress: boolean
}

export interface ShipmentRouting {
    requestId?: any
    requested: boolean
    requestedAt?: any
    timesRequested: number
    request?: any
    responded: boolean
    response?: any
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
export interface GetOrderResponse {
    id: string
    orderId: number
    storeName: string
    source: string
    sourceType?: any
    store: Store
    customSystemOrder: boolean
    fulfillmentChannel: string
    fulfillByFulfillmentCenter: boolean
    fulfillmentCenterOrderId?: any
    fulfilledByStore: boolean
    storeOrderId: string
    storeOrderNumber: string
    poNumber: string
    orderStatus: string
    tags: Tag[]
    orderDate: Date
    shipDate: Date
    customerId: string
    storeCustomerId?: any
    isGift: boolean
    isPoBox: boolean
    confirmation: Confirmation
    billingAddress: BillingAddress
    shippingAddress: ShippingAddress
    shipVia: string
    carrierRequiredByStore?: any
    storeShipServiceDescription?: any
    shipType: string
    standardCarrierAlphaCode: string
    trackingNumber: string
    trackingNumbers: string[]
    wastedTrackingNumbers: any[]
    shipmentBoxes: ShipmentBox[]
    shippingCharge: ShippingCharge
    shippingCost: ShippingCost
    shippingFeeToSeller: ShippingFeeToSeller
    shippingTax: ShippingTax
    salesTaxAmount: SalesTaxAmount
    otherCharge: OtherCharge
    salesTaxPercent: number
    salesTaxState?: any
    discountAmountTotal: DiscountAmountTotal
    discountPercent: number
    orderSubTotal: OrderSubTotal
    orderTotal: OrderTotal
    paymentMethod?: any
    paymentId?: any
    paymentFee: PaymentFee
    pickListNumber: string
    pickListCheckedOut: boolean
    note?: any
    orderNotes: any[]
    addressChecked: boolean
    addressOk: boolean
    addressMatchHash?: any
    addressOverrideHash?: any
    items: Item[]
    systemRequiredCorrections: any[]
    okForQb: boolean
    warehouse: string
    warehouseId: string
    currency: Currency
    orderReports: OrderReport[]
    onHoldReasons?: any
    cancelNote?: any
    useThirdPartyShipping: boolean
    shipmentInsurance: ShipmentInsurance
    thirdPartyShippingInformation: ThirdPartyShippingInformation
    shippingReferenceNumber1: string
    shippingReferenceNumber2: string
    returns: any[]
    hasReturns: boolean
    expectedShipDate: Date
    shipmentRouting: ShipmentRouting
    invoiceNumber?: any
    qbInvoiceNumber?: any
    qbSalesOrderNumber?: any
    signatureRequired: boolean
    packageType?: any
    subPackageType?: any
    shipDates: ShipDates
    reserveInventory: boolean
    originalOrderId: number
    ratesShopped: boolean
    dutiesPaidBy: string
    requestedShipmentSentToStore: boolean
}
