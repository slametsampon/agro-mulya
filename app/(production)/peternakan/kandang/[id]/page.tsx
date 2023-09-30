import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Kandang' })

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Laman Detail Kandang - {params.id}</h1>
      <h3>Under Construction</h3>
    </>
  )
}
