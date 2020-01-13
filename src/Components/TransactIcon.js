import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

import { useWeb3React } from '../hooks'
import Jazzicon from 'jazzicon'

const TransactIcon = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 30px;
  background-color: #7D78D1;
`

export default function Identicon() {
  const ref = useRef()

  const { account } = useWeb3React()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  return <TransactIcon ref={ref} />
}
