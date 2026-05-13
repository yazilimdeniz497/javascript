let Sipariş1={
    "id":101,
    "ad":"iphone 11",
    "marka":"apple",
    "renk": "gold",
    "fiyat":25000
}
let Sipariş2={
    "id":102,
    "ad":"iphone 12",
    "marka":"apple",
    "renk": "beyaz",
    "fiyat":30000
}
let Sipariş3={
    "id":103,
    "ad":"samsung 13",
    "marka":"samsung",
    "renk": "siyah",
    "fiyat":40000
}
let kdv=0.18;
let kdvliurun1fiyat=Sipariş1.fiyat+(kdv*Sipariş1.fiyat)
console.log(kdvliurun1fiyat)
let kdvliurun2fiyat=Sipariş2.fiyat+(kdv*Sipariş2.fiyat)
console.log(kdvliurun2fiyat)
let kdvliurun3fiyat=Sipariş3.fiyat+(kdv*Sipariş3.fiyat)
console.log(kdvliurun3fiyat)

let toplamfiyat=Sipariş1.fiyat+Sipariş2.fiyat+Sipariş3.fiyat;
let toplamkdvlifiyat=toplamfiyat+(toplamfiyat*kdv)
console.log(toplamkdvlifiyat);
