import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
const links = [['Home','/'],['Product','/product'],['Technology','/technology'],['Pricing','/pricing'],['Blog','/blog'],['About','/about'],['Careers','/careers'],['Contact','/contact']];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><GraduationCap size={21}/></span><span>Edu<span>Pulse</span></span></Link>
      <nav className={open ? 'main-nav open' : 'main-nav'}>
        {links.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}
        <div className="mobile-actions"><Link className="button button-outline" to="/login" onClick={()=>setOpen(false)}>Login</Link><Link className="button button-primary" to="/get-started" onClick={()=>setOpen(false)}>Get started <ArrowUpRight size={16}/></Link></div>
      </nav>
      <div className="nav-actions"><Link className="login-link" to="/login">Login</Link><Link className="button button-primary nav-cta" to="/get-started">Get started <ArrowUpRight size={16}/></Link></div>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>;
}