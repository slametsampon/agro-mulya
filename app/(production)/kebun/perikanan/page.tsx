import CardIkan from '@/components/kebun/CardIkan'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Perikanan' })

export default function Page() {
  return (
    <>
      <CardIkan />
    </>
  )
}
