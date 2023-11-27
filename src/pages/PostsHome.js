import React from "react";

const PostsHome = () => {
  return (
    <>
      <div className="ttt overflow min-h-screen max-h-screen overflow-y-auto pt-20 bg-black">
        <div className="">

          <div class=" flex justify-center items-center py-12">
            <div class="flex bg-white shadow-lg rounded-lg w-9/12">
              <div class="flex items-start px-4 py-6">
                <img
                  class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                />
                <div class="">
                  <div class="flex items-center justify-between">
                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                      Vaibhav Vemula{" "}
                    </h2>
                    <small class="text-sm text-gray-700">22h ago</small>
                  </div>
                  <p class="text-gray-700">Joined 12 SEP 2012. </p>
                  <p class="mt-3 text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit amet!
                  </p>
                  <div class="mt-4 flex items-center">
                    <div class="flex text-gray-700 text-sm mr-3">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>12</span>
                    </div>
                    <div class="flex text-gray-700 text-sm mr-8">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                      <span>8</span>
                    </div>
                    <div class="flex text-gray-700 text-sm mr-4">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      <span>share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex justify-center items-center">
            <div class="max-w-2xl container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div>
                <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                  Lampara Look
                </h1>
                <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
                  #by Saca Tuerca
                </p>
              </div>
              <img
                class="w-full cursor-pointer h-96"
                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div class="flex p-4 justify-between">
                <div class="flex items-center space-x-2">
                  <img
                    class="w-10 rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt="sara"
                  />
                  <h2 class="text-gray-800 font-bold cursor-pointer">
                    Felipe Sacudon
                  </h2>
                </div>
                <div class="flex space-x-2">
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-gray-600 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                    <span>22</span>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex justify-center items-center py-12">
            <div class="flex bg-white shadow-lg rounded-lg w-9/12">
              <div class="flex items-start px-4 py-6">
                <img
                  class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                />
                <div class="">
                  <div class="flex items-center justify-between">
                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                      Vaibhav Vemula{" "}
                    </h2>
                    <small class="text-sm text-gray-700">22h ago</small>
                  </div>
                  <p class="text-gray-700">Joined 12 SEP 2012. </p>
                  <p class="mt-3 text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit amet!
                  </p>
                  <div class="mt-4 flex items-center">
                    <div class="flex text-gray-700 text-sm mr-3">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>12</span>
                    </div>
                    <div class="flex text-gray-700 text-sm mr-8">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                      <span>8</span>
                    </div>
                    <div class="flex text-gray-700 text-sm mr-4">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      <span>share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex justify-center items-center">
            <div class="max-w-2xl container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div>
                <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                  Lampara Look
                </h1>
                <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
                  #by Saca Tuerca
                </p>
              </div>
              <img
                class="w-full cursor-pointer h-96"
                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div class="flex p-4 justify-between">
                <div class="flex items-center space-x-2">
                  <img
                    class="w-10 rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt="sara"
                  />
                  <h2 class="text-gray-800 font-bold cursor-pointer">
                    Felipe Sacudon
                  </h2>
                </div>
                <div class="flex space-x-2">
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-gray-600 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                    <span>22</span>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsHome;
