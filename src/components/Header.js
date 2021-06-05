import React from "react";

export const Header = () => {
  let imageStyle = {
    width: 40,
    height: 50,
  };
  let headerStyle = {
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.12), 0 5px 7px rgba(0, 0, 0, 0.24)",
    padding: 1,
  };
  return (
    <div>
      <header className="text-gray-600 body-font" style={headerStyle}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              style={imageStyle}
              className="profile-photo"
              src="https://media.discordapp.net/attachments/796667326622728233/850421719856185354/image-removebg-preview.png"
              alt={"Logo"}
            />
            <span className="ml-3 text-xl">NOTEPAD</span>
          </span>
        </div>
      </header>
    </div>
  );
};
