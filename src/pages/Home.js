import { Typewriter } from "../components/Typewriter"

export const Home = () => {
    return (
        <main className = "homeContainer container-fluid">
            <h1 className = "mainText">Hi, I'm Sebastian Faraj</h1>
            <div>
                <span className = "subText">I'm a </span>
                <Typewriter text = {[" Notre Dame student"," front-end developer", " back-end developer", " react developer", " MERN developer"]} speed = {125} className = "subText"></Typewriter>
            </div>   
        </main>
    )
}