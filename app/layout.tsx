import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Typing Practice Novels — Learn Typing with Classic Literature',
  description: 'Gamified typing practice using public domain novels. Track WPM, earn achievements, and improve your typing while reading great literature.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2472df27-ae8c-4003-ab98-6fbaa7e19f9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
