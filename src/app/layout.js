'use client'
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}
        <ProgressBar
          height="6px"
          color="#ff7720"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  )
}
