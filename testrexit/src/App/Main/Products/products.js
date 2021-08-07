const products = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:64,
        price:1000,
        image:"/images/iPhone.png",
        fullDescription:"<div class='red'>Description iPhone X</div>"
    },
    {
        id:2,
        name:"iPhone XS",
        //description:"This is iPhone XS",
        type:"phone",
        capacity:256,
        price:1230,
        image:"/images/iPad.png"
    },
    {
        id:3,
        name:"iPhone XR",
        description:"This is iPhone XR",
        type:"phone",
        capacity:512,
        price:1300,
        image:"/images/iPhone.png"
    },
    {
        id:4,
        name:"iPhone 11",
        description:"This is iPhone 11",
        type:"phone",
        capacity:128,
        price:1111,
        image:"/images/iPad.png"
    },
]

export const getProductsObject = array => array.reduce((obj, product) => ({
    ...obj,
    [product.id]:product
}), {})

export default products