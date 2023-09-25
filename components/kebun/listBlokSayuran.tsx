import kebunStatic from '@/data/kebun/kebun'

export default function ListBlokSayuran() {
  const Hitungluas = (panjang, lebar) => {
    return panjang * lebar
  }

  const bloksSayuran = kebunStatic.blokSayuran
  return (
    <>
      <h1 className="mt-3 font-semibold text-xl text-green-700"> Sayuran </h1>
      <div className="wo-table">
        <div className="hidden rounded-2xl bg-slate-300 text-left font-bold text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-7">
          <div className="px-6 py-3 text-left">Blok Id</div>
          <div className="px-6 py-3 text-left">Luas (m2)</div>
          <div className="px-6 py-3 text-left">Tanaman</div>
          <div className="px-6 py-3 text-left">Jumlah</div>
          <div className="px-6 py-3 text-left">Tanggal Tanam</div>
          <div className="px-6 py-3 text-left">Tanggal Panen</div>
          <div className="px-6 py-3 text-left">Progress</div>
        </div>
        <div>
          {bloksSayuran
            .filter((blok) => blok.name !== 'Select...')
            .map((blok) => (
              <div
                key={blok.id}
                className="hidden rounded-2xl bg-green-50 text-left font-normal text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-7"
              >
                <div className="px-6 py-3 text-left">{blok.id}</div>
                <div className="px-6 py-3 text-left">
                  {(blok.luas = Hitungluas(blok.panjang, blok.lebar))}
                </div>
                <div className="px-6 py-3 text-left">{blok.idSayuran}</div>
                <div className="px-6 py-3 text-left">{blok.jumlahTanam}</div>
                <div className="px-6 py-3 text-left">{blok.tanggalTanam}</div>
                <div className="px-6 py-3 text-left">{blok.tanggalTanam}</div>
                <div className="px-6 py-3 text-left">{blok.progres}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
