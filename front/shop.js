function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}
function addProduct(name, manu, price, done) {
    $.post('/api/products', {
        name:name,
        manufacturer:manu,
        price:price
    }, (data) => done(data))
}

function createProductCard(product) {
    return $(`        
        <div class="col-4 card mx-2 p-4">
                <h4 class="product-name">${product.name}</h4>
                <div class="product-manufacturer"><em>${product.manufacturer}</em></div>
                <div class="row">
                    <div class="col m-3 p-3"><strong>Rs. ${product.price}</strong></div>
                    <button class="col btn btn-primary m-3">Buy</button>
                </div>
    `)
}


