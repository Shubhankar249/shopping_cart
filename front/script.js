
$(function () {
    let productList=$('#product-list')
    fetchProducts((products) => {
        productList.empty()
        for (let p of products) {
            productList.append(createProductCard(p))
        }
    })
})