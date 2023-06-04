import Link from "next/link";
import { FC } from "react";

// type Props = {

// }

interface Props {

}

const Footer: FC<Props> = ({ }) => (
    <footer className="bg-white dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block my-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Zux Coder</a>. All Rights Reserved.</span>
    </footer>
)

export default Footer;