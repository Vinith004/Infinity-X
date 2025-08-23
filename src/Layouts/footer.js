import "../Styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; Copyright. All rights reserved. {year}</p>
    </footer>
  );
}

export default Footer;
