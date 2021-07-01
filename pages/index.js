import Head from "next/head"
import Image from "next/image"

const team = [
  {
    name: "Lee Robinson",
    role: "Head of Developer Relations",
    image: "/lee.jpg",
    twitterUrl: "https://twitter.com/leeerob",
    githubUrl: "https://github.com/leerob",
  },
  // {
  //   name: "Coming Soon",
  //   role: "Coming Soon",
  //   image: "/question.png",
  //   twitterUrl: "https://twitter.com/",
  //   githubUrl: "https://github.com/",
  // },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Create Dev Rel Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <div className="max-w-6xl py-24 mx-auto text-center bg-white border shadow-sm px-36 rounded-xl">
          <div>
            <h1 className="text-4xl font-extrabold">
              Meet the Developer Relations Team
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Helping developers build and publish wonderful things (or
              something else here).
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-16 space-x-20">
            {team.map((member) => (
              <div>
                <Image
                  src={member.image}
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt="Avatar"
                ></Image>
                <p className="mt-4 text-xl font-bold">{member.name}</p>
                <p className="text-gray-500">{member.role}</p>
                <div className="flex justify-center mt-2 space-x-5">
                  <a href={member.twitterUrl} target="_blank">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href={member.githubUrl} target="_blank">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      shapeRendering="geometricPrecision"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-20 bg-white border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
