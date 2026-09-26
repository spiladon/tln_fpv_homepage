import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="logo">
          KRISTOFER<span>.</span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}