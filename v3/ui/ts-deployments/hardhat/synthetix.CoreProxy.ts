export const address = '0xADCF09404b8060B145476EBD458cc30444ee3747';
export const abi = [
  'error AlreadyInitialized()',
  'error NoChange()',
  'error NotNominated(address addr)',
  'error Unauthorized(address addr)',
  'error ZeroAddress()',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function initializeOwnerModule(address initialOwner)',
  'function isOwnerModuleInitialized() view returns (bool)',
  'function nominateNewOwner(address newNominatedOwner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function renounceNomination()',
  'error ImplementationIsSterile(address implementation)',
  'error NotAContract(address contr)',
  'error UpgradeSimulationFailed()',
  'event Upgraded(address implementation)',
  'function getImplementation() view returns (address)',
  'function simulateUpgradeTo(address newImplementation)',
  'function upgradeTo(address newImplementation)',
  'error InvalidRole()',
  'error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)',
  'error OnlyTokenProxyAllowed(address origin)',
  'error PositionOutOfBounds()',
  'error RoleNotAuthorized(uint256 accountId, bytes32 role, address target)',
  'error ValueAlreadyInSet()',
  'error ValueNotInSet()',
  'event AccountCreated(address accountAddress)',
  'event RoleGranted(uint256 accountId, bytes32 role, address target, address executedBy)',
  'event RoleRevoked(uint256 accountId, bytes32 role, address target, address executedBy)',
  'function createAccount(uint256 accountId)',
  'function getAccountAddress() view returns (address)',
  'function getAccountPermissions(uint256 accountId) view returns (tuple(address target, bytes32[] roles)[] permissions)',
  'function grantRole(uint256 accountId, bytes32 role, address target)',
  'function hasRole(uint256 accountId, bytes32 role, address target) view returns (bool)',
  'function renounceRole(uint256 accountId, bytes32 role, address target)',
  'function revokeRole(uint256 accountId, bytes32 role, address target)',
  'function transferAccount(address to, uint256 accountId)',
  'event AssociatedSystemSet(bytes32 indexed kind, bytes32 indexed id, address proxy, address impl)',
  'function getAssociatedSystem(bytes32 id) view returns (address proxy, bytes32 kind)',
  'function initOrUpgradeNft(bytes32 id, string name, string symbol, string uri, address impl)',
  'function initOrUpgradeToken(bytes32 id, string name, string symbol, uint8 decimals, address impl)',
  'function registerUnmanagedSystem(bytes32 id, address endpoint)',
  'error FailedTransfer(address from, address to, uint256 value)',
  'error InsufficientAccountCollateral(uint256 accountId, address collateralType, uint256 requestedAmount)',
  'error InvalidCollateralType(address collateralType)',
  'error InvalidPointsOrder()',
  'error OutOfBounds()',
  'error ValueOutOfRange()',
  'event CollateralAdjusted(address collateralType, address priceFeed, uint256 targetCRatio, uint256 minimumCRatio, bool enabled)',
  'event CollateralStaked(uint256 accountId, address collateralType, uint256 amount, address executedBy)',
  'event CollateralUnstaked(uint256 accountId, address collateralType, uint256 amount, address executedBy)',
  'function adjustCollateralType(address collateralType, address priceFeed, uint256 targetCRatio, uint256 minimumCRatio, bool enabled)',
  'function cleanExpiredLocks(uint256 accountId, address collateralType, uint256 offset, uint256 items)',
  'function getAccountCollateralTotals(uint256 accountId, address collateralType) view returns (uint256 totalStaked, uint256 totalAssigned, uint256 totalLocked, uint256 totalEscrowed)',
  'function getAccountCollaterals(uint256 accountId) view returns (address[] collateralTypes)',
  'function getAccountUnassignedCollateral(uint256 accountId, address collateralType) view returns (uint256)',
  'function getAccountUnstakebleCollateral(uint256 accountId, address collateralType) view returns (uint256)',
  'function getCollateralType(address collateralType) view returns (tuple(bool enabled, uint256 targetCRatio, uint256 minimumCRatio, uint256 liquidationReward, address priceFeed, address tokenAddress))',
  'function getCollateralTypes(bool hideDisabled) view returns (tuple(bool enabled, uint256 targetCRatio, uint256 minimumCRatio, uint256 liquidationReward, address priceFeed, address tokenAddress)[])',
  'function redeemReward(uint256 accountId, uint256 amount, uint256 duration)',
  'function stake(uint256 accountId, address collateralType, uint256 amount)',
  'function unstake(uint256 accountId, address collateralType, uint256 amount)',
  'error EmptyVault(uint256 fundId, address collateralType)',
  'error FundAlreadyApproved(uint256 fundId)',
  'error FundAlreadyExists(uint256 fundId)',
  'error FundNotFound(uint256 fundId)',
  'error InvalidParameters(string incorrectParameter, string help)',
  'event DelegationUpdated(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage)',
  'event FundApprovedAdded(uint256 fundId)',
  'event FundApprovedRemoved(uint256 fundId)',
  'event FundCreated(address owner, uint256 fundId)',
  'event FundPositionSet(uint256 fundId, uint256[] markets, uint256[] weights, address executedBy)',
  'event NominatedNewOwner(address nominatedOwner, uint256 fundId)',
  'event OwnershipAccepted(address newOwner, uint256 fundId)',
  'event OwnershipRenounced(address target, uint256 fundId)',
  'event PreferredFundSet(uint256 fundId)',
  'event RewardDistributionSet(uint256 indexed fundId, address indexed token, uint256 indexed index, address distributor, uint256 totalRewarded, uint256 start, uint256 duration)',
  'event RewardsClaimed(uint256 indexed fundId, address indexed token, uint256 indexed accountId, uint256 index, uint256 amountClaimed)',
  'function addApprovedFund(uint256 fundId)',
  'function getApprovedFunds() view returns (uint256[])',
  'function getPreferredFund() view returns (uint256)',
  'function removeApprovedFund(uint256 fundId)',
  'function setPreferredFund(uint256 fundId)',
  'function acceptFundOwnership(uint256 fundId)',
  'function createFund(uint256 requestedFundId, address owner)',
  'function getFundName(uint256 fundId) view returns (string fundName)',
  'function getFundPosition(uint256 fundId) view returns (uint256[], uint256[], int256[])',
  'function nominateNewFundOwner(address nominatedOwner, uint256 fundId)',
  'function nominatedOwnerOf(uint256 fundId) view returns (address)',
  'function ownerOf(uint256 fundId) view returns (address)',
  'function renounceFundNomination(uint256 fundId)',
  'function setFundName(uint256 fundId, string name)',
  'function setFundPosition(uint256 fundId, uint256[] markets, uint256[] weights, int256[] maxDebtShareValues)',
  'error IneligibleForLiquidation(uint256 collateralValue, uint256 debt, uint256 currentCRatio, uint256 cratio)',
  'event Liquidation(uint256 indexed accountId, uint256 indexed fundId, address indexed collateralType, uint256 debtLiquidated, uint256 collateralLiquidated, uint256 amountRewarded)',
  'function isLiquidatable(uint256 accountId, uint256 fundId, address collateralType) returns (bool)',
  'function liquidate(uint256 accountId, uint256 fundId, address collateralType) returns (uint256 amountRewarded, uint256 debtLiquidated, uint256 collateralLiquidated)',
  'function liquidateVault(uint256 fundId, address collateralType) returns (uint256 amountRewarded, uint256 collateralLiquidated)',
  'error MarketAlreadyRegistered(address market)',
  'error NotEnoughLiquidity(uint256 marketId, uint256 amount)',
  'event MarketRegistered(address market, uint256 marketId)',
  'function deposit(uint256 marketId, address target, uint256 amount)',
  'function marketLiquidity(uint256 marketId) view returns (uint256)',
  'function marketTotalBalance(uint256 marketId) view returns (int256)',
  'function registerMarket(address market) returns (uint256 marketId)',
  'function withdraw(uint256 marketId, address target, uint256 amount)',
  'function multicall(bytes[] data) payable returns (bytes[] results)',
  'error InsufficientRewardAllocation(uint256 requestedAmount, uint256 remainingAllocation)',
  'function getRewardAllocation(uint256 fundId) view returns (uint256)',
  'function payout(uint256 fundId, address, address to, uint256 amount) returns (bool)',
  'function setRewardAllocation(uint256 fundId, uint256 allocation)',
  'function mintInitialSystemToken(address to, uint256 amount)',
  'error InsufficientCollateralRatio(uint256 collateralValue, uint256 debt, uint256 ratio, uint256 minRatio)',
  'error InsufficientDebt(int256 currentDebt)',
  'error InvalidLeverage(uint256 leverage)',
  'function accountCollateralRatio(uint256 accountId, uint256 fundId, address collateralType) returns (uint256)',
  'function accountVaultCollateral(uint256 accountId, uint256 fundId, address collateralType) view returns (uint256 amount, uint256 value, uint256 shares)',
  'function accountVaultDebt(uint256 accountId, uint256 fundId, address collateralType) returns (int256)',
  'function burnUSD(uint256 accountId, uint256 fundId, address collateralType, uint256 amount)',
  'function debtPerShare(uint256 fundId, address collateralType) returns (int256)',
  'function delegateCollateral(uint256 accountId, uint256 fundId, address collateralType, uint256 collateralAmount, uint256 leverage)',
  'function getLiquidityItem(bytes32 liquidityItemId) view returns (tuple(uint128 usdMinted, int128 cumulativeDebt, uint128 leverage) liquidityItem)',
  'function mintUSD(uint256 accountId, uint256 fundId, address collateralType, uint256 amount)',
  'function totalVaultShares(uint256 fundId, address collateralType) view returns (uint256)',
  'function vaultCollateral(uint256 fundId, address collateralType) returns (uint256 amount, uint256 value)',
  'function vaultDebt(uint256 fundId, address collateralType) returns (int256)',
  'function claimRewards(uint256 fundId, address collateralType, uint256 accountId) returns (uint256[])',
  'function distributeRewards(uint256 fundId, address collateralType, uint256 index, address distributor, uint256 amount, uint256 start, uint256 duration)',
  'function getAvailableRewards(uint256 fundId, address collateralType, uint256 accountId) returns (uint256[])',
  'function getCurrentRewardAccumulation(uint256 fundId, address collateralType) view returns (uint256[])',
];