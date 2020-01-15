import React from 'react';
import { useAddressBalance } from '../contexts/Balances';
import { amountFormatter } from '../utils';

export default function TokenBalance({tokenAddress, account}) {
    const tokenBalance = useAddressBalance(account, tokenAddress);
    return(
        <>
            { amountFormatter(tokenBalance) || "-" }
        </>
    )
}