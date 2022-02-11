import * as memoizee from 'memoizee'

export type Auth = { user_name: string; password: string; subdomain: string }
const safety_margin = 10000
export const auth_to_cookie = memoizee(
    async (auth: Auth, axios) => {
        const login_response = await axios({
            method: 'POST',
            url: `${auth_to_base_url(auth)}/Account/PostLogin`,
            data: {
                userName: auth.user_name,
                password: auth.password
                // subdomain: auth.subdomain
            }
        })

        const headers = login_response.headers || {}
        const set_cookie = headers['set-cookie'] || []
        const cookie_head = set_cookie[0] || ''
        const cookie_head_split = cookie_head.split(';')
        const cookie_head_split_0 = cookie_head_split[0] || ''
        const cookie = cookie_head_split_0
        return cookie
    },
    { promise: true, maxAge: 31536000 - safety_margin, primitive: true }
)

export const auth_to_base_url = (auth: Auth): string => {
    return `https://${auth.subdomain}.goflow.com`
}

export const login = async (auth: Auth) => {
    return auth_to_cookie(auth)
}
