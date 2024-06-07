import Image from "next/image";

export default function Advertise() {
  return (
    <>
      <div className="bg-gray-100 hidden md:block">
        <div className="flex p-4 ">
          {/* Left column */}
          <div className="flex-1 p-1 bg-gray-200 rounded-l-md">
            <img src="/images/image1.avif" alt="" className="h-full" />
          </div>

          {/* Middle column */}
          <div className="flex w-3/4 p-4 bg-yellow-100 shadow-xl rounded-lg">
            <div className="mt-4 w-1/2 p-4">
              <h2 className="text-xl font-bold">
                Win this setup for your home
              </h2>
              <p className="text-gray-700 mt-2">
                Become part of those who are on the race to win a new setup for
                their home
              </p>
              <p>
                do not be felt out in this as you also want the best setup
                possible for your home
              </p>
              <button type="button" className="btn-primary mt-6">
                Try your lack
              </button>
            </div>
            <Image
              src="/images/setup1.jpg"
              alt="Advert Image"
              width={500}
              // fill
              height={300}
              className="w-1/2 h-auto rounded-xl"
            />
          </div>

          {/* Right column */}
          <div className="flex-1 p-1 bg-gray-200 rounded-r-md">
            <img src="/images/image2.avif" className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
