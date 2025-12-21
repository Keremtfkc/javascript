// for döngüsü ile 1'den 50'ye kadar olan sayıları consola yazdıran kod 
// let i=1; i'yi 1 den başlatır 
// koşul i<=50 i her döngüde 1 artar döngü 50'ye kadar devam eder
//for(let i=1; i<=50; i++){
//    console.log(i);
//}





/*
//burda bir fonskiyon oluşturduk bu fonksiyon sayının tekmi çiftmi oldugunu buluyor
function tekmiCiftmi(sayi){
    if(sayi % 2 === 0) return "çift"; sayı 2 ye tam bölünüyorsa çifttir
    else return "tek"; bölünmüyorsa tektir
}

for (let i=1; i<=50; i++){ //burda 1 den 50 ye kadar olan sayıları consola yazdırıyoruz
    console.log(i + " sayısı " + tekmiCiftmi(i) + "dır");  //burda fonskiyonu çağırıp ssayının tek mi çiftmi oldugunu yazdırıyoruz
}
    */



const arr = [1,2,3,4,5,6,7,8,9,10]; //burda dizi oluşturduk


let max = arr[0]; //ilk elamanı max sayı olarak atadık
let min = arr[0]; //ilk elamanı min sayı olarak atadık
/*
for (let i=1; i<arr.length; i++){ // burda dizinin uzunluğu kadar döngü oluşturduk
    if(arr[i] > max); //eğer arr[i] max sayısından büyükse maxı güncelle
    max = arr[i]; //max'ı arr[i] yap
}
console.log("dizideki en büyük sayı: " + max); //burda dizideki en büyük sayıyı consola yazdırdık
*/

/*
for (let x=0, y=1; x<arr.length; x++, y++){ 
    if(arr[x] > max){
    max = arr[x];         
    } else if(arr[y] < min){
        min = arr[y];
}
}
console.log("dizideki en büyük sayı: " + max); 
console.log("dizideki en küçük sayı: " + min); 
*/

function tersCevir(sayi) {
  let ters = 0; // ters çevrilmiş sayıyı burada biriktireceğiz

  while (sayi > 0) { // sayı bitene kadar (0 olana kadar) devam et
    const basamak = sayi % 10; // son basamağı al (ör: 1234 % 10 = 4)
    ters = ters * 10 + basamak; // ters sayıyı 10 ile çarpıp yeni basamağı ekle
    sayi = Math.floor(sayi / 10); // sayının son basamağını at (1234 -> 123)
  }

  return ters; // ters çevrilmiş sayı
}

console.log(tersCevir(9876)); // 6789
