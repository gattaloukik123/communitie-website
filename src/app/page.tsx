import Image from "next/image";
import localFont from '@next/font/local'

const nortblack = localFont({
  src: [
    {
      path: 'FFNort-Black.ttf',
      weight: '400'
    }
  ],
  variable: '--font-nort-black'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`z-10 max-w-5xl w-full items-center justify-end ${nortblack.variable} text-sm lg:flex`}>
        <a 
          href="/" 
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          rel="noopener noreferrer"
        >
          Partner With Us
        </a>
      </div>

      <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/cmt_final.svg"
          alt="Communitie Logo"
          width={550}
          height={107}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Habits@Communitie
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Let&apos;s grow together as we embark on a journey of self-improvement and personal growth.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Culture@Communitie
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Let&apos;s share stories, exchange recipes, dance our heart out and immerse ourselves in the beauty of our diversity.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sports@Communitie
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Let&apos;s play together! Whether you are a seasoned pro or just enjoy shooting hoops with friends theres a place for everyone here.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Profession@Communitie
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Let&apos;s create together! Making visually stunning engaging videos, for shutterbugs to capture and exploring the cutting edge of technology and innovation.
          </p>
        </a>

        {/* <div className="group rounded-lg">
          <Image
            className="relative"
            src="/fyt.svg"
            alt="Communitie Logo"
            width={450}
            height={30}
          />
        </div> */}

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Business Owners@Communitie
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Let&apos;s build dreams together calling all entrepreneurs to cheer you on every step of the way.
          </p>
        </a>
      </div>
    </main>
  );
}
