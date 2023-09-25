import CardSayuran from '@/components/kebun/CardSayuran'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Sayuran' })

export default function Page() {
  return (
    <>
      <CardSayuran />
    </>
  )
}
