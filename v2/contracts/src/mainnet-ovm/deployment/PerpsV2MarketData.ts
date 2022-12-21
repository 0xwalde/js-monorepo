// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'PerpsV2MarketData';
export const address = '0xF7D3D05cCeEEcC9d77864Da3DdE67Ce9a0215A9D';
export const source = 'PerpsV2MarketData';
export const abi = [
  'constructor(address _resolverProxy)',
  'function allMarketSummaries() view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates)[])',
  'function allProxiedMarketSummaries() view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates)[])',
  'function globals() view returns (tuple(uint256 minInitialMargin, uint256 liquidationFeeRatio, uint256 liquidationBufferRatio, uint256 minKeeperFee))',
  'function marketDetails(address market) view returns (tuple(address market, bytes32 baseAsset, bytes32 marketKey, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates, tuple(uint256 maxLeverage, uint256 maxMarketValue) limits, tuple(uint256 maxFundingVelocity, uint256 skewScale) fundingParameters, tuple(uint256 marketSize, tuple(uint256 long, uint256 short) sides, uint256 marketDebt, int256 marketSkew) marketSizeDetails, tuple(uint256 price, bool invalid) priceDetails))',
  'function marketDetailsForKey(bytes32 marketKey) view returns (tuple(address market, bytes32 baseAsset, bytes32 marketKey, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates, tuple(uint256 maxLeverage, uint256 maxMarketValue) limits, tuple(uint256 maxFundingVelocity, uint256 skewScale) fundingParameters, tuple(uint256 marketSize, tuple(uint256 long, uint256 short) sides, uint256 marketDebt, int256 marketSkew) marketSizeDetails, tuple(uint256 price, bool invalid) priceDetails))',
  'function marketSummaries(address[] markets) view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates)[])',
  'function marketSummariesForKeys(bytes32[] marketKeys) view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 overrideCommitFee) feeRates)[])',
  'function parameters(bytes32 marketKey) view returns (tuple(uint256 takerFee, uint256 makerFee, uint256 overrideCommitFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 maxLeverage, uint256 maxMarketValue, uint256 maxFundingVelocity, uint256 skewScale, uint256 nextPriceConfirmWindow, uint256 delayedOrderConfirmWindow, uint256 minDelayTimeDelta, uint256 maxDelayTimeDelta, uint256 offchainDelayedOrderMinAge, uint256 offchainDelayedOrderMaxAge, bytes32 offchainMarketKey, uint256 offchainPriceDivergence))',
  'function positionDetails(address market, address account) view returns (tuple(tuple(uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size) position, int256 notionalValue, int256 profitLoss, int256 accruedFunding, uint256 remainingMargin, uint256 accessibleMargin, uint256 liquidationPrice, bool canLiquidatePosition))',
  'function positionDetailsForMarketKey(bytes32 marketKey, address account) view returns (tuple(tuple(uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size) position, int256 notionalValue, int256 profitLoss, int256 accruedFunding, uint256 remainingMargin, uint256 accessibleMargin, uint256 liquidationPrice, bool canLiquidatePosition))',
  'function resolverProxy() view returns (address)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace PerpsV2MarketData {
  export type FeeRatesStruct = {
    takerFee: PromiseOrValue<BigNumberish>;
    makerFee: PromiseOrValue<BigNumberish>;
    takerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    overrideCommitFee: PromiseOrValue<BigNumberish>;
  };

  export type FeeRatesStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    takerFee: BigNumber;
    makerFee: BigNumber;
    takerFeeDelayedOrder: BigNumber;
    makerFeeDelayedOrder: BigNumber;
    takerFeeOffchainDelayedOrder: BigNumber;
    makerFeeOffchainDelayedOrder: BigNumber;
    overrideCommitFee: BigNumber;
  };

  export type MarketSummaryStruct = {
    market: PromiseOrValue<string>;
    asset: PromiseOrValue<BytesLike>;
    key: PromiseOrValue<BytesLike>;
    maxLeverage: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    marketSize: PromiseOrValue<BigNumberish>;
    marketSkew: PromiseOrValue<BigNumberish>;
    marketDebt: PromiseOrValue<BigNumberish>;
    currentFundingRate: PromiseOrValue<BigNumberish>;
    currentFundingVelocity: PromiseOrValue<BigNumberish>;
    feeRates: PerpsV2MarketData.FeeRatesStruct;
  };

  export type MarketSummaryStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    PerpsV2MarketData.FeeRatesStructOutput
  ] & {
    market: string;
    asset: string;
    key: string;
    maxLeverage: BigNumber;
    price: BigNumber;
    marketSize: BigNumber;
    marketSkew: BigNumber;
    marketDebt: BigNumber;
    currentFundingRate: BigNumber;
    currentFundingVelocity: BigNumber;
    feeRates: PerpsV2MarketData.FeeRatesStructOutput;
  };

  export type FuturesGlobalsStruct = {
    minInitialMargin: PromiseOrValue<BigNumberish>;
    liquidationFeeRatio: PromiseOrValue<BigNumberish>;
    liquidationBufferRatio: PromiseOrValue<BigNumberish>;
    minKeeperFee: PromiseOrValue<BigNumberish>;
  };

  export type FuturesGlobalsStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
    minInitialMargin: BigNumber;
    liquidationFeeRatio: BigNumber;
    liquidationBufferRatio: BigNumber;
    minKeeperFee: BigNumber;
  };

  export type MarketLimitsStruct = {
    maxLeverage: PromiseOrValue<BigNumberish>;
    maxMarketValue: PromiseOrValue<BigNumberish>;
  };

  export type MarketLimitsStructOutput = [BigNumber, BigNumber] & {
    maxLeverage: BigNumber;
    maxMarketValue: BigNumber;
  };

  export type FundingParametersStruct = {
    maxFundingVelocity: PromiseOrValue<BigNumberish>;
    skewScale: PromiseOrValue<BigNumberish>;
  };

  export type FundingParametersStructOutput = [BigNumber, BigNumber] & {
    maxFundingVelocity: BigNumber;
    skewScale: BigNumber;
  };

  export type SidesStruct = {
    long: PromiseOrValue<BigNumberish>;
    short: PromiseOrValue<BigNumberish>;
  };

  export type SidesStructOutput = [BigNumber, BigNumber] & { long: BigNumber; short: BigNumber };

  export type MarketSizeDetailsStruct = {
    marketSize: PromiseOrValue<BigNumberish>;
    sides: PerpsV2MarketData.SidesStruct;
    marketDebt: PromiseOrValue<BigNumberish>;
    marketSkew: PromiseOrValue<BigNumberish>;
  };

  export type MarketSizeDetailsStructOutput = [
    BigNumber,
    PerpsV2MarketData.SidesStructOutput,
    BigNumber,
    BigNumber
  ] & {
    marketSize: BigNumber;
    sides: PerpsV2MarketData.SidesStructOutput;
    marketDebt: BigNumber;
    marketSkew: BigNumber;
  };

  export type PriceDetailsStruct = {
    price: PromiseOrValue<BigNumberish>;
    invalid: PromiseOrValue<boolean>;
  };

  export type PriceDetailsStructOutput = [BigNumber, boolean] & {
    price: BigNumber;
    invalid: boolean;
  };

  export type MarketDataStruct = {
    market: PromiseOrValue<string>;
    baseAsset: PromiseOrValue<BytesLike>;
    marketKey: PromiseOrValue<BytesLike>;
    feeRates: PerpsV2MarketData.FeeRatesStruct;
    limits: PerpsV2MarketData.MarketLimitsStruct;
    fundingParameters: PerpsV2MarketData.FundingParametersStruct;
    marketSizeDetails: PerpsV2MarketData.MarketSizeDetailsStruct;
    priceDetails: PerpsV2MarketData.PriceDetailsStruct;
  };

  export type MarketDataStructOutput = [
    string,
    string,
    string,
    PerpsV2MarketData.FeeRatesStructOutput,
    PerpsV2MarketData.MarketLimitsStructOutput,
    PerpsV2MarketData.FundingParametersStructOutput,
    PerpsV2MarketData.MarketSizeDetailsStructOutput,
    PerpsV2MarketData.PriceDetailsStructOutput
  ] & {
    market: string;
    baseAsset: string;
    marketKey: string;
    feeRates: PerpsV2MarketData.FeeRatesStructOutput;
    limits: PerpsV2MarketData.MarketLimitsStructOutput;
    fundingParameters: PerpsV2MarketData.FundingParametersStructOutput;
    marketSizeDetails: PerpsV2MarketData.MarketSizeDetailsStructOutput;
    priceDetails: PerpsV2MarketData.PriceDetailsStructOutput;
  };

  export type PositionDataStruct = {
    position: IPerpsV2MarketBaseTypes.PositionStruct;
    notionalValue: PromiseOrValue<BigNumberish>;
    profitLoss: PromiseOrValue<BigNumberish>;
    accruedFunding: PromiseOrValue<BigNumberish>;
    remainingMargin: PromiseOrValue<BigNumberish>;
    accessibleMargin: PromiseOrValue<BigNumberish>;
    liquidationPrice: PromiseOrValue<BigNumberish>;
    canLiquidatePosition: PromiseOrValue<boolean>;
  };

  export type PositionDataStructOutput = [
    IPerpsV2MarketBaseTypes.PositionStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    position: IPerpsV2MarketBaseTypes.PositionStructOutput;
    notionalValue: BigNumber;
    profitLoss: BigNumber;
    accruedFunding: BigNumber;
    remainingMargin: BigNumber;
    accessibleMargin: BigNumber;
    liquidationPrice: BigNumber;
    canLiquidatePosition: boolean;
  };
}

export declare namespace IPerpsV2MarketSettings {
  export type ParametersStruct = {
    takerFee: PromiseOrValue<BigNumberish>;
    makerFee: PromiseOrValue<BigNumberish>;
    overrideCommitFee: PromiseOrValue<BigNumberish>;
    takerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeDelayedOrder: PromiseOrValue<BigNumberish>;
    takerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    makerFeeOffchainDelayedOrder: PromiseOrValue<BigNumberish>;
    maxLeverage: PromiseOrValue<BigNumberish>;
    maxMarketValue: PromiseOrValue<BigNumberish>;
    maxFundingVelocity: PromiseOrValue<BigNumberish>;
    skewScale: PromiseOrValue<BigNumberish>;
    nextPriceConfirmWindow: PromiseOrValue<BigNumberish>;
    delayedOrderConfirmWindow: PromiseOrValue<BigNumberish>;
    minDelayTimeDelta: PromiseOrValue<BigNumberish>;
    maxDelayTimeDelta: PromiseOrValue<BigNumberish>;
    offchainDelayedOrderMinAge: PromiseOrValue<BigNumberish>;
    offchainDelayedOrderMaxAge: PromiseOrValue<BigNumberish>;
    offchainMarketKey: PromiseOrValue<BytesLike>;
    offchainPriceDivergence: PromiseOrValue<BigNumberish>;
  };

  export type ParametersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    takerFee: BigNumber;
    makerFee: BigNumber;
    overrideCommitFee: BigNumber;
    takerFeeDelayedOrder: BigNumber;
    makerFeeDelayedOrder: BigNumber;
    takerFeeOffchainDelayedOrder: BigNumber;
    makerFeeOffchainDelayedOrder: BigNumber;
    maxLeverage: BigNumber;
    maxMarketValue: BigNumber;
    maxFundingVelocity: BigNumber;
    skewScale: BigNumber;
    nextPriceConfirmWindow: BigNumber;
    delayedOrderConfirmWindow: BigNumber;
    minDelayTimeDelta: BigNumber;
    maxDelayTimeDelta: BigNumber;
    offchainDelayedOrderMinAge: BigNumber;
    offchainDelayedOrderMaxAge: BigNumber;
    offchainMarketKey: string;
    offchainPriceDivergence: BigNumber;
  };
}

export declare namespace IPerpsV2MarketBaseTypes {
  export type PositionStruct = {
    id: PromiseOrValue<BigNumberish>;
    lastFundingIndex: PromiseOrValue<BigNumberish>;
    margin: PromiseOrValue<BigNumberish>;
    lastPrice: PromiseOrValue<BigNumberish>;
    size: PromiseOrValue<BigNumberish>;
  };

  export type PositionStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    id: BigNumber;
    lastFundingIndex: BigNumber;
    margin: BigNumber;
    lastPrice: BigNumber;
    size: BigNumber;
  };
}

export interface PerpsV2MarketDataInterface extends utils.Interface {
  functions: {
    'allMarketSummaries()': FunctionFragment;
    'allProxiedMarketSummaries()': FunctionFragment;
    'globals()': FunctionFragment;
    'marketDetails(address)': FunctionFragment;
    'marketDetailsForKey(bytes32)': FunctionFragment;
    'marketSummaries(address[])': FunctionFragment;
    'marketSummariesForKeys(bytes32[])': FunctionFragment;
    'parameters(bytes32)': FunctionFragment;
    'positionDetails(address,address)': FunctionFragment;
    'positionDetailsForMarketKey(bytes32,address)': FunctionFragment;
    'resolverProxy()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allMarketSummaries'
      | 'allProxiedMarketSummaries'
      | 'globals'
      | 'marketDetails'
      | 'marketDetailsForKey'
      | 'marketSummaries'
      | 'marketSummariesForKeys'
      | 'parameters'
      | 'positionDetails'
      | 'positionDetailsForMarketKey'
      | 'resolverProxy'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'allMarketSummaries', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allProxiedMarketSummaries', values?: undefined): string;
  encodeFunctionData(functionFragment: 'globals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'marketDetails', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'marketDetailsForKey',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'marketSummaries',
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'marketSummariesForKeys',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'parameters', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'positionDetails',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'positionDetailsForMarketKey',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'resolverProxy', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'allMarketSummaries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allProxiedMarketSummaries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'globals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketDetailsForKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketSummaries', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketSummariesForKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'parameters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'positionDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'positionDetailsForMarketKey', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverProxy', data: BytesLike): Result;

  events: {};
}

export interface PerpsV2MarketData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpsV2MarketDataInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allMarketSummaries(
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketSummaryStructOutput[]]>;

    allProxiedMarketSummaries(
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketSummaryStructOutput[]]>;

    globals(overrides?: CallOverrides): Promise<[PerpsV2MarketData.FuturesGlobalsStructOutput]>;

    marketDetails(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketDataStructOutput]>;

    marketDetailsForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketDataStructOutput]>;

    marketSummaries(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketSummaryStructOutput[]]>;

    marketSummariesForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.MarketSummaryStructOutput[]]>;

    parameters(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[IPerpsV2MarketSettings.ParametersStructOutput]>;

    positionDetails(
      market: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.PositionDataStructOutput]>;

    positionDetailsForMarketKey(
      marketKey: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[PerpsV2MarketData.PositionDataStructOutput]>;

    resolverProxy(overrides?: CallOverrides): Promise<[string]>;
  };

  allMarketSummaries(
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

  allProxiedMarketSummaries(
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

  globals(overrides?: CallOverrides): Promise<PerpsV2MarketData.FuturesGlobalsStructOutput>;

  marketDetails(
    market: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketDataStructOutput>;

  marketDetailsForKey(
    marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketDataStructOutput>;

  marketSummaries(
    markets: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

  marketSummariesForKeys(
    marketKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

  parameters(
    marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IPerpsV2MarketSettings.ParametersStructOutput>;

  positionDetails(
    market: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.PositionDataStructOutput>;

  positionDetailsForMarketKey(
    marketKey: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<PerpsV2MarketData.PositionDataStructOutput>;

  resolverProxy(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allMarketSummaries(
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

    allProxiedMarketSummaries(
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

    globals(overrides?: CallOverrides): Promise<PerpsV2MarketData.FuturesGlobalsStructOutput>;

    marketDetails(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketDataStructOutput>;

    marketDetailsForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketDataStructOutput>;

    marketSummaries(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

    marketSummariesForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.MarketSummaryStructOutput[]>;

    parameters(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPerpsV2MarketSettings.ParametersStructOutput>;

    positionDetails(
      market: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.PositionDataStructOutput>;

    positionDetailsForMarketKey(
      marketKey: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PerpsV2MarketData.PositionDataStructOutput>;

    resolverProxy(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    allMarketSummaries(overrides?: CallOverrides): Promise<BigNumber>;

    allProxiedMarketSummaries(overrides?: CallOverrides): Promise<BigNumber>;

    globals(overrides?: CallOverrides): Promise<BigNumber>;

    marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    marketDetailsForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketSummaries(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketSummariesForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    positionDetails(
      market: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positionDetailsForMarketKey(
      marketKey: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolverProxy(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allMarketSummaries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allProxiedMarketSummaries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    globals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketDetails(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketDetailsForKey(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketSummaries(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketSummariesForKeys(
      marketKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parameters(
      marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionDetails(
      market: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionDetailsForMarketKey(
      marketKey: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolverProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
