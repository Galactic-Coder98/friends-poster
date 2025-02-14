import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-100 text-gray-800">
      {/* Header */}
      <header className="w-full p-6 text-center text-pink-600 text-3xl font-bold">
        💖 Happy Valentines 💖
      </header>

      {/* Profile Section */}
      <section className="w-full max-w-md p-4 bg-white shadow-md rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Best Friends Forever 💕</h2>
        <p className="text-sm text-gray-600">Cherishing memories, one smile at a time.</p>
        <div className="flex flex-col justify-center items-center my-4 gap-3">
          <div className="w-full sm:w-[350px] h-[150px] overflow-hidden rounded-full mx-2">
            <Image 
              src="/pic1.jpg" 
              width={360} 
              height={200} 
              alt="Friend 1" 
              className="object-cover object-center"
            />
          </div>
          <div className="w-full sm:w-[350px] h-[150px] overflow-hidden rounded-full mx-2">
            <Image 
              src="/pic2.jpg" 
              width={360} 
              height={200} 
              alt="Friend 2" 
              className="object-cover object-center"
            />
          </div>
          <div className="w-full sm:w-[350px] h-[150px] overflow-hidden rounded-full mx-2">
            <Image 
              src="/pic3.png" 
              width={360} 
              height={200} 
              alt="Friend 3" 
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Coffee & Boba Section */}
      <section className="mt-6 text-center">
        <h3 className="text-xl font-semibold">☕ Coffee & Boba Lover 🍵</h3>
        <p className="text-gray-600">A perfect day starts with coffee and ends with boba!</p>
      </section>

      {/* Favorite Artist Section */}
      <section className="mt-6 text-center">
        <h3 className="text-xl font-semibold">🎶 Rauw Alejandro 🎶</h3>
        <p className="text-gray-600">&quot;Dile a tu mai que no va&apos; a llegar a casa...&quot;</p>
        <Image 
          src="/Rauw.jpeg" 
          width={200} 
          height={150} 
          alt="Rauw Alejandro" 
          className="rounded-lg shadow-md mx-auto mt-2"
        />
      </section>

      {/* Footer */}
      <footer className="mt-2 p-4 text-gray-500 text-sm">
        Made with ❤️ Favorite Number: <span className="text-pink-600 font-bold">3</span>
      </footer>
    </div>
  );
}
