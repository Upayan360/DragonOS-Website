import './globals.css'

export const metadata = {
  title: 'DragonOS — The AI Operating System for Indian Businesses',
  description: 'DragonOS gives every employee their own AI assistant. Automate leads, workflows, and decisions. Built for Indian SMBs. Starting at ₹2,999/month.',
  openGraph: {
    title: 'DragonOS — AI Operating System for Indian Businesses',
    description: 'Every employee gets their own AI assistant. Automate leads, workflows, and decisions. Built in Kolkata for Indian SMBs.',
    url: 'https://dragonos.co.in',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
