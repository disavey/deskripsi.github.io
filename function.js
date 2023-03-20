// function tambah(a,b){
//     return a + b;
// } 

// var a = parseInt(prompt("Masukkan nilai 1 : "));
// var b = parseInt(prompt("Masukkan Nilai 2 : "));
// var hasil = tambah(a, b); 
// console.log(hasil);

// function tambah(){
//     var hasil = 0;
//     for (i = 0; 1 < arguments.length; i++) {
//         // arguments (code semu) berfungsi untuk menyimpan semua inputan aargumen 
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(3, 5, 10, 5, 80);
// console.log(coba);

//function declaration (penempatan bisa di mana saja)

// function tampilPesan(nama){
//     alert("Halo" + nama);
// }

//function expression (harus dideklarasikan terlebih dahulu)
// var tampilPesan = function(nama){
//     alert("Halo " + nama);
// };

// tampilPesan("Saviero");

// let arr = ["Saviero", "Gilbert", 3, 88];

//join mengubah isi array menjadi string

//push & pop = menambah dan menghapus elemen array 

// arr.push("Hain", 6);

// console.log(arr.join(" - "));

// arr.pop();
// console.log(arr);

//unshift & shift = menambah dan menghapus pada awal array

// arr.unshift("Dobi");
// console.log(arr.join( ", " ));


//splice = menyambung dan memotong array 

// arr.splice(2, 2, "Brahms", "Taki");
// // arr.splice(2, 3, "Bahro" );
// console.log(arr.join(", "));

//slice = mengiris array
//slice(awal, akhir);
// var arr2 = arr.slice(0,2);
// console.log(arr);
// console.log(arr2);

// var a = [1, 2, 3, 4, "a", "b", "c", "d"];
// var a2 = 

//Method Filter 
//method filter() berfungssi untuk menyaring data di array 
//paarameter yang harus diberikan pada method filter() sa,a seperti forEach(), yaitu sebuah fungsi callback.

// const angka = [1,2,3,4,5,6,7,8,9];
// const filterArr = angka.filter ((item) => {
//     return item % 2 == 1;
// });
// console.log(filterArr);

//arrrow function
// const angka = () => {

// }

//object di dalam array
// const users = [{
//     Nama: `Doki`,
//     Umur: `23`,
//     Gender: `female`
// }],
// {
//     Nama: `Kiba`,
//     Umur: `19`,
//     Gender: `male`
// },
// {
//     Nama: `Bety`,
//     Umur: `54`,
//     Gender: `female`
// }];

// const usersFemale = users.filter( (users) => users.Gender === `female`);
// console.log(usersFemale);

// const mobil = [{
//     merk: `BMW i8`,
//     fuel: `gasoline`,
//     type: `hybrid sports car`
// },
// {
 
// function tambah(a, b){
//     console.log("")
// }

var penumpang = []; //membuat var array penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) //function dengan 2 parameter
{
    if (penumpang.length == 0) //kondisi if. Keadaan saat array kosong 
    {
        penumpang.push(namaPenumpang); // menambahkan penumpang menggunakan push method
        return penumpang; //return untuk mengembalikan nilai
    }else //kondisi else, lainnya dari keadaan saat array kosong
    {
        for (i=0; i < penumpang.length; i++) //.length (untuk menyesuaikan panjang parameter), i++ increment untuk menambahkan nilai dari i 
        {
            if (namaPenumpang == penumpang[i]) // if ini saat penumpang yang sama masuk ke angkot
            {
            console.log(`Penumpang sudah ada di dalam angkot.`);        
            return penumpang;
          } else if (i == penumpang.length - 1) // jika i nilai = penumpang.length maka akan menambahkan penumpang kedua
          {
            penumpang.push(namaPenumpang);
            return penumpang;
          }
          }
        }
    }
