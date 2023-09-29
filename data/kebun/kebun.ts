const kebunStatic = {
  blokSayuran: [
    {
      id: 0,
      name: 'Select...',
      idSayuran: 0,
      tanggalTanam: '2023-09-18',
      panjang: 20,
      lebar: 6,
      status: 'Auto',
      waktuNyala: 6,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
    {
      id: 1,
      name: 'Blok-1',
      idSayuran: 1,
      tanggalTanam: '2023-09-18',
      panjang: 20,
      lebar: 6,
      status: 'Auto',
      waktuNyala: 6,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
    {
      id: 2,
      name: 'Blok-2',
      idSayuran: 2,
      tanggalTanam: '2023-09-18',
      panjang: 20,
      lebar: 8,
      status: 'Auto',
      waktuNyala: 7,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
    {
      id: 3,
      name: 'Blok-3',
      idSayuran: 3,
      tanggalTanam: '2023-09-18',
      panjang: 20,
      lebar: 10,
      status: 'Auto',
      waktuNyala: 5,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
  ],
  blokPeternakan: [
    { id: 0, name: 'Select...', description: 'Select Blok' },
    {
      id: 1,
      name: 'Blok-2',
      idTernak: 1,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 30,
      luas: 0,
      jumlahTernak: 0,
      progres: 0,
      status: 'Auto',
      waktuNyala: 6,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
    {
      id: 2,
      name: 'Blok-2',
      idTernak: 2,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 30,
      luas: 0,
      jumlahTernak: 0,
      progres: 0,
      status: 'Auto',
      waktuNyala: 7,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
    {
      id: 3,
      name: 'Blok-3',
      idTernak: 5,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 30,
      luas: 0,
      jumlahTernak: 0,
      progres: 0,
      status: 'Auto',
      waktuNyala: 5,
      lamaNyala: 30,
      mode: 'Periodik',
      periode: 'Hari',
    },
  ],
  blokKolam: [
    { id: 0, name: 'Select...', description: 'Select Blok' },
    {
      id: 1,
      name: 'Kolam-1',
      idIkan: 1,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 6,
      luas: 0,
      jumlahIkan: 0,
      progres: 0,
    },
    {
      id: 2,
      name: 'Kolam-2',
      idIkan: 2,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 8,
      luas: 0,
      jumlahIkan: 0,
      progres: 0,
    },
    {
      id: 3,
      name: 'Kolam-3',
      idIkan: 5,
      tanggalMasuk: '2023-09-18',
      panjang: 20,
      lebar: 10,
      luas: 0,
      jumlahIkan: 0,
      progres: 0,
    },
  ],
  sayuran: [
    { id: 0, name: 'Select...', description: 'Select Sayuran', umur: 0, jarakTanam: 0, berat: 0 },
    {
      id: 1,
      name: 'Bayam',
      description: 'Sayur Bayam',
      umur: 40,
      jarakTanam: 30,
      berat: 100,
    },
    {
      id: 2,
      name: 'Brokoli',
      description: 'Sayur Brokoli',
      umur: 60,
      jarakTanam: 30,
      berat: 100,
    },
    {
      id: 3,
      name: 'Sawi-Hijau',
      description: 'Sayur Sawi Hijau',
      umur: 35,
      jarakTanam: 30,
      berat: 100,
    },
  ],
  ikan: [
    { id: 0, name: 'Select...', description: 'Select Ikan' },
    {
      id: 1,
      name: 'Diskus',
      description: 'Ikan Hias Diskus',
      umur: 40,
      padatTebar: 30,
    },
    {
      id: 2,
      name: 'Sumatra',
      description: 'Ikan Hias Sumatra',
      umur: 40,
      padatTebar: 30,
    },
    {
      id: 3,
      name: 'Neon Tetra',
      description: 'Ikan Hias Neon Tetra',
      umur: 40,
      padatTebar: 30,
    },
  ],
  ayam: [
    { id: 0, name: 'Select...', description: 'Select Ayam' },
    {
      id: 1,
      name: 'Ayam Potong',
      description: 'Ayam Potong',
      umur: 40,
      padatTebar: 30,
    },
    {
      id: 2,
      name: 'Ayam Kampung',
      description: 'Ayam Kampung',
      umur: 40,
      padatTebar: 30,
    },
    {
      id: 3,
      name: 'Ayam Petelur',
      description: 'Ayam Petelur',
      umur: 40,
      padatTebar: 30,
    },
  ],
  dripper: [
    { id: 0, name: 'Select...', description: 'Select Dripper' },
    {
      id: 1,
      name: 'Dripper 8 Outlet',
      capacityMax: 90,
      inlet: 3,
      harga: 200,
    },
    {
      id: 2,
      name: 'Dripper 1 Outlet',
      capacityMax: 8,
      inlet: 3,
      harga: 875,
    },
    {
      id: 3,
      name: 'Dripper bengkok',
      capacityMax: 0.9,
      inlet: 3,
      harga: 400,
    },
  ],
}
export default kebunStatic
