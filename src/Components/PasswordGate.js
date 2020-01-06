import React from "react";
import { utils } from 'ethers';

var password;
var hashedPassword;
var solution = "0xfe9341a416aec42a2819008f03768af71d3a13521a29b654903cc31a8064bb67";

var enviroment = process.env.NODE_ENV 
// enviroment = "production";

if(enviroment !== "development") {
    password = prompt("Enter Password", "");
    hashedPassword = utils.keccak256(utils.formatBytes32String(password));
    // console.log(hashedPassword);
}

const PasswordGate = props =>{
    if(hashedPassword === solution || enviroment === "development") {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <>
                Password Incorrect. Reload and try again.
            </>
        )
    }
}

export default PasswordGate;