import React from "react";

const ContactInformation = () => {
  return (
    <section className="py-10 mt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-800 mb-4">
              We are here to assist you. Feel free to reach out to us via phone
              or email for any inquiries or support you may need.
            </p>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm2 14.5a7.51 7.51 0 01-2.78 0 3 3 0 01-3.442-3.443A7.51 7.51 0 016.5 8a7.51 7.51 0 010-2.78A3 3 0 0110 2.5a3 3 0 013.442 3.442A7.51 7.51 0 0113.5 8a7.51 7.51 0 010 2.78A3 3 0 0110 14.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">Phone: +8801734604086</p>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm4.518 14.518c-.432-.217-.89-.326-1.362-.326-.472 0-.93.109-1.362.326-.432.217-.805.5-1.12.85-.315.35-.536.748-.664 1.194-.128.445-.192.892-.192 1.34v.455H6v-.455c0-.448-.064-.895-.192-1.34-.128-.446-.349-.844-.664-1.194a3.383 3.383 0 00-1.12-.85 5.996 5.996 0 00-1.362-.326C4.477 12.608 4 11.354 4 10c0-1.354.477-2.608 1.344-3.518a5.996 5.996 0 011.362-.85c.432-.217.89-.326 1.362-.326.472 0 .93.109 1.362.326.432.217.805.5 1.12.85.315.35.536.748.664 1.194.128.445.192.892.192 1.34v.455h-1.78v-.455c0-.389-.065-.779-.192-1.165a3.383 3.383 0 00-.664-1.194 3.778 3.778 0 00-1.12-.85A4.91 4.91 0 0010 4c.472 0 .93.109 1.362.326a3.778 3.778 0 011.12.85 3.383 3.383 0 01.664 1.194c.128.386.192.776.192 1.165v.455H14v-.455c0-.448.064-.895.192-1.34.128-.446.349-.844.664-1.194a3.383 3.383 0 011.12-.85C15.523 7.392 16 8.646 16 10c0 1.354-.477 2.608-1.344 3.518z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">Email: Istiakahmed180@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100038620875047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.373 2 2 5.373 2 10c0 4.626 3.373 8 8 8s8-3.374 8-8c0-4.627-3.373-8-8-8zm0 14v-4h-2v-2h2v-2.1c0-2.831 1.862-4.9 4.4-4.9.733 0 1.437.086 2.1.246v2.18h-1.4c-1.12 0-1.34.533-1.34 1.318V10h2l-.2 2h-1.8v4h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/IstiakA93212520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.373 2 2 5.373 2 10c0 4.627 3.373 8 8 8s8-3.373 8-8c0-4.627-3.373-8-8-8zm4.464 7.396v.278c0 3.89-2.967 8.357-8.357 8.357A8.399 8.399 0 0 1 1.6 14.557c.192.022.39.028.588.028 1.805 0 3.468-.615 4.788-1.648a2.95 2.95 0 0 1-2.756-2.046 2.917 2.917 0 0 0 1.327-.049 2.952 2.952 0 0 1-2.362-2.89v-.037a2.92 2.92 0 0 0 1.328.37A2.945 2.945 0 0 1 5.66 6.973a8.31 8.31 0 0 0 6.03 3.053 2.978 2.978 0 0 1-.076-.666 2.935 2.935 0 0 1 2.931-2.932 2.937 2.937 0 0 1 2.7 1.94 5.877 5.877 0 0 0 .74-.034 2.94 2.94 0 0 1-1.292 1.62 5.864 5.864 0 0 0 1.688-.462 6.234 6.234 0 0 1-1.54 1.596z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C5.373 2 2 5.373 2 10c0 4.627 3.373 8 8 8s8-3.373 8-8c0-4.627-3.373-8-8-8zm0 14.5A4.503 4.503 0 0 1 5.5 10c0-2.485 2.015-4.5 4.5-4.5S14.5 7.515 14.5 10 12.485 14.5 10 14.5zm0-7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm5 7a5 5 0 1 0-10 0 5 5 0 0 0 10 0zm-2.5-5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.freepik.com/premium-vector/red-old-phone-classic-style-white-background-cartoon-vector-illustration_100456-8523.jpg?w=2000"
              alt="Contact Information"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
