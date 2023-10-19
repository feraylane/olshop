import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <main>
    <p>Hello World</p>
    <div className='p-4'>
    <Button className=''>click me</Button>
    <UserButton afterSignOutUrl="/"/>
    </div>

   </main>
  )
}
