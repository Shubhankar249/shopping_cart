$(()=> {
    let pName=$('#productName')
    let pManu=$('#manufacturer')
    let pPrice=$('#price')

    $('#addProd').click(function() {
        addProduct(
            pName.val(), pManu.val(), pPrice.val(),
            (addedP) => window.alert("Added "+ addedP.name))
    })
})