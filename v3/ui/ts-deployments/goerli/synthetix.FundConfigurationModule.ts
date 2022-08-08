export const address = '0xcB089F5A0DF6BA7bA04dbc7DB7257a8A242b859D';
export const abi = [
	'error FundAlreadyApproved(uint256 fundId)',
	'error FundAlreadyExists(uint256 fundId)',
	'error FundNotFound(uint256 fundId)',
	'error InsufficientAvailableCollateral(uint256 accountId, address collateralType, uint256 requestedAmount)',
	'error InvalidCollateralType(address collateralType)',
	'error InvalidParameters()',
	'error OnlyTokenProxyAllowed(address origin)',
	'error Unauthorized(address addr)',
	'event DelegationUpdated(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage)',
	'event FundApprovedAdded(uint256 fundId)',
	'event FundApprovedRemoved(uint256 fundId)',
	'event FundCreated(address owner, uint256 fundId)',
	'event FundPositionSet(uint256 fundId, uint256[] markets, uint256[] weights, address executedBy)',
	'event NominatedNewOwner(address nominatedOwner, uint256 fundId)',
	'event OwnershipAccepted(address newOwner, uint256 fundId)',
	'event OwnershipRenounced(address target, uint256 fundId)',
	'event PositionAdded(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
	'event PositionDecreased(bytes32 liquidityItemId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
	'event PositionIncreased(bytes32 liquidityItemId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
	'event PositionRemoved(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType)',
	'event PreferredFundSet(uint256 fundId)',
	'function addApprovedFund(uint256 fundId)',
	'function getApprovedFunds() view returns (uint256[])',
	'function getPreferredFund() view returns (uint256)',
	'function removeApprovedFund(uint256 fundId)',
	'function setPreferredFund(uint256 fundId)',
];