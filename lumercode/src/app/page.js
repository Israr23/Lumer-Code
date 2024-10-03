"use client";
import Image from "next/image";
import logo from "/src/app/public/logo.svg";
import boyImage from "/src/app/public/boy.png";
import withAuth from "/src/app/privateRoute/withAuth";
function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image src={logo?.src} alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg">Lumaracode</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
        </nav>
        <a
          href="#"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left side (Text) */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empower Your Business With Stunning Design!
          </h1>
          <p className="text-gray-600">
            Lumaracode is a digital design and development studio. We design and
            develop astonishing websites and mobile apps.
          </p>
          <div className="flex space-x-4">
            <a
              href="/sign_up_in?type=in"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Log In
            </a>
            <a
              href="/sign_up_in?type=up"
              className="px-6 py-3 bg-transparent border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="relative mt-10 md:mt-0">
          <div className="relative z-10">
            <Image
              src={boyImage?.src}
              alt="Person"
              width={256}
              height={256}
              className="rounded-full"
            />
          </div>
          <div className="absolute top-6 left-20 w-24 p-4 bg-white rounded-lg shadow-lg">
            <p className="text-sm font-semibold">Choose your card</p>
            <Image src="/card.png" alt="Card" width={96} height={64} />
          </div>
          <div className="absolute bottom-6 right-16 w-24 p-4 bg-white rounded-lg shadow-lg">
            <p className="text-sm font-semibold">Project accepted!</p>
            <Image src="/thumb.png" alt="Thumb" width={32} height={32} />
          </div>
        </div>
      </section>

      {/* Companies Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <Image
            src="/airbnb.svg"
            alt="Airbnb"
            width={100}
            height={24}
            className="grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/google.svg"
            alt="Google"
            width={100}
            height={24}
            className="grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/microsoft.svg"
            alt="Microsoft"
            width={100}
            height={24}
            className="grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/fedex.svg"
            alt="FedEx"
            width={100}
            height={24}
            className="grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/amazon.svg"
            alt="Amazon"
            width={100}
            height={24}
            className="grayscale hover:grayscale-0 transition"
          />
        </div>
      </section> */}
    </div>
  );
}
export default withAuth(Home);

