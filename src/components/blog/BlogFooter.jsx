import { Link } from 'react-router-dom';

export default function BlogFooter() {
  return (
    <footer className="blog-footer">
      <div>© {new Date().getFullYear()} Macro Coats Pvt Ltd · All rights reserved</div>
      <div>
        <Link to="/">macrocoats.in</Link>
        &nbsp;·&nbsp;
        <a href="mailto:info@macrocoats.in">info@macrocoats.in</a>
        &nbsp;·&nbsp;
        Chennai, India
      </div>
    </footer>
  );
}
