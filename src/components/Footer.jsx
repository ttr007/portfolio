import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>&copy; {year} Tyler Tran</p>
        <p>Built with React and Vite</p>
      </div>
    </footer>
  )
}