import React from 'react'

import { SignUp } from '@clerk/nextjs'  

function SignUpPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
        <SignUp/>
    </div>
  )
}

export default SignUpPage