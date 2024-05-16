import Link from 'next/link'

import packageJson from '../../../../package.json'

export const Footer = () => {
  return (
    <footer className="max-w-7xl py-2 sticky mx-auto top-4 flex items-center text-sm">
      <Link target="_blank" href={'https://github.com/'}>
        <span>{packageJson.version}</span>
      </Link>
    </footer>
  )
}
