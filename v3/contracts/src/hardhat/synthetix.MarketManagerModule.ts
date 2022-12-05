export const address = '0xc9962c7F2B0951E458252322f4823f3109c93517';
export const abi = [
  'error EmptyDistribution()',
  'error FeatureUnavailable()',
  'error MarketDepositNotApproved(address market, address from, uint256 requestedAmount, uint256 approvedAmount)',
  'error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)',
  'error NotEnoughLiquidity(uint128 marketId, uint256 amount)',
  'error Unauthorized(address addr)',
  'event MarketRegistered(address indexed market, uint128 indexed marketId)',
  'event MarketUsdDeposited(uint128 indexed marketId, address indexed target, uint256 amount, address indexed sender)',
  'event MarketUsdWithdrawn(uint128 indexed marketId, address indexed target, uint256 amount, address indexed sender)',
  'function depositMarketUsd(uint128 marketId, address target, uint256 amount)',
  'function getMarketCollateral(uint128 marketId) view returns (uint256)',
  'function getMarketDebtPerShare(uint128 marketId) returns (int256)',
  'function getMarketIssuance(uint128 marketId) view returns (int128)',
  'function getMarketReportedDebt(uint128 marketId) view returns (uint256)',
  'function getMarketTotalBalance(uint128 marketId) view returns (int256)',
  'function getWithdrawableUsd(uint128 marketId) view returns (uint256)',
  'function isMarketCapacityLocked(uint128 marketId) view returns (bool)',
  'function registerMarket(address market) returns (uint128 marketId)',
  'function withdrawMarketUsd(uint128 marketId, address target, uint256 amount)',
];