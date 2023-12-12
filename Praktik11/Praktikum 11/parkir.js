function hitungparkir(){
    // dapatkan inputtan user
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    // dapatkan elemen untuk menampilkan hasil
    let hasildurasi = document.querySelector("#hasildurasi")
    let hasilbiaya = document.querySelector("#hasilbiaya")

    // hitung durasi
    let durasi = keluar - masuk
    
    // hitung biaya
    let biaya = 3000

    // menambah biaya 1000 setiap jam setelah 2 jam
    if(durasi > 2){
        biaya += (durasi - 2) * 1000
    }


    console.log(biaya);

    hasilbiaya.innerHTML = biaya
    hasildurasi.innerHTML = durasi
}