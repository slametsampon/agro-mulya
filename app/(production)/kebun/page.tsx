import ListBlokSayuran from '@/components/kebun/listBlokSayuran'
import { genPageMetadata } from 'app/seo'
import getDisplayBlokSayur from 'utils/kebun/getDisplayBlokSayur'

export const metadata = genPageMetadata({ title: 'Kebun' })

export default function Page() {
  return (
    <>
      <h1>Laman Kebun</h1>
      <h3>Under Construction</h3>
    </>
  )
}
