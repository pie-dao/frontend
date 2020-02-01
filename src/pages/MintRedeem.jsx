import React from 'react';
import { view } from 'react-easy-state';
import AddRemoveLiquidity from '../components/AddRemoveLiquidity';

const MintRedeem = (props) => <AddRemoveLiquidity {...props} />;

export default view(MintRedeem);
