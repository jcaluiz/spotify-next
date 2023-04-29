import MainContainer from './components/MainContainer'
import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">
      <MainContainer>
        {children}
      </MainContainer>
      </body>
    </html>
  )
}
