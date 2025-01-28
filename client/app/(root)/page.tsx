import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getHomeContent } from "../api/strapi";

const Home = async () =>  {
  const homeContent = await getHomeContent();

  if (!homeContent) {
    return <div>Failed to load content</div>
  }
  const {headline, description} = homeContent

  return (
    <div className="z-10">
      <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="mb-4 sm:mb-8 flex justify-center animate-slidein text-xs sm:text-sm/6">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing new products soon.
            <Link href="/products" className="font-bold text-accent-purple"> Read more →</Link>
          </div>
        </div>
      
        <div className="text-center animate-slidein">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {headline}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {description}
            </p>
        </div>
        <div className="flex gap-4 justify-center items-center mt-10 animate-slidein">
          <Button className="font-semibold bg-accent-purple">Shop now</Button>
          <Link href="/about" className="font-semibold">Learn more about us →</Link>
        </div>
      </section>
    </div>
  );
}

export default Home
