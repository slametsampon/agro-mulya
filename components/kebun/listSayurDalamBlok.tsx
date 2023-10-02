import CustomLink from '../Link'

export default function ListSayurDalamBlok({ listBlokLengkap }) {
  return (
    <>
      <div className="mt-10 font-semibold text-2xl text-blue-700">Lokasi Tanam</div>
      <div className="wo-table">
        <div className="hidden rounded-2xl bg-green-200 text-left font-bold text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-5">
          <div className="px-6 py-3 text-left">Blok Id</div>
          <div className="px-6 py-3 text-left">Jumlah</div>
          <div className="px-6 py-3 text-left">Berat (Kg)</div>
          <div className="px-6 py-3 text-left">Estimasi Panen</div>
          <div className="px-6 py-3 text-left">Progres (%)</div>
        </div>
        <div>
          {listBlokLengkap
            .filter((blok) => blok.name !== 'Select...')
            .map((blok) => (
              <div
                key={blok.id}
                className="flex flex-col mt-2 rounded-2xl bg-green-50 text-left font-normal text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-5"
              >
                <div className="px-6 mt-3 text-left font-bold md:hidden">Blok Id</div>
                <CustomLink
                  key={blok.id}
                  href={`/kebun/sayuran/blok/${blok.id}`}
                  className="link-active px-6 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                >
                  {blok.name}
                </CustomLink>

                <div className="px-6 mt-3 text-left font-bold md:hidden">Jumlah</div>
                <div className="px-6 py-3 text-left">{blok.jumlahTanam}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Berat (Kg)</div>
                <div className="px-6 py-3 text-left">{blok.berat}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Estimasi Panen</div>
                <div className="px-6 py-3 text-left">{blok.estPanen}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Progres (%)</div>
                <div className="px-6 py-3 text-left">{blok.progres}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
