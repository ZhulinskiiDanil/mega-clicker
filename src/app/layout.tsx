import './globals.scss'

// Components
import { WithProviders } from './WithProviders'

export const metadata = {
  title: 'Mega Clicker',
  description: 'Mega Clicker by Zhulinskii Danil',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <WithProviders>
          { children }
        </WithProviders>
      </body>
    </html>
  )
}
