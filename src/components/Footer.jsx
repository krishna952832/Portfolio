import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 cursor-pointer">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Portfolio
              </p>
              <p className="text-sm pt-6">Krishna Kumar <br />kartiksinghgaawr@gmail.com <br />
              phone no-9528329690
              </p>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
