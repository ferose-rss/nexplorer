import Link from "next/link";
// import { useRouter } from "next/navigation";

// const router = useRouter();

export const metadata = {
    title: 'Products -Nexplorer'
}

// const handleClick = () => {
//     console.log("Placing order");
//     router.push("/");
// };

export default function Products() {
    return <div>
        <h1>My product lists</h1>
        <ul>
            <li>
                <Link href='/products/solar-panels' legacyBehavior>
                    <a data-name="solar-panels">Solar Panels</a>
                </Link>
            </li>
            <li>
                <Link href='/products/batteries'>
                    Batteries
                </Link></li>
            <li>
                <Link href='/products/diesel-generators' replace>
                    Diesel Generators
                </Link>
            </li>
        </ul>
    </div>
}


