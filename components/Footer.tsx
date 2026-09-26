export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Kristofer</span>
        <span>Made with Next.js</span>
      </div>
    </footer>
  );
}