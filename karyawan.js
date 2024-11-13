const daftarKaryawan = [
    {  
    nama: "Devyn Ramirez",
    masaKerja: "10",
    nomorInduk: "12345678910",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Harmony Duncan",
    masaKerja: "5",
    nomorInduk: "23456789101",
    gajiKaryawan: "Rp 4.000.000"
    },
    {
    nama: "Clarissa Burgess",
    masaKerja: "8",
    nomorInduk: "34567891012",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Reilly Blanchard",
    masaKerja: "7",
    nomorInduk: "45678910123",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Zion Brooks",
    masaKerja: "4",
    nomorInduk: "56789101234",
    gajiKaryawan: "Rp 4.000.000"
    },
    {
    nama: "Jovanny Mays",
    masaKerja: "10",
    nomorInduk: "67891012345",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Cindy Chase",
    masaKerja: "9",
    nomorInduk: "78910123456",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Kristin Mcdaniel",
    masaKerja: "8",
    nomorInduk: "89101234567",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Macey Sanford",
    masaKerja: "7",
    nomorInduk: "91012345678",
    gajiKaryawan: "Rp 7.000.000"
    },
    {
    nama: "Alfredo Faulkner",
    masaKerja: "10",
    nomorInduk: "10123456789",
    gajiKaryawan: "Rp 7.000.000"
    },

]


let mode = 'tambah'

//create, read, update, delete


// arrow function


const tampilkanKaryawan = () => {

    const tblKaryawan = document.getElementById("tblKaryawan")
    tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Nomor Induk</th><th>Gaji Karyawan</th><th>Hapus</th><th>Edit</th></tr>`

for (let x in daftarKaryawan) {
    console.log (`${parseInt(x) + 1}. ${daftarKaryawan[x].nama} dengan masa kerja ${daftarKaryawan[x].masaKerja} nomor induk ${daftarKaryawan[x].nomorInduk} suka warna ${daftarKaryawan[x].gajiKaryawan}`)

    //mengakses dom 
    const tblKaryawan = document.getElementById("tblKaryawan")
    tblKaryawan.innerHTML += `<tr> <th>${parseInt(x) + 1}</th> <td>${daftarKaryawan[x].nama}</td> <td>${daftarKaryawan[x].masaKerja}</td> <td>${daftarKaryawan[x].nomorInduk}</td> <td>${daftarKaryawan[x].gajiKaryawan}</td> <td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[x].nama}')">Hapus</button></td> <td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[x].nama}')">Edit</button></td></tr>`
}
}

const tambahKaryawan = () => {
    const nama = document.getElementById('nama').value 
    const masaKerja = document.getElementById('masaKerja').value 
    const nomorInduk = document.getElementById('nomorInduk').value 
    const gajiKaryawan = document.getElementById('gajiKaryawan').value

    const KaryawanBaru = {
    nama: nama,
    masaKerja: masaKerja,
    nomorInduk: nomorInduk,
    gajiKaryawan: gajiKaryawan,
    }
                                                                             
    if (mode == 'tambah') {
        daftarKaryawan.push(KaryawanBaru)
    }
    else {
        daftarKaryawan[mode] = KaryawanBaru
    }

    document.getElementById('nama').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('nomorInduk').value = ""
    document.getElementById('gajiKaryawan').value = ""

    mode = 'tambah'

    tampilkanKaryawan()
}

const cariIndex = (nama) => {
    //tampilkan index jika nama Karyawan === nama
    for (let i=0; i<daftarKaryawan.length; i++){
        if (daftarKaryawan[i].nama == nama){
            return i
        }
}
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    //menghapus element dari dalam array
    daftarKaryawan.splice(indexDihapus,1)

tampilkanKaryawan()

    }


const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)

    const KaryawanDiedit = daftarKaryawan[indexEdit];

    document.getElementById('nama').value = KaryawanDiedit.nama;
    document.getElementById('masaKerja').value = KaryawanDiedit.masaKerja;
    document.getElementById('nomorInduk').value = KaryawanDiedit.nomorInduk;
    document.getElementById('gajiKaryawan').value = KaryawanDiedit.gajiKaryawan

mode = indexEdit
    
}

const cancel = (target) => {
    document.getElementById('nama').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('nomorInduk').value = ""
    document.getElementById('gajiKaryawan').value = ""

    mode = 'tambah'
}