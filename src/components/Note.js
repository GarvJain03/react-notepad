import React from "react";

export const Note = ({ note, onDelete }) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100"></div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"></div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {note.title}
              </h2>
              <p className="leading-relaxed">{note.desc}</p>
              <span className="text-indigo-500 inline-flex items-center mt-4">
                <button
                  className="flex items-center mx-auto mt-5 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={() => {
                    onDelete(note);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                  </svg>
                  <span className="mx-2">Delete</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
