export default function Footer() {
  return (
    <footer className="w-full bg-gray-400 border-t border-gray-400 pt-4 pb-2 text-sm md:text-base">
      <div className="max-w-6xl mx-auto flex flex-row gap-4 md:gap-8 px-1 md:px-2 min-w-0">
        {/* Left: Information */}
        <div className="flex-1 min-w-0">
          <div className="text-lg md:text-2xl font-normal mb-2 md:mb-4">
            Information
          </div>
          <ul className="space-y-1 mb-2 md:mb-4">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track Your Order
              </a>
            </li>
          </ul>
          <div className="mb-1">Contact Us:</div>
          <div className="flex items-center mb-1">
            <span className="mr-2 w-4 h-4 md:w-5 md:h-5 inline-block align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#ffffff"
                width="16"
                height="16"
                className="md:w-5 md:h-5"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </span>
            +234 9032427852
          </div>
          <div className="flex items-center">
            <span className="mr-2 w-4 h-4 md:w-5 md:h-5 inline-block align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#ffffff"
                width="16"
                height="16"
                className="md:w-5 md:h-5"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </span>
            edelquinn.ng@gmail.com
          </div>
        </div>
        {/* Right: Stay Connected */}


        
        <div className="flex-1 min-w-0">
          <div className="text-lg md:text-2xl font-normal mb-2 md:mb-4">
            Stay Connected
          </div>
          <div className="flex items-center gap-2 md:gap-4 mb-2 flex-wrap">
            <span className="w-5 h-5 md:w-7 md:h-7 inline-block align-middle">
              {/* Facebook SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#ffffff"
                width="20"
                height="20"
                className="md:w-7 md:h-7"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
            <span className="w-5 h-5 md:w-7 md:h-7 inline-block align-middle">
              {/* Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#ffffff"
                width="20"
                height="20"
                className="md:w-7 md:h-7"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
            <span className="w-5 h-5 md:w-7 md:h-7 inline-block align-middle">
              {/* Heart SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#ffffff"
                width="20"
                height="20"
                className="md:w-7 md:h-7"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </span>
            <span className="w-5 h-5 md:w-7 md:h-7 inline-block align-middle">
              {/* Share SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#ffffff"
                width="20"
                height="20"
                className="md:w-7 md:h-7"
              >
                <path d="M352 320c-22.06 0-41.98 8.954-56.98 23.42l-120.5-60.25C175.5 274.2 176 270.1 176 266.7c0-3.367-.5313-7.484-1.484-11.42l120.5-60.25C310 183 329.9 192 352 192c53.02 0 96-42.98 96-96S405 0 352 0s-96 42.98-96 96c0 3.367 .5313 7.484 1.484 11.42l-120.5 60.25C70 137.8 50.06 128 28 128C-25.02 128-68 170.1-68 224s42.98 96 96 96c22.06 0 41.98-8.954 56.98-23.42l120.5 60.25C273.5 337.8 272 341.9 272 345.3c0 53.02 42.98 96 96 96s96-42.98 96-96S405 320 352 320z" />
              </svg>
            </span>
            <span className="ml-1 md:ml-2 text-xs md:text-sm">
              FOLLOW US ON INSTAGRAM
            </span>
          </div>



          
          <div className="mb-2 md:mb-4">SIGN UP FOR OUR NEWSLETTER</div>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="enter your email address"
              className="border border-gray-500 px-1 py-1 md:px-2 text-xs md:text-sm text-gray-700 bg-white"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-2 md:px-4 py-1 text-xs md:text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
