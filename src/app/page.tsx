'use client'
import { usePathname } from "next/navigation";
import { FC } from "react"

interface Props {

}

const Home: FC<Props> = ({ }) => {
  const pathName = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home Page</p>
      <p>{pathName}</p>
    </main>
  )
}

export default Home;