import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const iconMap: { [key: string]: JSX.Element } = {
  FaLinkedinIn: <FaLinkedinIn size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaXTwitter: <FaXTwitter size={20} />,
  FaGithub: <FaGithub size={20} />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flexCenter mb-24 pt-10 text-blue-70">
      <div className="padding-container container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/logo.png"
              alt="BayChaser"
              width={0}
              height={0}
              sizes="100vw"
              className="w-40 h-auto"
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <FooterColumn title="Contact Info">
                <div className="flex flex-col ">
                  <div className="flex flex-row items-center gap-2">
                    <strong className="">Tel : </strong>
                    <div>+212 7 01 36 49 78</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <strong className="">Email :</strong>
                    <div> xxxx@gmail.com</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <strong className="">Address :</strong>
                    <div> Imsouane, Morocco North of Africa</div>
                  </div>
                </div>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      key={link.href}
                      target="_blank"
                      href={link.href}
                      className="transition-all duration-300 hover:text-green-50"
                    >
                      {iconMap[link.icon]}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          &copy; {currentYear} BayChaser | Your Gide To Secret Places. - Morocco
          {/* par{" "}
          <Link
            className="transition-all duration-300 hover:text-blue-70 hover:font-bold"
            href="/"
            target="_blank"
          >
            Ahmitti Chouaib
          </Link> */}
          .
        </p>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold whitespace-nowrap uppercase">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
