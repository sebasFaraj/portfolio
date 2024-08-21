import {useState, useEffect} from 'react';

export const ExcusePage = () => {

    const [excuse, setExcuse] = useState("");
    const [type, setType] = useState("");


    //This function makes the API call and sets the Excuse object to the excuse state
    const fetchExcuse = () =>
    {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${type}`)
    .then(res => res.json()).then(data => {setExcuse(data[0].excuse)})
    .catch(error => console.log(error));

    document.getElementById("excuseHeader").innerHTML = "A ".concat((type === "") ? "Random" : type) + " excuse is:";
    }

    //This helper function changes the value of type after there is a change in the dropdown menu
    const updateType = (event) =>
    {
    setType(event.target.value);
    }

    //Function that cleans up the generateExcuse call. It simply makes 15 API calls to change what the text is rapidly.
    //This isn't efficient, but I think that the effect looks cool and adds onto the project
    const runAnimation = () =>
    {
    for (let i = 0; i < 15; i++)
    {
        fetchExcuse();
    }
    }

    //A wrapper function that calls the animation and then gets the final excuse. I could eliminate the final fetchExcuse call,
    //but I found that it helped when setting up the Animation function so I left it in. 
    const generateExcuse = () =>
    {
    runAnimation();
    fetchExcuse();
    }

    useEffect(() => {
    fetchExcuse();
    }, []);



    return (
        <>
        <div className = "exHeader">
            <h1 className = "exheaderText">Excuse Generator</h1>
            <h2 className = "exsubHeaderText">The perfect tool to get out of something</h2>
        </div>
        <div className = "exMain">
            <div className = "extopRow">
            <select name="excuseTypes" id="excuseTypes" onChange = {updateType}>
                <option value = "">Random</option>
                <option value = "family">Family</option>
                <option value = "office">Office</option>
                <option value = "children">Children</option>
                <option value = "college">College</option>
                <option value = "party">Party</option>
                <option value = "funny">Funny</option>
                <option value = "unbelievable">Unbelievable</option>
                <option value = "developers">Developer</option>
                <option value = "gaming">Gaming</option>
            </select>
            <button className = "generateExcuse" type = "button" onClick = {generateExcuse}>Generate Excuse!</button>

            </div>
            <div className = "bottomRow">
            <h1 id = "excuseHeader">A random excuse is:</h1>
            <h1 id = "excuse">{excuse}</h1>
            </div>
        </div>
        </>
    )
}