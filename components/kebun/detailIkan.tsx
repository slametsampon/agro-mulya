import Image from '../Image'

export default function DetailIkan({ ikan }) {
  const propertiesIkan = Object.getOwnPropertyNames(ikan)

  return (
    <>
      <div className="mt-3 font-semibold text-2xl text-green-700 ">Detail Ikan</div>
      {/*---Ikan----*/}
      <div className=" rounded-l bg-green-200 rounded-xl px-3 py-3 mt-3 shadow-md dark:bg-gray-900">
        <Image
          alt={ikan.name}
          src={`/static/images/ikan/${ikan.name}.jpg`}
          className="object-cover object-center md:h-36 lg:h-48 rounded-2xl shadow-2xl mb-3"
          width={544}
          height={306}
        />
        {propertiesIkan.map((property) =>
          property !== 'id' ? (
            <div key={property} className="font-medium">
              <div className="mb-4 flex flex-col md:grid md:grid-cols-3 rounded-xl bg-slate-50 px-3 py-1 shadow-md dark:bg-gray-900">
                <div className=" px-3 font-bold">{property}</div>
                <div className="col-span-2 px-3 font-normal">{ikan[property]}</div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  )
}
