import Link from "next/link";
import Image from "next/image";

const categories = [
   {
    name: "Speakers",
    image: "/images/speaker.avif",
    href: "/artists?category=Speaker",
  },
  {
    name: "Singers",
    image: "/images/singer.avif",
    href: "/artists?category=Singer",
  },
  {
    name: "Dancers",
    image: "/images/dancer.avif",
    href: "/artists?category=Dancer",
  },
   {
    name: "Magicians",
    image: "/images/magician.avif", 
    href: "/artists?category=Magician",
  },
 
  { name: "DJs", image: "/images/dj.avif", href: "/artists?category=DJ" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className=" bg-cyan-700 text-white py-20 px-4 text-center  shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Artistly</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Your go-to platform to book the best performing artists for your
          events, making your special occasions unforgettable.
        </p>
        <Link href="/artists">
          <button className="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out text-lg">
            Explore Artists
          </button>
        </Link>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group block">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-filter duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-25 flex items-center justify-center transition-all duration-300">
                    <span className="text-white text-2xl font-bold drop-shadow-lg group-hover:text-3xl transition-all duration-300">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
