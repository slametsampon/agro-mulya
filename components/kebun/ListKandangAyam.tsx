import formatDate from 'utils/formatDate'
import CustomLink from '../Link'

export default function ListKandangAyam({ kandangAyam }) {
  return (
    <>
      <div className="mt-10 font-semibold text-2xl text-yellow-700">Kandang Ayam</div>
      <div className="wo-table">
        <div className="hidden rounded-2xl bg-red-100 text-left font-bold text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-8">
          <div className="px-6 py-3 text-left">kandang Id</div>
          <div className="px-6 py-3 text-left">Luas (m2)</div>
          <div className="px-6 py-3 text-left">Ayam</div>
          <div className="px-6 py-3 text-left">Jumlah</div>
          <div className="px-6 py-3 text-left">Berat (Kg)</div>
          <div className="px-6 py-3 text-left">Tanggal Masuk</div>
          <div className="px-6 py-3 text-left">Estimasi Panen</div>
          <div className="px-6 py-3 text-left">Progres (%)</div>
        </div>
        <div>
          {kandangAyam
            .filter((kandang) => kandang.name !== 'Select...')
            .map((kandang) => (
              <div
                key={kandang.id}
                className="flex flex-col mt-2 rounded-2xl bg-orange-100 text-left font-normal text-gray-900 shadow-xl dark:bg-gray-900 dark:text-gray-100 md:grid md:grid-cols-8"
              >
                <div className="px-6 mt-3 text-left font-bold md:hidden">Kandang Id</div>
                <CustomLink
                  key={kandang.id}
                  href={`/peternakan/kandang/${kandang.id}`}
                  className="link-active px-6 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                >
                  {kandang.name}
                </CustomLink>

                <div className="px-6 mt-3 text-left font-bold md:hidden">Luas (m2)</div>
                <div className="px-6 py-3 text-left">{kandang.luas / 10000}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Nama</div>
                <CustomLink
                  key={kandang.idAyam}
                  href={`/peternakan/${kandang.idAyam}`}
                  className="link-active px-6 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                >
                  {kandang.ayam.name}
                </CustomLink>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Jumlah</div>
                <div className="px-6 py-3 text-left">{kandang.jumlahAyam}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Berat (Kg)</div>
                <div className="px-6 py-3 text-left">{kandang.totalBerat}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Tanggal Masuk</div>
                <div className="px-6 py-3 text-left">
                  {formatDate(new Date(kandang.tanggalMasuk))}
                </div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Estimasi Panen</div>
                <div className="px-6 py-3 text-left">{kandang.estPanen}</div>
                <div className="px-6 mt-3 text-left font-bold md:hidden">Progres (%)</div>
                <div className="px-6 py-3 text-left">{kandang.progres}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
