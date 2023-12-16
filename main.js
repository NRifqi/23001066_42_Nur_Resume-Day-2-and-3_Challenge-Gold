// console.log("hello world");


// nama: "saya"
// alamat: "bandung"

// var nama = "saya"
// alamat = "bandung"

// console.log(nama, alamat);
// console.log(nama + alamat);
// console.log(`${nama} ${alamat}`)

// DEKLARASI VARIABLE
// VAR LET CONST

// // var bisa dideklarasi ulang
// var nama = "saya";
// var nama = "kamu";

// console.log(nama);

// // tidak bisa dideklarasi ulang
// let profesi = "programmer";
//  profesi = "designer";

// console.log(profesi);

// // value tetap, tidak bisa dirubah
// let alamat = "bandung";
// alamat = "depok";

// console.log(alamat);


// Hoisting
// var jenisKelamin;
// let jenisKelamin1;

// console.log(jenisKelamin);
// console.log(jenisKelamin1);

// jenisKelamin = "laki-laki"
// console.log(jenisKelamin)

// let nama = "haha", alamat = "bandung"

// let diskon = 200;
// let gratis = "";

// if(diskon > 300){
//     gratis = "minuman";
//     console.log(gratis);
// } else {
//     gratis = "angin";
//     console.log(gratis);
// }
// console.log(gratis);

// string
// let string1 = "hello guys";
// let string2 = "gimana kabarnya?";
// let string3 = `baik ${string1}`;

// // number
// let age = 25;

// console.log(age, typeof(age))

// // Boolean
// let studentBinar = true;

// let hobby;
// console.log(hobby)

// object
// let biodataAku = {
//     name : "saya ",
//     address : "bandung",
//     hobby : "futsal"    
// }
// let biodataKamu = {
//     name : "kamu",
//     address : "bandung",
//     hobby : "soccer"    
// }

// console.log(biodataAku);
// console.log(biodataAku.name);
// console.log(biodataKamu);


// // Array
// // save data yg sama
// let brandCar1 = "Toyota"
// let brandCar2 = "Honda"
// let brandCar3= "Datsun"
// let brandCar = ["toyota", "honda", "datsun"]

// brandCar[0] = "dongfeng"
// // brandCar.push("wuling")
// brandCar.push(... ["isuzu", "mitsubishi"])
// console.log(brandCar);
// console.log(brandCar[0]);
// console.log(brandCar[2]);

// data manipulating
// let data = "my name is rifqi";
// let result = data.replace("rifqi", "rifqa");
// console.log(result);

// let data2 = "brand rinso"
// let result2 = data2.substring(6, 11)
// console.log(result2);

// let data3 = "I LIKE CODING";
// let result3 = data3.toLocaleLowerCase();
// console.log(result3);

// =============================================== //

// let a = 2;
// let b = "2";

// convert string to integer
// b = parseInt(b)

// // merubah nilai
// let result = a = b;

// // tidak mengecek ke tipe data
// let result = a == b;

// // tidak mengecek ke tipe data
// let result = a === b;

// number + string = digabung bukan dijumlah
// number - string = aritmatika pengurangan
// let result = a / b
// console.log(result);

// let data  = 2.4;
// console.log(Math.ceil(data));
// console.log(Math.max(1,3,6));
// console.log(Math.round(9.5));

// let a = new Date()

// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())

// console.log(new Date ());

let time = new Date();
let year = time.getFullYear();
let month = time.getMonth();
let date = time.getDate();
let day = time.getDay();
let hour = time.getHours();
let Minutes = time.getMinutes();

let dataMonth = ["jan", "Feb", "Mar", "April", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Desember"]
let dataDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
let resultTime =`${dataDay[day]} ${date} ${dataMonth[month]} ${year}`;
console.log(resultTime)

// console.log(a.getMilliseconds())

// function sayHiTo(name) {
//     let halo = `Hai ${name.toUpperCase()}!`
//     return halo
// }

// let test1 = sayHiTo("everything")
// console.log(test1)