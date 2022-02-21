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
