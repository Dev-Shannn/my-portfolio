import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://in.linkedin.com/in/nishant-prakash-pandey-2a819b323" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Dev-Shannn" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
