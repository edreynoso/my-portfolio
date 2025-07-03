'use client'
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope} from "react-icons/fa";
import NavBar from './components/NavBar';

export default function Home() {
  const myInformation = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/edgar-reynoso-7779612a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: FaLinkedin},
    {name: "GitHub", href: "https://github.com/edreynoso", icon: FaGithub},
    {name: "Email", href: "mailto:reynosoedgar276@gmail.com", icon: FaEnvelope},
    {name: "Resume", type: "download" , href: "/Edgar Reynoso Resume.pdf", icon: FaFilePdf}
  ]

  const aboutMe = [
    "Hello my name is Edgar Reynoso, I am a student at California Polytechnic State University San Luis Obispo",
    "studying computer science with a concentration in network security. I am currently a full-stack developer",
    "at Branded NIL."
  ]
  return (
    <div className = "min-h-screen text-center flex flex-col text-white">
      <NavBar/>
      <div className = 'py-7'>
        <img
        src = "/Me.png"
        alt = "Picture of me"
        width = {400}
        className = "mx-auto rounded-full border-2 border-zinc-900"
        />
      </div>
      <div id = "about-me" className = "py-4">
        {aboutMe.map((item) => 
          <p key = {item[0]}>{item}</p>
        )}
      </div>
      <div id="contact-info" className="flex flex-row justify-center mt-3 gap-4">
        {myInformation.map((item) =>
          item.name === "Resume" ? (
            <a
              key={item.name}
              href={item.href}
              className="justify-center flex gap-4"
              download
            >
            <item.icon className="transition-transform duration-200 hover:scale-120" size={50} />
            </a>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className="justify-center flex gap-4"
            >
              <item.icon className="transition-transform duration-200 hover:scale-120" size={50} />
            </a>
          )
        )}
      </div>
    </div>
    
  );
}
