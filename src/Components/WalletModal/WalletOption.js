import React, { useState } from "react";

const WalletOption = props => {
    
    const { name } = props.wallet;
    return (
        <div onClick={props.onClick}>
            {name}
        </div>
    )
}

export default WalletOption;