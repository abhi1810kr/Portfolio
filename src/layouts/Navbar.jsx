import { useEffect, useState } from "react"
import Button from "../components/Button"
import {Menu, X} from 'lucide-react'

const navLinks = [
{href:"#about", label:"About"},  
{href:"#projects", label:"Projects"},  
{href:"#experience", label:"Exprience"},    
{href:"#testimonials", label:"Testimonials"}
]


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(()=>{

      const handlescroll = ()=>{
        if(window.scrollY > 50){
          setIsScroll(true);
        }
        else{
          setIsScroll(false);
        }
      }


      window.addEventListener("scroll", handlescroll);

      return ()=> window.removeEventListener("scroll", handlescroll);
    },[])
  return (
    <div className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScroll ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full shadow-md hover:shadow-[0_0_20px_#20b2a6] transition-shadow duration-300" />
        </a>

        {/** Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link, index) => (
                    <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                ))}
            </div>
        </div>

        <div className="hidden md:block">
            <a href="#contact"><Button size="sm">Contact Me</Button></a>
        </div>

        <button className="md:hidden cursor-pointer p-2 text-foreground">
                {isMobileMenuOpen ? <X size={24} onClick={()=>setIsMobileMenuOpen((prev) => !prev)} /> : <Menu onClick={()=>setIsMobileMenuOpen((prev) => !prev)} size={24}/>}
        </button>
      </nav>

      {/** Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
             {navLinks.map((link, index) => (
                    <a onClick={()=> setIsMobileMenuOpen(false)} href={link.href} key={index} className="py-2 text-lg text-muted-foreground hover:text-foreground">{link.label}</a>
                ))}
                <Button onClick={()=> setIsMobileMenuOpen(false)}>Contact Me</Button>
        </div>      
      </div>
      )}
    </div>
  )
}

export default Navbar
