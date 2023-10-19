import { ChatWindow } from '@/components/ChatWindow'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Diskusi' })

export default function page() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Diskusi Agro Mulya</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            Ini adalah media diskusi dengan memanfaatkan AI - Artificial intelligence
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Silahkan anda mulai bertanya misalkan :{' '}
            <code>
              Bagaimana cara budidaya sayur bayam berikut jarak tanam, kebutuhan air, pupuk serta
              berat sayuran saat panen?
            </code>{' '}
            di bawah ini!
          </span>
        </li>
      </ul>
    </div>
  )
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=" 🦜"
      titleText="Diskusi Agro Mulya"
      placeholder="Silahkan ketikkan pertanyaanya di sini!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  )
}
