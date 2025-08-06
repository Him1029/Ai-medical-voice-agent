"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

export type UsersDetail={
  name:String,
  email:string,
  credits:number
}

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const {user}=useUser();
  const [userDetail, setuserDetail]=useState<any>();
  useEffect(()=>{
    user&&CreateNewUser();
  },[user])


  const CreateNewUser  = async() =>{
    const result = await axios.post('/api/users');
    console.log(result.data);
    setuserDetail(result.data);
  }


    return (
        <div>
          <UserDetailContext.Provider value={{userDetail, setuserDetail}}>
          {children}
          </UserDetailContext.Provider>
          </div>
    )
}

export default Provider