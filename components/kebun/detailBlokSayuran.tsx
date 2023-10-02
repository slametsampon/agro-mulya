import formatDate from 'utils/formatDate'
import getSatuan from 'utils/getSatuan'
import CustomLink from '../Link'

export default function DetailBlokSayuran({ blokSayuranLengkap }) {
  //const properties = Object.getOwnPropertyNames(blokSayuranLengkap)
  //console.log('properties : ', properties)
  const propertiesDimensi = [
    'name',
    'panjang',
    'lebar',
    'luas',
    'lebarBedeng',
    'jarakBedeng',
    'jumlahBedeng',
    'jumlahJalur',
    'jumlahBaris',
    'jumlahTanam',
  ]

  const propertiesSayur = [
    'name',
    'jumlahTanam',
    'tanggalTanam',
    'estPanen',
    'progres',
    'totalBerat',
    'totalAir',
    'totalPupuk',
  ]

  const propertiesFertigasi = [
    'status',
    'waktuNyala',
    'lamaNyala',
    'mode',
    'periode',
    'totalAir',
    'totalPupuk',
  ]

  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700 ">Blok Sayuran</div>
      {/*---Dimensi----*/}
      <div className=" rounded-l bg-yellow-600 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-2xl">Dimensi</div>
        {propertiesDimensi.map((property) => (
          <div key={property} className="font-medium">
            <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className=" px-3 font-bold">
                {property} {getSatuan(property)}
              </div>
              <div className="col-span-2 px-3 font-normal">{blokSayuranLengkap[property]}</div>
            </div>
          </div>
        ))}
      </div>
      {/*---Kontrol Fertigasi----*/}
      <div className=" rounded-l bg-blue-300 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-2xl">Kontrol - Fertigasi</div>
        {propertiesFertigasi.map((property) => (
          <div key={property} className="font-medium">
            <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className=" px-3 font-bold">
                {property} {getSatuan(property)}
              </div>
              <div className="col-span-2 px-3 font-normal">{blokSayuranLengkap[property]}</div>
            </div>
          </div>
        ))}
      </div>
      {/*---Sayuran----*/}
      <div className=" rounded-l bg-green-200 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-blue-800 text-2xl">Sayuran</div>
        {propertiesSayur.map((property) =>
          property === 'name' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">
                  <CustomLink
                    key={blokSayuranLengkap.idSayuran}
                    href={`/kebun/sayuran/${blokSayuranLengkap.idSayuran}`}
                    className="link-active py-1 px-1 sm:block font-semibold text-blue-700 dark:text-gray-100"
                  >
                    {blokSayuranLengkap.sayuran[property]}
                  </CustomLink>
                </div>
              </div>
            </div>
          ) : property === 'tanggalTanam' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">
                  {formatDate(blokSayuranLengkap[property])}
                </div>
              </div>
            </div>
          ) : (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">
                  {property} {getSatuan(property)}
                </div>
                <div className="col-span-2 px-3 font-normal">{blokSayuranLengkap[property]}</div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
