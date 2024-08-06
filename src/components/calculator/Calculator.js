import { Key } from './Key'
import { Display } from './Display'

import { useState, useEffect } from 'react'

export const Calculator = () => {

    const [mainNumber, setMainNumber] = useState("0");
    const [secondaryNumber, setSecondaryNumber] = useState("");
    const [currentOperation, setCurrentOperation] = useState("");
    const [onSecondaryNumber, setOnSecondaryNumber] = useState(false);

    //Function used to handle the actual math of the operations
    const processOperation = (operation) => {
        setOnSecondaryNumber(!secondaryNumber);
        switch(operation){
            case "+":
                setMainNumber((Number(secondaryNumber) + Number(mainNumber)).toString());
                break;
            case "-":
                setMainNumber((Number(secondaryNumber) - Number(mainNumber)).toString());
                break;
            case "X":
                setMainNumber((Number(secondaryNumber) * Number(mainNumber)).toString());
                break;
            case "÷":
                let result = Number(secondaryNumber) / Number(mainNumber);
                setMainNumber(result.toFixed(3).toString());
                break;
            case "^":
                setMainNumber(Math.pow(secondaryNumber, mainNumber));
                break;
            default:
                break;  
        }
    }

    //Determines the action done each time a key is pressed
    const updateByKey = (keyValue) => {
        switch(keyValue){
            case "AC":
                setMainNumber("0");
                setSecondaryNumber("");
                setCurrentOperation("");
                break;

            case "%":
                let temp = Number(mainNumber);
                setMainNumber((temp / 100).toString());
                break;

            case ".":
                //Only add a decimal point if there isn't one already
                (!mainNumber.includes(".")) ? setMainNumber(mainNumber + '.') : console.log("number already has decimal");
                break;

            case "+":
            case "-":
            case "X":
            case "÷":
            case "^":
                if (!onSecondaryNumber)
                {
                    setSecondaryNumber(Number(mainNumber));
                    setCurrentOperation(keyValue);
                    setOnSecondaryNumber(!onSecondaryNumber);
                    setMainNumber("0");
                }
                break;
            case "=":
                //To process operation requires more if statements, changed to function for clarity
                (onSecondaryNumber) ? processOperation(currentOperation) : alert("Invalid")

                //Clearing values of operation and second number for the display
                setSecondaryNumber("")
                setCurrentOperation("") 
                break;
            
            //Evaluates to true whenever a number is pressed
            default:
                (mainNumber === "0") ? setMainNumber(keyValue) : setMainNumber(mainNumber + keyValue);
        }
    }

    useEffect(() => {

        const display = document.getElementById("Display");
        (secondaryNumber === "0") ? setSecondaryNumber("") :
        display.value = secondaryNumber + currentOperation + mainNumber;

    }, [mainNumber,currentOperation, secondaryNumber])

    return (
        <div className = "container-fluid Calculator p-3">
            <div className = "row displayRow">
                <div className = "col-12">
                    <Display />
                </div>                
            </div>
            <div className = "row">
                <div className = "col-3">
                    <Key value = {"AC"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"^"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"%"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"÷"} updateByKey = {updateByKey}/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                    <Key value = {"7"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"8"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"9"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {" X "} updateByKey = {updateByKey}/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                    <Key value = {"6"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"5"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"4"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"-"} updateByKey = {updateByKey}/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                    <Key value = {"3"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"2"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"1"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"+"} updateByKey = {updateByKey}/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-6">
                    <Key value = {"0"} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"."} updateByKey = {updateByKey}/>
                </div>
                <div className = "col-3">
                    <Key value = {"="} updateByKey = {updateByKey}/>
                </div>
            </div>
        </div>
    )
}