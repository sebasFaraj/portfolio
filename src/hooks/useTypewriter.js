import {useState, useEffect} from 'react';

export const useTypewriter = (text, speed = 25) => {
    
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        //i keeps track of the current character, j keeps track of the current item in the text array
        let i = 0;
        let j = 0;
        let textLength = text.length;

        //Starts interval function (based on speed value) that progressively adds a character
        // j % textLength always guarantees that no matter the number of items in the text array, it is always a valid index
        const typingInterval = setInterval(() => {
            if (i < text[j % textLength].length)
            {
                setDisplayedText(oldText => oldText + text[j % textLength].charAt(i));
                i++;
            }
            else
            {
                i = -1; //Due to the way charAt works, i has to be set to -1
                j++;
                setDisplayedText("");
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayedText;
};