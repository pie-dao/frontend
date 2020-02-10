const uniSetRecipe = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_uniswapFactory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_setIssuanceModule',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_transferProxy',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_set',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_setAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_deadline',
        type: 'uint256',
      },
    ],
    name: 'buyAndWrapToRebalancingSet',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_set',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_setAmount',
        type: 'uint256',
      },
    ],
    name: 'calcInputFromOutput',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_set',
        type: 'address',
      },
    ],
    name: 'getDetails',
    outputs: [
      {
        internalType: 'address[]',
        name: 'components',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'units',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'naturalUnit',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getExchange',
    outputs: [
      {
        internalType: 'contract IUniswap',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'returnToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'returnTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'setIssuanceModule',
    outputs: [
      {
        internalType: 'contract ISetIssuanceModule',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'transferProxy',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'uniswapFactory',
    outputs: [
      {
        internalType: 'contract IUniswapFactory',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
export default uniSetRecipe;
