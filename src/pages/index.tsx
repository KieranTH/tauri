import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen relative flex-col items-center justify-start gap-10 p-24 ${inter.className}`}
    >
      <div className='w-5/6 bg-slate-200 p-5 rounded-lg shadow flex flex-col gap-5 items-center'>
        <h3 className='font-bold'>Tauri App</h3>
      </div>
      <div className='w-5/6 bg-slate-200 p-5 rounded-lg shadow flex flex-col gap-5 items-center'>
        <h3 className='font-bold'>Tauri App</h3>
      </div>
      <div className='w-5/6 bg-slate-200 p-5 rounded-lg shadow flex flex-col gap-5 items-center'>
        <h3 className='font-bold'>Tauri App</h3>
      </div>
    </main>
  )
}
