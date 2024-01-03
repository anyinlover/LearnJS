import './tailwind.css'
import siteMetaData from '@/data/siteMetadata'

export const metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
