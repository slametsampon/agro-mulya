import formatDate from 'utils/formatDate'
import getSatuan from 'utils/getSatuan'
import CustomLink from '../Link'

export default function DetailKandang({ kandangLengkap }) {
  //const properties = Object.getOwnPropertyNames(kandangLengkap)
  //console.log('properties : ', properties)
  const propertiesDimensi = ['name', 'panjang', 'lebar', 'tinggi', 'luas', 'volume', 'jumlahAyam']

  const propertiesAyam = [
    'name',
    'jumlahAyam',
    'tanggalMasuk',
    'estPanen',
    'progres',
    'totalBerat',
    'totalAir',
    'totalPakan',
  ]

  const propertiesSirkulasi = ['status', 'waktuNyala', 'lamaNyala', 'mode', 'periode', 'totalAir']

  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700 ">Kandang Ayam</div>
      {/*---Dimensi----*/}
      <div className=" rounded-l bg-yellow-600 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-2xl">Dimensi</div>
        {propertiesDimensi.map((property) => (
          <div key={property} className="font-medium">
            <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className=" px-3 font-bold">
                {property} {getSatuan(property)}
              </div>
              <div className="col-span-2 px-3 font-normal">{kandangLengkap[property]}</div>
            </div>
          </div>
        ))}
      </div>
      {/*---Kontrol Air----*/}
      <div className=" rounded-l bg-blue-300 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-2xl">Kontrol Sirkulasi Air</div>
        {propertiesSirkulasi.map((property) => (
          <div key={property} className="font-medium">
            <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className=" px-3 font-bold">
                {property} {getSatuan(property)}
              </div>
              <div className="col-span-2 px-3 font-normal">{kandangLengkap[property]}</div>
            </div>
          </div>
        ))}
      </div>
      {/*---Ayam----*/}
      <div className=" rounded-l bg-green-200 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-blue-800 text-2xl">Ayam</div>
        {propertiesAyam.map((property) =>
          property === 'name' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">
                  <CustomLink
                    key={kandangLengkap.idAyam}
                    href={`/peternakan/${kandangLengkap.idAyam}`}
                    className="link-active px-3 py-3 sm:block font-semibold text-blue-700 dark:text-gray-100"
                  >
                    {kandangLengkap.ayam[property]}
                  </CustomLink>
                </div>
              </div>
            </div>
          ) : property === 'tanggalMasuk' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">
                  {formatDate(kandangLengkap[property])}
                </div>
              </div>
            </div>
          ) : (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">{kandangLengkap[property]}</div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
