import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";


const menuOptions=[
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'History',
        path: '/dashboard/history'
    },
    {
        id: 3,
        name: 'Pricing',
        path: '/dashboard/billing'
    },
    {
        id: 4,
        name: 'Profile',
        path: '/dashboard'
    }
]
function AppHeader(){
    return (
        <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40 '>
            <Image src={'/logo.svg'} alt='logo' width={40} height={20}/>
              <div className="hidden md:flex gap-12 items-center text-sm font-medium text-gray-700 dark:text-gray-200">
        {menuOptions.map((option) => (
          <Link key={option.id} href={option.path}>
            <h2 className="hover:font-bold  cursor-pointer transition-all">
              {option.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="ml-4">
        <UserButton />
      </div>
    </div>
  );
}

export default AppHeader;