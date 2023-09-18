import kebunStatic from '@/data/kebun/kebun'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  //const { searchParams } = new URL(request.url)
  const data = kebunStatic.blok
  return NextResponse.json(data)
}
