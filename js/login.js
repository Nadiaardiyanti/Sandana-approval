// Ambil elemen dari HTML
const form = document.getElementById("loginForm");
const userId = document.getElementById("userId");
const password = document.getElementById("password");
const departemen = document.getElementById("departemen");

const idError = document.getElementById("idError");
const passwordError = document.getElementById("passwordError");
const loginNotif = document.getElementById("loginNotif");


// Event ketika form di-submit
form.addEventListener("submit", function(event){

event.preventDefault(); // mencegah reload halaman

let valid = true;

// reset pesan error
idError.textContent = "";
passwordError.textContent = "";
loginNotif.textContent = "";


// VALIDASI SEMUA DATA HARUS DIISI

if(userId.value === "" || password.value === "" || departemen.value === ""){

loginNotif.textContent = "Login gagal, data harus diisi semua";
loginNotif.className = "text-red-500 text-sm text-center";

valid = false;

}


// VALIDASI ID HARUS ANGKA

const idPattern = /^[0-9]+$/;

if(userId.value !== "" && !idPattern.test(userId.value)){

idError.textContent = "Kode ID Pengguna harus diisi menggunakan angka";
valid = false;

}


// VALIDASI PASSWORD, HARUS: huruf + angka + karakter

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).+$/;

if(password.value !== "" && !passwordPattern.test(password.value)){

passwordError.textContent = "Password harus kombinasi huruf, angka, dan karakter";
valid = false;

}


// JIKA SEMUA VALID

if(valid){

loginNotif.textContent = "Login berhasil";
loginNotif.className = "text-blue-600 text-sm text-center";

// pindah halaman setelah 1 detik
setTimeout(function(){

window.location.href = "dashboard.html";

},1000);

}

});