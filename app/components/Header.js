import Link from 'next/link'
import React from 'react'

const Header = () => {
  const links = [
    'about us',
    'our collections',
    'design inspiration',
    'our projects',
    'locations',
  ]

  return (
    <header className="h-[12vh] w-full flex items-center justify-between px-12">
      {links.map((link) => (
        <Link key={link} href="/" className="capitalize">
          {link}
        </Link>
      ))}
    </header>
  )
}

export default Header
