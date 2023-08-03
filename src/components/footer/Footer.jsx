import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="divider" />
      <p>
        Copyright &copy; {new Date().getFullYear()} by <span>Satya</span>
      </p>
    </footer>
  );
}

export default Footer;
