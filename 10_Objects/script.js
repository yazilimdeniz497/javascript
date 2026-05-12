let kullaniciA={
    "ad":"Sadik",
    "soyad":"turan",
    "yas":35,
    "adres":{
        "il":"kocaeli",
        "ilçe":"izmit"
    },
    "hobiler":["kitap okumak","müzik dinlemek"]
}
let kullaniciB={
    "ad":"Deniz",
    "soyad":"Doğruel",
    "yas":24,
    "adres":{
        "il":"Hatay",
        "ilçe":"Defne"
    },
    "hobiler":["kitap okumak","müzik dinlemek"]
}
let sonuc;
sonuc=kullaniciA.ad
sonuc=kullaniciA.soyad
sonuc=kullaniciA.yas
sonuc=kullaniciA.hobiler[0]
sonuc=kullaniciA.adres.il
let kullanicilar=[kullaniciA,kullaniciB];
let sonuc1=kullanicilar[1].ad;

console.log(sonuc1)