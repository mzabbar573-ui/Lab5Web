
/* ========================================
   EKSPERIMEN 1: OPERASI ARITMETIKA
======================================== */

function operasiDasar(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: b !== 0 ? a / b : "Tidak dapat dibagi nol",
        modulus: b !== 0 ? a % b : "Tidak dapat dibagi nol"
    };
}

function jalankanOperasi() {
    const inputA = document.getElementById("angkaA").value;
    const inputB = document.getElementById("angkaB").value;
    const hasil = document.getElementById("hasilOperasi");

    if (inputA.trim() === "" || inputB.trim() === "") {
        hasil.textContent = "Kedua nilai wajib diisi!";
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        hasil.textContent = "Masukkan angka yang valid!";
        return;
    }

    const hasilHitung = operasiDasar(a, b);

    hasil.innerHTML =
        "Penjumlahan: " + hasilHitung.tambah + "<br>" +
        "Pengurangan: " + hasilHitung.kurang + "<br>" +
        "Perkalian: " + hasilHitung.kali + "<br>" +
        "Pembagian: " + hasilHitung.bagi + "<br>" +
        "Modulus: " + hasilHitung.modulus;
}


/* ========================================
   EKSPERIMEN 7: TABEL PERKALIAN 7
======================================== */

function tampilkanPerkalian() {
    let teks = "";

    for (let i = 1; i <= 10; i++) {
        teks += "7 x " + i + " = " + (7 * i) + "<br>";
    }

    document.getElementById("hasilPerkalian").innerHTML = teks;
}


/* ========================================
   EKSPERIMEN 8: FUNCTION CEK GENAP
======================================== */

function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaGenap() {
    const input = document.getElementById("angkaGenap").value;
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" ||
        !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid!";
        return;
    }

    const angka = Number(input);

    if (cekGenap(angka)) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


/* ========================================
   EKSPERIMEN 9: VALIDASI FORM MAHASISWA
======================================== */

document.getElementById("formMahasiswa")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const nama =
            document.getElementById("namaMahasiswa").value.trim();

        const inputNilai =
            document.getElementById("nilaiMahasiswa").value;

        const nilai = Number(inputNilai);
        const hasil = document.getElementById("hasilValidasi");

        if (nama === "") {
            hasil.textContent = "Nama tidak boleh kosong!";
        } else if (
            inputNilai === "" ||
            !Number.isFinite(nilai) ||
            nilai < 0 ||
            nilai > 100
        ) {
            hasil.textContent =
                "Nilai harus berada pada rentang 0–100!";
        } else {
            hasil.textContent =
                "Nama: " + nama + ", Nilai: " + nilai;
        }
    });


/* ========================================
   EKSPERIMEN 10: TOTAL HARGA MENU MAKANAN
======================================== */

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function(item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("totalHarga").textContent =
        total.toLocaleString("id-ID");
}


/* ========================================
   EKSPERIMEN 11: SEMBUNYIKAN DAN TAMPILKAN TEKS
======================================== */

function sembunyikanTeks() {
    document.getElementById("teksContoh").style.display = "none";
}

function tampilkanTeks() {
    document.getElementById("teksContoh").style.display = "block";
}
