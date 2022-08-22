// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'CollateralShort';
export const address = '0xeb4b5ABcE7310855319440d936cd3aDd77DFA193';
export const source = 'CollateralShort';
export const abi = [
  'constructor(address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event CanOpenLoansUpdated(bool canOpenLoans)',
  'event CollateralDeposited(address indexed account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)',
  'event CollateralWithdrawn(address indexed account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)',
  'event IssueFeeRateUpdated(uint256 issueFeeRate)',
  'event LoanClosed(address indexed account, uint256 id)',
  'event LoanClosedByLiquidation(address indexed account, uint256 id, address indexed liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)',
  'event LoanClosedByRepayment(address indexed account, uint256 id, uint256 amountRepaid, uint256 collateralAfter)',
  'event LoanCreated(address indexed account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)',
  'event LoanDrawnDown(address indexed account, uint256 id, uint256 amount)',
  'event LoanPartiallyLiquidated(address indexed account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)',
  'event LoanRepaymentMade(address indexed account, address indexed repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)',
  'event MinCollateralUpdated(uint256 minCollateral)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function addRewardsContracts(address rewardsContract, bytes32 synth)',
  'function addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)',
  'function areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) view returns (bool)',
  'function canOpenLoans() view returns (bool)',
  'function close(uint256 id) returns (uint256 amount, uint256 collateral)',
  'function closeWithCollateral(uint256 id) returns (uint256 amount, uint256 collateral)',
  'function collateralKey() view returns (bytes32)',
  'function collateralRatio(uint256 id) view returns (uint256 cratio)',
  'function deposit(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)',
  'function draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)',
  'function getShortAndCollateral(address, uint256 id) view returns (uint256 principal, uint256 collateral)',
  'function isResolverCached() view returns (bool)',
  'function issueFeeRate() view returns (uint256)',
  'function liquidate(address borrower, uint256 id, uint256 amount)',
  'function liquidationAmount(uint256 id) view returns (uint256 liqAmount)',
  'function loans(uint256) view returns (uint256 id, address account, uint256 collateral, bytes32 currency, uint256 amount, bool short, uint256 accruedInterest, uint256 interestIndex, uint256 lastInteraction)',
  'function manager() view returns (address)',
  'function maxLoan(uint256 amount, bytes32 currency) view returns (uint256 max)',
  'function minCollateral() view returns (uint256)',
  'function minCratio() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function open(uint256 collateral, uint256 amount, bytes32 currency) returns (uint256 id)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)',
  'function repayWithCollateral(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setCanOpenLoans(bool _canOpenLoans)',
  'function setIssueFeeRate(uint256 _issueFeeRate)',
  'function setMinCollateral(uint256 _minCollateral)',
  'function shortingRewards(bytes32) view returns (address)',
  'function synths(uint256) view returns (bytes32)',
  'function synthsByKey(bytes32) view returns (bytes32)',
  'function withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)',
];
