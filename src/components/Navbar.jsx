
import { useEffect ,useState} from "react";

const LINKS=[
    {label:"Home",href:"#home" },
    {label:"How it works",href:"#how-it-works" },
    {label:"Features",href:"#features" },
    {label:"Pricing",href:"#pricing" },
]

const DESKTOP_QUERY = "(min-width:1024px)";

export default function  Navbar(){
    const[open,setOpen] = useState(false);
    const close = ()=>setOpen(false);
    useEffect(()=>{
        const mql = window.matchMedia(DESKTOP_QUERY);
        const onChange = (e) =>{
            if (e,matches) setOpen(false);
        };
        mql.addEventListener("change",onChange);
        return ()=>mql.removeEventListener("change",onChange);

    },[])

    useEffect(()=>{
        const onKey =(e) =>e.key ==="Escape" && setOpen(false);
        document.addEventListener("keydown",onKey);
        document.body.style.overflow = open ? "hidden": "";
        return () =>{
            document.removeEventListener("keydown",onKey);
             document.body.style.overflow = "";
        };
    },[open]);
    return(
        <header className="navbar">
             <div className="navbar__bar">
             <a href="#home" className="logo"> Logo </a>

             <button
             type="button"
             className="navbar__toggle"
             arial-label = "Open menu"
             arial-expanded = {open}
             arial-controls = "primary-menu"
             onClick = {()=>setOpen(true)} >
                   
                 <span/>
                   <span/>
                    <span/>
             </button>

             <nav 
             id="primary=menu"
             className={`menu ${open ? "menu--open": ""}`}
             arial-label = "primary"
             >
             
            
            <div className="menu__head">
              <a href="#home" className="logo logo--light" onClick={close}>Logo</a>
              <button 
              type="button"
              className="menu__close"
              aria-label="Close menu"
              onClick={close}
              >
              <svg viewBox="0  0 24 24" width="22" height="22" aria-hidden="true">
                <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentcolor"
                strokeWidth="2.2"
                strokeLinecap="round"/>
              </svg>
              </button>
    </div>
              <ul className="menu__links">
               {LINKS.map((l)=>(
                <li key={l.label}>
                    <a href={l.href} onClick={close}> {l.label}</a>
                </li>

               ))}
              
              </ul>
              
             <a href="#create-account" className="btn" onClick={close} > create account</a>
             </nav>
            </div>

             
        </header>
    );
}