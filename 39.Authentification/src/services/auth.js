import {
    API
} from "../config/axios"

export const RegisterCall = (params) => {
    let res = API.post('api/app/register', params)
    return res
}
export const LoginCall = (params) => {
    let res = API.post('api/app/login', params)
    return res
}
export const ProfileCall = () => {
    let res = API.get('api/app/profile')
    return res
}
