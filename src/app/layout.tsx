import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Dietactics',
    description: 'Your destination for innovative food and beverage solutions. Specializing in functional foods, sports drinks, and fruit juices, we provide top-tier design, packaging, and marketing services. Partner with us for cutting-edge products and strategies that cater to the health-conscious market. ',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
