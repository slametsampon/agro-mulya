import kebunStatic from '@/data/kebun/kebun'

export default function getSatuan(property: string): string {
  const listSatuan = kebunStatic.satuan
  const satuan = listSatuan[property]
  if (Object.is(satuan, null) || Object.is(satuan, undefined)) {
    return ''
  }
  return `(${listSatuan[property]})`
}
