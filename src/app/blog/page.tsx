'use client'
import { usePathname } from "next/navigation";
import { FC } from "react";


interface Props {

}

const Blog: FC<Props> = () => {
    const pathName = usePathname()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>Blog Page</p>
            <p>{pathName}</p>
        </main>
    );
}

export default Blog;
