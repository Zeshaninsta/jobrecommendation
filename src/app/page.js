import Image from "next/image";
import Hero from '@/app/(pages)/home/page'
import ResumeMaker from "./(pages)/Resume/page";
export default function Home() {
  return (
    <div className="w-full overflow-hidden min-h-screen">
      {/* <Hero /> */}
      <ResumeMaker />
    </div>
  );
}
