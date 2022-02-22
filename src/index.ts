import { GetAllStoresResult, GetWarehouseListResult } from './types/get_all_stores_response'
import { GetInventoryByWarehouseResponse } from './types/get_inventory_by_warehouse_response'
import { GetItemListResponse } from './types/get_item_list_response'
import { OrderListResponse } from './types/get_order_list_response'
import { GetOrderResponse } from './types/get_order_response'

export const get_orders = (base_url: string, cookie: string, body: any) => {
    return {
        method: 'POST',
        url: `${base_url}/api/order/list`,
        data: body,
        headers: { cookie }
    }
}
export const get_order = async (
    base_url: string,
    cookie: string,
    params: { orderId: number },
    axios
): Promise<{ data: GetOrderResponse }> => {
    return axios({
        method: 'GET',
        url: `${base_url}/api/order/get`,
        params,
        headers: { cookie }
    })
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

export const order_list = (
    base_url: string,
    cookie: string,
    data: {
        $inlinecount: 'allpages'
        filter: {
            storeName: any
            warehouse: any
            orderStatus: any
            itemNumber: []
            shipVia: []
            shipType: []
            standardCarrierAlphaCode: []
            pickListNumber: []
            orderId: []
            orderDate_From: ''
            orderDate_To: ''
            'tags.Id': []
            'systemRequiredCorrections.Type': []
            'shippingAddress.CountryCode': []
            'shippingAddress.State': []
            ZipCodeSearch: []
        }
        searchTerm: string
        take: number
        skip: number
        orderby: string
    },
    axios
): Promise<{ data: OrderListResponse }> => {
    return axios({
        method: 'POST',
        url: `${base_url}/api/order/list`,
        data: { ...data, filter: JSON.stringify(data.filter) },
        headers: { cookie }
    })
}

export const warehouse_list = async (
    base_url: string,
    cookie: string,
    params: {},
    axios
): Promise<{ data: GetWarehouseListResult[] }> => {
    return axios({
        method: 'GET',
        url: `${base_url}/api/warehouse/GetWarehouseList`,
        params: params,
        headers: { cookie }
    })
}

export const get_all_stores = async (
    base_url: string,
    cookie: string,
    params: {},
    axios
): Promise<{ data: GetAllStoresResult[] }> => {
    return axios({
        method: 'GET',
        url: `${base_url}/api/store/all`,
        params: params,
        headers: { cookie }
    })
}

export const get_report = async (
    base_url: string,
    cookie: string,
    params: {
        reportFileName: string
    },
    axios
): Promise<{ data: any }> => {
    const endpoints = {
        pdf: 'getPdf',
        report: 'getReportAsPdf',
        json: 'getImageLabelToPdf',
        zpl: 'getZplAsPdf'
    }

    const extension = params.reportFileName ? params.reportFileName.split('.').pop() : null

    return axios({
        method: 'GET',
        url: `${base_url}/api/report/${endpoints[extension]}`,
        params: params,
        headers: { cookie }
    })
}
