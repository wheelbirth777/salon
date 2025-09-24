export default function QuoteSection() {
  return (
    <section className="relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[360px] lg:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/appointment-image2.webp')",
            }}
          />
        </div>

        {/* Right Side - Overlapping Panel */}
        <div
          className="
            relative   flex items-center justify-center p-8 lg:p-12
            z-10 lg:-ml-24 lg:rounded-l-3xl  
          "
        >
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-[#d7b56d] bg-opacity-90 p-6 rounded-md shadow-lg">
              <h2 className="text-center text-white text-2xl font-serif mb-4">
                Request A Quote
              </h2>
              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="col-span-1 p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="col-span-1 p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="col-span-1 p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="col-span-1 p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="col-span-1 p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="col-span-1 p-2 rounded"
                />
                <textarea
                  placeholder="Message"
                  className="col-span-2 p-2 rounded"
                  rows={3}
                ></textarea>
                <button
                  type="submit"
                  className="col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                  SUBMIT REQUEST
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="text-gray-800 font-serif">
              <p className="text-sm text-[#ba9d66] mb-2">
                Wellness Spa Retreats
              </p>
              <h2 className="text-2xl font-bold mb-4">
                Services that help our customers meet
              </h2>
              <p className="text-sm mb-4 text-gray-600">
                With over four decades of experience providing solutions to
                large-scale enterprises throughout the globe, we offer
                end-to-end.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span>Our mission is to design, innovative</span>
                  <span>&rarr;</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Purelax seeks to be a premier</span>
                  <span>&rarr;</span>
                </div>
                <div className="flex justify-between pb-2 text-[#d6a55f] font-semibold">
                  <span>We will continue to build and nurture</span>
                  <span>&darr;</span>
                </div>
              </div>

              <p className="text-sm mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                condimentum cubilia eget, feugiat felis sociis ad augue senectus
                ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
