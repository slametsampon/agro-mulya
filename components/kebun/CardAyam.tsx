import kebunStatic from '@/data/kebun/kebun'
import CustomLink from '../Link'
import Image from 'next/image'

export default function CardAyam() {
  const ayam = kebunStatic.ayam
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}

      {ayam
        .filter((sayur) => sayur.name !== 'Select...')
        .map(({ id, name, description, umur, berat }, index) => {
          return (
            <div key={index} className="rounded-xl relative">
              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <CustomLink
                  key={id}
                  href={`/peternakan/${id}`}
                  className="link-active px-2 py-3 sm:block font-semibold text-white dark:text-gray-100"
                >
                  {name}
                </CustomLink>
                <p className="font-bold text-xl px-2 pt-2">{description} </p>
                <p className="px-2">{`Umur : ${umur} hari`}</p>
                <p className="px-2">{`Berat : ${berat} gr`}</p>
              </div>
              <Image
                className="h-full min-h-[200px] w-full object-cover rounded-xl"
                src={`/static/images/ayam/${name}.jpg`}
                alt={`${name}.jpg`}
                width={200}
                height={200}
              />
            </div>
          )
        })}
    </div>
  )
}
