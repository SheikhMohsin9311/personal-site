import "./globals.css";

export const metadata = {
  title: "Sheikh Mohsin",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav">
            <a href="/" className="brand">Sheikh Mohsin</a>
            <div className="nav-links">
              <a href="/about">About</a>
              <a href="/experience">Experience</a>
              <a href="/writing">Writing</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        <main className="content">
          {children}
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Sheikh Mohsin</p>
        </footer>
      </body>
    </html>
  );
}
