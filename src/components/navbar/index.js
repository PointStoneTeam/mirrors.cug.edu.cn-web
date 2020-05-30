import Link from 'next/link'


import { useState } from 'react';

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 z-10 bg-white w-full h-12 md:h-16">
      <div className="container flex items-center justify-between py-0 px-6 my-0 mx-auto h-full">
        <div className="text md:text-xl">
          <Link href="/"><a>中国地质大学开源镜像站</a></Link>
        </div>
        <div className="hidden md:block text-sm">
          <Link href="/blog"><a className="mr-4">Blog</a></Link>
          <Link href="/blog"><a className="mr-4">Docs</a></Link>
          <Link href="/blog"><a className="">点石团队</a></Link>
        </div>
        <div className={`md:hidden ${expand ? 'expand' : ''}`} onClick={() => { setExpand((v) => !v) }}>
          <span className="menu"></span>
          {
            expand && (
              <>
                <div className="fixed top-12 bg-white w-full left-0 z-20">
                  <ul className="list-none w-full px-12 py-3 text-sm text-gray-700 divide-y divide-gray-300">
                    <li className="py-2"><Link href="/blog"><a className="block w-full">Blog</a></Link></li>
                    <li className="py-2"><Link href="/blog"><a className="block w-full">Docs</a></Link></li>
                    <li className="py-2"><a href="https://www.pointstone.org" target="_blank" className="block w-full">点石团队</a></li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)' }}
                  className="fixed bottom-0  left-0 w-full right-0 top-12 z-10">
                </div>
              </>
            )
          }
        </div>
      </div>
      <style jsx>{`
        .menu{
          display: block;
          position: relative;
          width: 40px;
          height: 20px;
          z-index: 1;
        }
        .menu::before{
          transform-origin: 100% 100%;
          transform: rotate(40deg) scaleY(1.5);
          right: 50%;
          transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1),
                      transform-origin 0.3s cubic-bezier(0.86, 0, 0.07, 1);
        }
        .menu::after{
          transform-origin: 0% 100%;
          transform: rotate(-40deg) scaleY(1.5);
          left: 50%;
          transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1),
                      transform-origin 0.3s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .expand .menu::before{
          transform-origin: 100% 0%;
          transform: rotate(-40deg) scaleY(1.5);
        }

        .expand .menu::after{
          transform: rotate(40deg) scaleY(1.5);
        }

        .menu::before, .menu::after{
          content: "";
          display: block;
          position: absolute;
          top: 14px;
          width: 12px;
          height: 1px;
          z-index: 1;
          background-color: #000;
        }
      
      `}</style>
    </nav >
  )
}