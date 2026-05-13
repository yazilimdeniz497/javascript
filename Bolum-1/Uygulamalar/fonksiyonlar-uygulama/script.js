//1) function kelimeYazdir(kelime,tekrarsayisi){
//     for(let i=1;i<=tekrarsayisi;i++){
//         console.log(kelime);
//     }
// }
// kelimeYazdir("merhaba",2)
// 2) function alanCevreHesapla(kisakenar,uzunkenar){
//     let alan=kisakenar*uzunkenar;
//     let cevre=(kisakenar+uzunkenar)*2;
//     console.log(`Alan:${alan}`);
//     console.log(`Çevre:${cevre}`);
// }
// alanCevreHesapla(5,7);
//3) function YaziTura(){
//     let durum;
//     let sayi=Math.round(Math.random())
//     if(sayi==0){
//         durum="Tura";
//     }else{
//         durum="yazi";
//     }
//     console.log(durum);
// }
// YaziTura();
//4) function tamBolen(sayi){
//     for(let i=1;i<=sayi;i++){
//         if(sayi%i==0){
//             console.log(i)
//         }
//     }
// }
// // tamBolen(10);
// tamBolen(6);
function topla(...sayilar){
    return sayilar.reduce((toplam,sayi)=>toplam+sayi,0);
}
let toplam=topla(5,7,8);
console.log(toplam);