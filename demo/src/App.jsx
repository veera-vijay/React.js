import React from 'react'

export const App = () => {
  return (
    <>
      <div className="grid grid-cols-[250px_950px] gap-4 text-black min-h-screen">
        <div className="bg-red-300 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB7ReKghSxNBxCnrUQ_sAxK5cWm6SQ3cV8w&s"
            alt="Profile"
            className="w-full rounded-full mb-4"
          />
          <h1 className="font-bold text-lg">Portfolio</h1>
          {/* <h5 className="text-sm text-gray-600">Template by W3.CSS</h5> */}

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 21h1" />
                <path d="M14 3h1" />
                <path d="M19 3a2 2 0 0 1 2 2" />
                <path d="M21 14v1" />
                <path d="M21 19a2 2 0 0 1-2 2" />
                <path d="M21 9v1" />
                <path d="M3 14v1" />
                <path d="M3 9v1" />
                <path d="M5 21a2 2 0 0 1-2-2" />
                <path d="M5 3a2 2 0 0 0-2 2" />
                <path d="M7 12h10" />
                <path d="M7 16h6" />
                <path d="M7 8h8" />
                <path d="M9 21h1" />
                <path d="M9 3h1" />
              </svg>
              <span>Portfolio</span>
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <span>About</span>
            </div>

            <div className="flex items-center  border-white gap-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className=" bg-gray-700 p-6 w-full">
          <h1>My Portfolio</h1>
          <div className="flex ">
            <h5 className="font-bold text-black mt-4 ml-2">filter:</h5>
            <h5 className="bg-black border-2 text-white   mt-2 p-2 w-14 flex justify-center">
              All
            </h5>
            <div className=" flex ml-2 bg-white border-2  border-white gap-2  mt-2 text-black p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-gem-icon lucide-gem"
              >
                <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
                <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
                <path d="M2 9h20" />
              </svg>
              Design
            </div>
            <div className=" flex ml-2 bg-white border-2 border-white gap-2  mt-2 text-black p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-images-icon lucide-images"
              >
                <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
                <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
                <circle cx="13" cy="7" r="1" fill="currentColor" />
                <rect x="8" y="2" width="14" height="14" rx="2" />
              </svg>{" "}
              Photos
            </div>
          </div>
          <div className="h-3 bg-gray-500 w-full mt-4"></div>
          <div className="grid p-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 text-black mt-4 gap-cols-4">
            <div>
              <img src="https://picsum.photos/id/104/300/200" />
              <p className="bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, mollitia dolore hic exercitationem sint porro adipisci
                voluptas minima possimus expedita optio delectus quam vitae.
                Maxime dolorem voluptates obcaecati facilis blanditiis!
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/16/300/200" />

              <div className="bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, mollitia dolore hic exercitationem sint porro adipisci
                voluptas minima possimus expedita optio delectus quam vitae.
                Maxime dolorem voluptates obcaecati facilis blanditiis!
              </div>
            </div>
            <div>
              <img src="https://picsum.photos/id/15/300/200" />
              <p className="bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, mollitia dolore hic exercitationem sint porro adipisci
                voluptas minima possimus expedita optio delectus quam vitae.
                Maxime dolorem voluptates obcaecati facilis blanditiis!{" "}
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/35/300/200" />
              <p className="bg-white ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, mollitia dolore hic exercitationem sint porro adipisci
                voluptas minima possimus expedita optio delectus quam vitae.
                Maxime dolorem voluptates obcaecati facilis blanditiis!
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/128/300/200" alt="Lion" />
              <p className="bg-white">
                Lion is the king of the jungle. They live in groups called
                prides. Lions are very powerful and majestic animals.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/129/300/200" alt="Tiger" />
              <p className="bg-white">
                Tiger is the largest wild cat. They have beautiful orange fur
                with black stripes. Tigers are excellent swimmers Tigers are
                excellent.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/130/300/200" alt="Elephant" />
              <p className="bg-white">
                {" "}
                Elephants are the largest land animals. They have long trunks
                and big ears. Elephants are very intelligent and have good
                memory.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/id/130/300/200" alt="Elephant" />
              <p className="bg-white">
                {" "}
                Elephants are the largest land animals. They have long trunks
                and big ears. Elephants are very intelligent and have good
                memory.
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold text-gray text-2xl mt-2 text-black">
              About Me
            </p>
            <p className="mt-4">
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
          <div>
            <p className="text-2xl mt-4 font-bold text-black">
              Technical Skills
            </p>
            <p className="mt-4 text-gray text-2xl">Photography</p>
            <div className="w-full bg-gray-300  h-8 overflow-hidden">
              <div
                className="bg-black   text-white text-center h-8 leading-8"
                style={{ width: "80%" }}
              >
                90%
              </div>
            </div>
            <p className="mt-4 text-gray text-2xl">webdesign</p>
            <div className="w-full bg-gray-300  h-8 overflow-hidden">
              <div
                className="bg-black   text-white text-center h-8 leading-8"
                style={{ width: "70%" }}
              >
                85%
              </div>
            </div>
            <p className="mt-4 text-gray text-2xl">Photoshop</p>
            <div className="w-full bg-gray-300  h-8 overflow-hidden">
              <div
                className="bg-black   text-white text-center h-8 leading-8"
                style={{ width: "60%" }}
              >
                80%
              </div>
            </div>
          </div>
          <div className="bg-white mt-2 text-black">
            <p className="text-3xl mt-2 p-2">Contact</p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-300 mt-2 ml-2 p-2 mb-4 grid justify-center">
                <div className="ml-8">
                  <svg
                    svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail-icon lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <p className="text-2xl -ml-8"> email@email.com</p>
              </div>
              <div className="bg-blue-300 mt-2 ml-2 p-2 mb-4 text-2xl grid justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pin-icon lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Chicago, US
              </div>
              <div className="bg-blue-300 mt-2 ml-2 p-2 text-2xl mb-4 grid justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                512312311
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto text-center">
              <p className="text-gray-400">
                © 2024 Your Website. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default  App