
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 overflow-hidden ">
      <h2 className="text-5xl font-bold mb-4 text-accent-purple">We can&apos;t find this page</h2>
      <p className="text-xl mb-4">Sorry, the page you are looking for doesn&apos;t exist or has been moved</p>
      <Link className={buttonVariants({ variant: "default" })} href="/">Return Home</Link>
    </div>
  );
}