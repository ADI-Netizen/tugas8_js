function tampilObjek() {
    var dell = {
        type: "laptop",
        harga: 1500000,
        warna: "silver"
    }
    console.log("Object Awal")
    console.log(dell)
    console.log("Object Perubahan")
    dell.harga = 8650000
    dell.warna = "Hijau Metallic"
    console.log(dell)
}

tampilObjek()