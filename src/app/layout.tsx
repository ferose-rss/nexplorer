export const metadata = {
  title: 'Nexplorer',
  description: 'Learning NextJs 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
