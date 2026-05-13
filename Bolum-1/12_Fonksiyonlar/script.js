function selamlama(msg){
    console.log(msg);
}
selamlama("merhaba");
selamlama("iyi günler");
selamlama("nasılsın");

selamlama();
function yasHesapla(dogumYili){
    return new Date().getFullYear()-dogumYili;
}
 let yasAhmet=yasHesapla(2010);
 let yasMehmet=yasHesapla(1998);
 console.log(yasAhmet,yasMehmet)