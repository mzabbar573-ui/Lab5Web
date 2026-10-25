function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugasInput = document.getElementById("tugas").value;
    const utsInput = document.getElementById("uts").value;
    const uasInput = document.getElementById("uas").value;
    const hasil = document.getElementById("hasil");

    // Validasi input kosong
    if (tugasInput === "" || utsInput === "" || uasInput === "") {
        hasil.innerHTML = "<p>Semua nilai wajib diisi!</p>";
        return;
    }

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    // Validasi rentang nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.innerHTML = "<p>Nilai harus berada pada rentang 0–100!</p>";
        return;
    }

    // Menghitung nilai akhir
    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = tentukanStatus(akhir);

    // Menampilkan hasil ke HTML
    hasil.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>Nilai Tugas: ${tugas}</p>
        <p>Nilai UTS: ${uts}</p>
        <p>Nilai UAS: ${uas}</p>
        <p>Nilai Akhir: ${akhir.toFixed(2)}</p>
        <p>Predikat: ${predikat}</p>
        <p>Status: ${status}</p>
    `;
});
