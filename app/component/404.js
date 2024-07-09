import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Image
        src="https://portfolio-rho-swart.vercel.app/images/logo/athrey-high-resolution-logo-white-transparent.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
      <p className="mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}
