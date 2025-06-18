import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`hover:underline ${isActive(href) ? 'text-yellow-400 font-semibold' : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-800 p-4 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">Syscho | TechBlog</Link>
      </h1>
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        {navLink('/', 'Home')}
        {navLink('/blogs', 'Blogs')}
        {navLink('/blogs/java', 'Java')}
        {navLink('/blogs/javascript', 'JavaScript')}
        {navLink('/blogs/sql', 'SQL')}
        {navLink('/', 'About')}
      </div>
    </nav>
  );
}
