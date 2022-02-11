export const get_orders = (base_url: string, cookie: string, body: any) => {
    return {
        method: 'POST',
        url: `${base_url}/api/order/list`,
        data: body,
        headers: { cookie }
    }
}

export const order_get_order_id = async (
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
