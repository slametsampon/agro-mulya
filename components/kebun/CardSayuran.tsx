import kebunStatic from '@/data/kebun/kebun'

export default function CardSayuran() {
  const sayuran = kebunStatic.sayuran
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}

      {sayuran
        .filter((sayur) => sayur.name !== 'Select...')
        .map(({ name, description, umur, berat, jarakTanam }, index) => {
          return (
            <div key={index} className="rounded-xl relative">
              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">{name} </p>
                <p className="font-bold text-xl px-2 pt-2">{description} </p>
                <p className="px-2">{`Umur : ${umur} hari`}</p>
                <p className="px-2">{`Berat : ${berat} gr`}</p>
                <p className="px-2">{`Jarak Tanam : ${jarakTanam} cm`}</p>
              </div>
              <img
                className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                src={`/static/images/sayuran/${name}.jpg`}
                alt="/"
              />
            </div>
          )
        })}
    </div>
  )
}
