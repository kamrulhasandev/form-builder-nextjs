'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react'

function ErrorPage({error}: {error: Error}) {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
        <h2 className='text-4xl font-bold'>SomeThing went wrong</h2>
        <Button asChild>
            <Link href={'/'}>
                Go back to home
            </Link>
        </Button>
    </div>
  )
}

export default ErrorPage