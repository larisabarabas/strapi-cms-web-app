import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getHomeContent } from "../api/strapi";

const Home = async () =>  {
  const homeContent = await getHomeContent();
  const {headline, description} = homeContent!

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#BF99A3] to-[#51358C] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing new products soon.
            <Link href="/products" className="font-bold text-accent-purple"> Read more →</Link>
          </div>
        </div>
      
        <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {headline}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {description}
            </p>
        </div>
        <div className="flex gap-4 justify-center items-center mt-10 ">
          <Button className="font-semibold bg-accent-purple">Shop now</Button>
          <Link href="/about" className="font-semibold">Learn more about us →</Link>
        </div>

      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-2/3 aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#51358C] to-[#BF99A3] opacity-30 sm:w-[40rem]"
        />
      </div>
    </div>
  );
}

export default Home
