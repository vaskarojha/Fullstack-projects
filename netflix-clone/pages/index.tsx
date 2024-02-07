import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next'
import {getSession, signOut} from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent:false
      }
    }
  }
  return {
    props:{}
  }

}

export default function Home() {
  const {data:user}= useCurrentUser()
  return (
    <>
    <h1 className="text-red-300">Hello</h1>
    <p className='text-white'>Logged in as :{user?.name}</p>
    <button onClick={()=>signOut()} className='text-white bg-green-400 p-4'>Logout</button>
    </>
  )
}
