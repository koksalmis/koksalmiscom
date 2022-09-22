import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a>about me</a>
        </Link>
        <Link href="/blog">
          <a>posts</a>
        </Link>
      </nav>
    </header>
  )
}
