import React from "react";
import Button from "./Button";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <Button
        type="submit"
        name="action"
        value="google"
        placeholer="Sign In With Google"
        className="w-10 h-10 border rounded-md transition-all flex items-center justify-center text-2xl text-gray-400 hover:text-black hover:border-black hover:shadow-xl"
      >
        <FaGoogle />
      </Button>
      <Button
        type="submit"
        name="action"
        value="github"
        placeholer="Sign In With GitHub"
        className="w-10 h-10 border rounded-md transition-all flex items-center justify-center text-2xl text-gray-400 hover:text-black hover:border-black hover:shadow-xl"
      >
        <FaGithub />
      </Button>
      <Button
        type="submit"
        name="action"
        value="facebook"
        placeholer="Sign In With Facebook"
        className="w-10 h-10 border rounded-md transition-all flex items-center justify-center text-2xl text-gray-400 hover:text-black hover:border-black hover:shadow-xl"
      >
        <FaFacebookF />
      </Button>
      <Button
        type="submit"
        name="action"
        value="linkedIn"
        placeholer="Sign In With LinkedIn"
        className="w-10 h-10 border rounded-md transition-all flex items-center justify-center text-2xl text-gray-400 hover:text-black hover:border-black hover:shadow-xl"
      >
        <FaLinkedin />
      </Button>
    </div>
  );
};

export default SocialLogin;
