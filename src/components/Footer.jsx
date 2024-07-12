import { Container } from ".";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <Container>
        <div className={"mb-6"}>
          <h3 className={"text-4xl font-normal text-center mb-4"}>WP ARENA</h3>
          <p className="text-sm text-center text-gray-400">
            Comprehensive WordPress tutorials and resources for beginners and
            experts.
          </p>
        </div>

        <div className={"flex items-center justify-center gap-3 mb-6"}>
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              className={
                "w-8 h-8 border flex items-center hover:bg-[#2A80B9] hover:border-[#2A80B9] justify-center rounded-full"
              }
              href="#"
            >
              {icon}
            </a>
          ))}
        </div>

        <ul className="text-sm py-4 border-t border-gray-700 border-b flex items-center justify-center mb-6 gap-4">
          <li>
            <a href="#" className="hover:text-blue-400 pr-4 border-r">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 pr-4 border-r">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 pr-4 border-r">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} WP Arena. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

const socialIcons = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="currentColor"
      d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M102 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m73.64 61.08l-67 29.71a14.4 14.4 0 0 1-5.77 1.21a14.13 14.13 0 0 1-13.25-9.18L143 189.43c-4.93.37-9.92.58-15 .58s-10.06-.21-15-.58l-8.63 23.39A14.13 14.13 0 0 1 91.13 222a14.4 14.4 0 0 1-5.77-1.21l-67-29.71a14 14 0 0 1-7.93-16.2L40 58.5a14.07 14.07 0 0 1 11.34-10.39l36.06-5.92a14.19 14.19 0 0 1 16 10.39l3.69 14.53a197.5 197.5 0 0 1 41.82 0l3.69-14.53a14.19 14.19 0 0 1 16-10.39l36.06 5.92A14.07 14.07 0 0 1 216 58.5l29.53 116.38a14 14 0 0 1-7.89 16.2m-3.7-13.25L204.41 61.45a2.08 2.08 0 0 0-1.7-1.5L166.65 54a2.13 2.13 0 0 0-2.42 1.5l-3.36 13.24a169 169 0 0 1 16.75 3.76A6 6 0 0 1 176 84.31a5.7 5.7 0 0 1-1.62-.23A174.3 174.3 0 0 0 128 78a174.3 174.3 0 0 0-46.38 6.08a6 6 0 1 1-3.24-11.55a169 169 0 0 1 16.75-3.76l-3.36-13.24A2.12 2.12 0 0 0 89.35 54l-36.06 6a2.08 2.08 0 0 0-1.7 1.5L22.06 177.83a2 2 0 0 0 1.16 2.28l67 29.7a2.2 2.2 0 0 0 1.76 0a2.07 2.07 0 0 0 1.14-1.17l7.58-20.55a171.5 171.5 0 0 1-22.33-4.64a6 6 0 1 1 3.24-11.55A174.3 174.3 0 0 0 128 178a174.3 174.3 0 0 0 46.38-6.08a6 6 0 1 1 3.24 11.55a171.5 171.5 0 0 1-22.33 4.64l7.58 20.55a2.07 2.07 0 0 0 1.14 1.17a2.2 2.2 0 0 0 1.76 0l67-29.7a2 2 0 0 0 1.17-2.3"
    />
  </svg>,
];
