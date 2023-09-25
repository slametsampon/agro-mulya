import ListBlokSayuran from '@/components/kebun/listBlokSayuran'
import { genPageMetadata } from 'app/seo'
import getDisplayBlokSayur from 'utils/kebun/getDisplayBlokSayur'

export const metadata = genPageMetadata({ title: 'Kebun' })

export default async function Page() {
  const blokDisplay = await getDisplayBlokSayur()
  console.log('blokDisplay : ', blokDisplay)
  return (
    <>
      <ListBlokSayuran />
    </>
  )
}
