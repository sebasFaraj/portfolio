import { useTypewriter } from "../hooks/useTypewriter";

export const Typewriter = ({text, speed, className = ""}) => {
    const displayedText = useTypewriter(text, speed);

    return <span className = {className}>{displayedText}</span>
}