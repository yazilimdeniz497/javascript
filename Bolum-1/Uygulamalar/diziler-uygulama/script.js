let meyveler=["elma","Armut","Muz","Çilek"];
let sonuc;
sonuc=meyveler.length;
sonuc=meyveler[0];
console.log(sonuc);
sonuc=meyveler[3];

console.log(sonuc);
sonuc=meyveler.includes("elma");
console.log(sonuc);
sonuc=meyveler.push("Kiraz");
console.log(meyveler)
// meyveler.splice(2)
meyveler.splice(-2);
console.log(meyveler)
let ogrenci1=["yiğit bilgi",2010,[70,60,80]];
let ogrenci2=["ada bilgi",2012,[80,80,90]];
let ogrenci3=["Ahmet Turan",2009,[60,60,70]];
let simdi=new Date();
sonuc=simdi.getFullYear-ogrenci1[1];
sonuc=simdi.getFullYear-ogrenci2[1];
sonuc=simdi.getFullYear-ogrenci3[1];
