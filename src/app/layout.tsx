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
            <a href="/" className="brand">The Scholar</a>
            <div className="nav-links">
              <a href="/">Prologue</a>
              <a href="/about">About</a>
              <a href="/experience">Expertise</a>
              <a href="/writing">Works</a>
              <a href="/contact">Correspond</a>
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
