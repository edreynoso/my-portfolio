export default function NavBar(){
    const hover = "hover:underline hover:scale-105";
    return (
        <nav className = "justify-center w-full flex flex-row gap-4 py-4 shadow-lg">
            <a href= "#about-me"className = {hover}>About me</a>
            <a href = "#projects" className = {hover}>Projects</a>
            <a href= "#contact-info" className = {hover}>Contact</a>
        </nav>
    );
}