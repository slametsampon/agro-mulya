import Image from '../Image'

export default function DetailAyam({ ayam }) {
  const propertiesAyam = Object.getOwnPropertyNames(ayam)

  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700 ">Detail ayam</div>
      {/*---Ayam----*/}
      <div className=" rounded-l bg-green-200 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <Image
          alt={ayam.name}
          src={`/static/images/ayam/${ayam.name}.jpg`}
          className="object-cover object-center md:h-36 lg:h-48 rounded-2xl shadow-2xl mb-3"
          width={544}
          height={306}
        />
        {propertiesAyam.map((property) =>
          property !== 'id' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">{property}</div>
                <div className="col-span-2 px-3 font-normal">{ayam[property]}</div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  )
}
