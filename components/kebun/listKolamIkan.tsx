import formatDate from 'utils/formatDate'
import CustomLink from '../Link'

export default function ListKolamIkan({ kolamIkan }) {
  return (
    <>
      <div className="mt-10 font-semibold text-2xl text-blue-700">Kolam Ikan</div>
      <div className="wo-table">
        <div className="hidden rounded-2xl bg-blue-200 text-left font-bold text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-8">
          <div className="px-6 py-3 text-left">kolam Id</div>
          <div className="px-6 py-3 text-left">Luas (cm2)</div>
          <div className="px-6 py-3 text-left">Ikan</div>
          <div className="px-6 py-3 text-left">Jumlah</div>
          <div className="px-6 py-3 text-left">Berat (gr)</div>
          <div className="px-6 py-3 text-left">Tanggal Masuk</div>
          <div className="px-6 py-3 text-left">Estimasi Panen</div>
          <div className="px-6 py-3 text-left">Progres (%)</div>
        </div>
        <div>
          {kolamIkan
            .filter((kolam) => kolam.name !== 'Select...')
            .map((kolam) => (
              <div
                key={kolam.id}
                className="flex flex-col mt-2 rounded-2xl bg-lime-50 text-left font-normal text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-8"
              >
                <div className="px-6 mt-3 text-left font-bold md:hidden">Kolam Id</div>
                <CustomLink
                  key={kolam.id}
                  href={`/kebun/perikanan/kolam/${kolam.id}`}
                  className="link-active px-6 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                >
                  {kolam.name}
                </CustomLink>

                <div className="px-6 mt-3 text-left font-bold md:hidden">Luas (cm2)</div>
                <div className="px-6 py-3 text-left">{kolam.luas}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Nama</div>
                <CustomLink
                  key={kolam.idIkan}
                  href={`/kebun/perikanan/${kolam.idIkan}`}
                  className="link-active px-6 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                >
                  {kolam.ikan.name}
                </CustomLink>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Jumlah</div>
                <div className="px-6 py-3 text-left">{kolam.jumlahIkan}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Berat (Kg)</div>
                <div className="px-6 py-3 text-left">{kolam.totalBerat}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Tanggal Masuk</div>
                <div className="px-6 py-3 text-left">
                  {formatDate(new Date(kolam.tanggalMasuk))}
                </div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Estimasi Panen</div>
                <div className="px-6 py-3 text-left">{kolam.estPanen}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Progres (%)</div>
                <div className="px-6 py-3 text-left">{kolam.progres}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
