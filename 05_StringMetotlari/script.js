let kursAdi="Komple Uygulamalı Web Geliştirme Eğitimi";
let sonuc;
sonuc=kursAdi.toLowerCase();
sonuc=kursAdi.toUpperCase();
sonuc=kursAdi.length;
sonuc=kursAdi[0];
sonuc=kursAdi.slice(0,6);
sonuc=kursAdi.substring(0,6);
// sonuc=kursAdi.replace("Eğitimi","kursu");
sonuc=kursAdi.indexOf("Eğitimi");

console.log(sonuc);