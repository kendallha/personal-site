import Link from 'next/link';

const Navbar = () => (
  <header>
    <nav>
    <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Navbar;