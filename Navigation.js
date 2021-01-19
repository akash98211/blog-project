import React from 'react';


const navLinks=[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Bollywood',
        path:'/bollywood'
    },
    {
        title:'Fitness',
        path:'/fitness'
    },
    {
        title:'Technology',
        path:'/technology'
    },
    {
        title:'Hollywood',
        path:'/hollywood'
    }
];

export default function Navigation() {
    return (
        
        <nav className="site-navigation">
        <span>My Siren Blog</span>
        <ul>
           {/* { navLinks.map((link)=> {
                   <li>
                        {link.title}
                    </li>
               })} */}
        </ul>
        </nav>
    )
}
