import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn  } from "react-icons/fa6";
const SocialNetwork = () => {
    return (
        <section>
            <div className="flex space-x-6 py-4 mx-auto ">
                <span><FaLinkedinIn /></span>
                <span><FaFacebookF /></span>
                <span><FaTwitter  /></span>
                <span><FaInstagram /></span>
            </div>
        </section>
    )
}

export default SocialNetwork
