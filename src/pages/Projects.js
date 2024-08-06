import { Link } from 'react-router-dom';

export const Projects = () => {
    return (
        <>
            <Link to = "/calculator">Calculator</Link>
            <Link to = "/excuseGenerator">Excuse Generator</Link>
            <Link to = "/todolist">Todo List</Link>
        </>
    )
}