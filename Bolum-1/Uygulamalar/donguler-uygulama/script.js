let sayilar=[1,5,7,15,4,8,12,3,25]
//1) for(let sayi of sayilar){
//     console.log(Math.pow(sayi,2));
// }
//2) for(let sayi of sayilar){
//     if(sayi%5==0){
//         console.log(sayi);
//     }
//3) let toplam=0;
// for(let sayi of sayilar){
//     if(sayi%2==0){
//         toplam+=sayi;
        
        
//     }
// }console.log(toplam);
let urunler=["iphone 12","samsung s22","iphone 13","samsung s23"];
//4) for (let urun of urunler){
//     console.log(urun.toUpperCase());
// }
//5) let count=0
// for (let urun of urunler){
//   if( urun.startsWith("samsung")){
//     count++;
//   }
// }console.log(count);
let ogrenciler={
    101:{
    "ad":"yiğit",
    "soyad":"bilgi",
    "notlar":[60,70,60]
    },
    102:{


    "ad":"ada",
    "soyad":"bilgi",
    "notlar":[80,70,80]
    },

103:{
    "ad":"çınar",
    "soyad":"turan",
    "notlar":[70,70,60]
    }
}
let ortalama1=(ogrenciler[101].notlar[0]+ogrenciler[101].notlar[1]+ogrenciler[101].notlar[2])/3;
console.log(ortalama1)
let ortalama2=(ogrenciler[102].notlar[0]+ogrenciler[102].notlar[1]+ogrenciler[102].notlar[2])/3;
console.log(ortalama2)
let ortalama3=(ogrenciler[103].notlar[0]+ogrenciler[103].notlar[1]+ogrenciler[103].notlar[2])/3;
console.log(ortalama3)
let genelortalama=((ogrenciler[101].notlar[0]+ogrenciler[101].notlar[1]+ogrenciler[101].notlar[2])+(ogrenciler[102].notlar[0]+ogrenciler[102].notlar[1]+ogrenciler[102].notlar[2])+(ogrenciler[103].notlar[0]+ogrenciler[103].notlar[1]+ogrenciler[103].notlar[2])/9);
console.log(genelortalama)
