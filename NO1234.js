// soal nomer 1
function Biodata (nama, umur, email, alamat, status, hobi) {
	this.Name = nama;
	this.Age = umur;
	this.Email = email;
	this.Address = alamat;
	this. isMerried = status ;
	this.Hobbies = hobi;
}
// Calling the function
var person = new Biodata("Vicko", 22, "vicko.maris.s@gmail.com", "villa mutiara serpong", false, ["nonton", "bulu tangkis", "belajar coding"]);

console.log(person.Name);
console.log(person.Age);
console.log(person.Email);
console.log(person.Address);
console.log(person.isMerried);
console.log(person.Hobbies);


// filter() membuat array baru yang diisi dengan elemen yang lulus tes yang disediakan oleh suatu fungsi.
// filter() metode tidak menjalankan fungsi untuk elemen kosong.
// filter() metode tidak mengubah array asli.
//filter
const ages = [32, 33, 16, 40];
const age = ages.filter((checkAdult) => checkAdult >= 18);
  console.log(age);


//   The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.
// menambah satu atau lebih elemen ke akhir sebuah array
//push
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");
console.log(fruits);


// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.
//Method pop() merupakan kebalikan dari push(), ia menghapus elemen terakhir dari suatu array dan mengembalikan elemen yang dihapus. Method ini tidak menerima parameter apapun.
//pop 
const buah = ["Banana", "Orange", "Apple", "Mango"];
buah.pop();
console.log(buah);


//SOAL NO 2
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
//Metode ini berfungsi untuk mereduce elemen array menjadi single value dengan menjumlah setiap elemen (dari kiri ke kanan).
//reduce
const angka = [1, 2, 3, 4, 5];
const sum = angka.reduce((total, value) => total + value, 0); // kita dpt mengganti 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
console.log(sum); // Output: 15


//SOAL NO 3
let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational: 
  [
    {
      priode: "2013-2016",
      school: "Kalam kudu High School",
      major: "-"
    }
  ],
  phone: {
    primari : "0812312323",
    secondary: "0082342343"
  }
};
let data2 = {
    id: 2,
    name: "vicko maris",
    gender: "male",
    height: "165 cm",
    educational: 
  [
    {
      priode: "2011-2014",
      school: "SMK PUSTEK Serpong",
      major: "Multimedia"
    }
  ],
  phone: {
    primari : "081380900121",
    secondary: "-"
  }
};

let newEducation = 
{
priode: "2016-2020",
school: "State University of Jakarta",
major: "Accountancy"
}
//soal 3a
let printData = {...data2};
console.log(printData);

// tanpa menggunakan destructuring, soal 3b
const phones = ['0812312323', '0082342343'];
// old way
const primary = phones[0];
const secondary = phones[1];
console.log(`${primary} ${secondary}`);


//menggunakan destructuring, soal 3b
const phones2 = ['0812312323', '0082342343'];

const [primary2, secondary2] = phones2;
console.log(phones2);

//soal 3c 
printData = {...data, ...newEducation};
console.log(printData);

//SOAL NO 4
let harga= 25000;
let jmlItem= 3;
let potongan=0;
let totalHarga= harga*jmlItem;
let discount = (totalHarga * 35 / 100);
    if(discount > 50000){
        discount = 50000
    };

if(totalHarga >= 60000){
        potongan = (discount);
        //potongan = ((35 / 100) * totalHarga);
        subTotal = (totalHarga - potongan);
    }
    else {
        potongan = (discount*0);
        //potongan = ((35 / 100) * 0);
        subTotal = (totalHarga - potongan);
    }
console.log("Total Harga : ",totalHarga);
console.log("potongan", potongan);
console.log("Sub Total : ",subTotal);