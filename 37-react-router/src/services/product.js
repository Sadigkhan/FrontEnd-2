export const getData = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    return data
}
export const getSingleData = async (id) => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await res.json()
    return data
}