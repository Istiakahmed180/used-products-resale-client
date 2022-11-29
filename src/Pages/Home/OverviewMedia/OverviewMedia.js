import React from "react";

const OverviewMedia = () => {
  return (
    <div className="my-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">
            The Best Dell <br /> Laptops for 2022
          </h1>

          <iframe
            className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
            src="https://www.youtube.com/embed/2MXtOocAVXc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                    Dell Inspiron 16 Plus (7620)
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Dell's latest Inspiron 16 Plus isn't a perfect desktop
                    replacement, but it offers robust features at a reasonable
                    price, with solid performance from its 12th Generation Intel
                    H-series CPU and Nvidia RTX graphics.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                    HP ENVY x360 Convertible Laptop 13t-bf000
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Seamlessly create with the compact HP Envy x360 13". With
                    the color-calibrated display, you get the ultimate color
                    accuracy. Stay productive with a long battery life and the
                    Intel® Processor[1] and graphics. Combine the power of
                    devices with HP Palette. Look your best on the 5MP[2]
                    GlamCam with Appearance Filter, Backlight Adjustment & Auto
                    Frame.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                    Lenovo Yoga 7i 14 Gen 7 (2022)
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Lenovo's 14-inch Yoga 7i Gen 7 is the most polished in a
                    long line of successful 2-in-1 laptops, with a stellar
                    design and superb battery life.A rotating soundbar, a
                    cinematic OLED display, and Intel 12th Generation silicon
                    make Lenovo's Yoga 9i Gen 7 a multimedia marvel among
                    14-inch 2-in-1 convertible laptops.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                    Lenovo ThinkPad T14s
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Lenovo's Ryzen-based ThinkPad T14s is by and large a
                    spectacular success. Our one caveat: The AMD model of this
                    14-inch business thin-and-light tops out at a 1080p
                    screen.Lenovo's IdeaPad 1 14 proves that you can have a
                    decent, and even enjoyable, Windows 10 experience on an
                    under-$300 laptop, as long as you don't need USB-C ports and
                    can make do with a basic processor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewMedia;
