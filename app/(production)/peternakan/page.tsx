import CardAyam from '@/components/kebun/CardAyam'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Peternakan' })

export default function Page() {
  return (
    <>
      <CardAyam />
    </>
  )
}
