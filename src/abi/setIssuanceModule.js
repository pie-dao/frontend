const setIssuanceModule = [
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_rebalancingSetAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rebalancingSetQuantity',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_keepChangeInVault',
        type: 'bool',
      },
    ],
    name: 'issueRebalancingSet',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_rebalancingSetAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rebalancingSetQuantity',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_keepChangeInVault',
        type: 'bool',
      },
    ],
    name: 'issueRebalancingSetWrappingEther',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_rebalancingSetAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rebalancingSetQuantity',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_keepChangeInVault',
        type: 'bool',
      },
    ],
    name: 'redeemRebalancingSet',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_rebalancingSetAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rebalancingSetQuantity',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_keepChangeInVault',
        type: 'bool',
      },
    ],
    name: 'redeemRebalancingSetUnwrappingEther',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export default setIssuanceModule;
