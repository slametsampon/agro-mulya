import formatDate from 'utils/formatDate'

export default function DetailKolam({ kolamLengkap }) {
  //const properties = Object.getOwnPropertyNames(kolamLengkap)
  //console.log('properties : ', properties)
  const propertiesDimensi = ['name', 'panjang', 'lebar', 'tinggi', 'luas', 'volume', 'jumlahIkan']

  const propertiesIkan = [
    'name',
    'jumlahIkan',
    'tanggalMasuk',
    'estPanen',
    'progres',
    'berat',
    'kebutuhanAir',
    'kebutuhanPakan',
  ]

  const propertiesSirkulasi = [
    'status',
    'waktuNyala',
    'lamaNyala',
    'mode',
    'periode',
    'kebutuhanAir',
  ]

  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700 ">Kolam Ikan</div>
      {/*---Dimensi----*/}
      <div className=" rounded-l bg-yellow-600 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-2xl">Dimensi</div>
        {propertiesDimensi.map((property) => (
          <div key={property} className="font-medium">
            <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
              <div className=" px-3 font-bold">{property}</div>
              <div className="col-span-2 px-3 font-normal">{kolamLengkap[property]}</div>
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
              <div className=" px-3 font-bold">{property}</div>
              <div className="col-span-2 px-3 font-normal">{kolamLengkap[property]}</div>
            </div>
          </div>
        ))}
      </div>
      {/*---Ikan----*/}
      <div className=" rounded-l bg-green-200 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <div className="mb-2 font-semibold text-blue-800 text-2xl">Ikan</div>
        {propertiesIkan.map((property) =>
          property === 'name' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">{property}</div>
                <div className="col-span-2 px-3 font-normal">{kolamLengkap.ikan[property]}</div>
              </div>
            </div>
          ) : property === 'tanggalMasuk' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">{property}</div>
                <div className="col-span-2 px-3 font-normal">
                  {formatDate(kolamLengkap[property])}
                </div>
              </div>
            </div>
          ) : (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">{property}</div>
                <div className="col-span-2 px-3 font-normal">{kolamLengkap[property]}</div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
