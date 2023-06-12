import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export const metadata = {
  title: 'Car Hub',
  description: 'Find the best and cheapest cars in our zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
