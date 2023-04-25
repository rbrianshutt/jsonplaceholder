import './globals.css'

export const metadata = {
  title: 'Precious Metals Prices',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}