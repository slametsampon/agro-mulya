import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Kolam' })

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Laman Detail Kolam - {params.id}</h1>
      <h3>Under Construction</h3>
    </>
  )
}
