import { newMockEvent } from 'matchstick-as';
import { ethereum, Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  DelayedOrderRemoved,
  DelayedOrderSubmitted,
  PositionModified,
  PositionLiquidated,
  MarginTransferred,
  FundingRecomputed1,
} from '../generated/PerpsV2ProxyAAVEPERP/PerpsV2Proxy';

function createBlock(timestamp: i64, blockNumber: i64): Map<string, i64> {
  const newBlock = new Map<string, i64>();
  newBlock.set('timestamp', timestamp);
  newBlock.set('blockNumber', blockNumber);
  return newBlock;
}

export function createPositionModifiedEvent(
  id: BigInt,
  account: Address,
  margin: BigInt,
  size: BigInt,
  tradeSize: BigInt,
  lastPrice: BigInt,
  fundingIndex: BigInt,
  fee: BigInt,
  timestamp: i64,
  logIndex: i64 = 0
): PositionModified {
  let positionModifiedEvent = changetype<PositionModified>(newMockEvent());
  positionModifiedEvent.parameters = new Array();
  const block = createBlock(timestamp, 5);
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('id', ethereum.Value.fromUnsignedBigInt(id))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('margin', ethereum.Value.fromUnsignedBigInt(margin))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('size', ethereum.Value.fromSignedBigInt(size))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('tradeSize', ethereum.Value.fromSignedBigInt(tradeSize))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('lastPrice', ethereum.Value.fromUnsignedBigInt(lastPrice))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('fundingIndex', ethereum.Value.fromUnsignedBigInt(fundingIndex))
  );
  positionModifiedEvent.parameters.push(
    new ethereum.EventParam('fee', ethereum.Value.fromUnsignedBigInt(fee))
  );

  positionModifiedEvent.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) positionModifiedEvent.logIndex = BigInt.fromI64(logIndex);
  return positionModifiedEvent;
}

export function createPositionLiquidatedEvent(
  id: BigInt,
  account: Address,
  liquidator: Address,
  size: BigInt,
  price: BigInt,
  fee: BigInt,
  timestamp: i64,
  logIndex: i64 = 0
): PositionLiquidated {
  let positionLiquidatedEvent = changetype<PositionLiquidated>(newMockEvent());
  positionLiquidatedEvent.parameters = new Array();
  const block = createBlock(timestamp, 5);
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('id', ethereum.Value.fromUnsignedBigInt(id))
  );
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
  );
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('liquidator', ethereum.Value.fromAddress(liquidator))
  );
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('size', ethereum.Value.fromSignedBigInt(size))
  );
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('price', ethereum.Value.fromSignedBigInt(price))
  );
  positionLiquidatedEvent.parameters.push(
    new ethereum.EventParam('fee', ethereum.Value.fromUnsignedBigInt(fee))
  );
  positionLiquidatedEvent.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) positionLiquidatedEvent.logIndex = BigInt.fromI64(logIndex);
  return positionLiquidatedEvent;
}

export function createDelayedOrderRemovedEvent(
  account: Address,
  isOffchain: boolean,
  currentRoundId: BigInt,
  sizeDelta: BigInt,
  targetRoundId: BigInt,
  commitDeposit: BigInt,
  keeperDeposit: BigInt,
  trackingCode: Bytes,
  timestamp: i64,
  logIndex: i64 = 0
): DelayedOrderRemoved {
  let delayedOrderRemovedEvent = changetype<DelayedOrderRemoved>(newMockEvent());
  delayedOrderRemovedEvent.parameters = new Array();
  const block = createBlock(timestamp, 5);
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('isOffchain', ethereum.Value.fromBoolean(isOffchain))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('currentRoundId', ethereum.Value.fromSignedBigInt(currentRoundId))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('sizeDelta', ethereum.Value.fromSignedBigInt(sizeDelta))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('targetRoundId', ethereum.Value.fromSignedBigInt(targetRoundId))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('commitDeposit', ethereum.Value.fromSignedBigInt(commitDeposit))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('keeperDeposit', ethereum.Value.fromSignedBigInt(keeperDeposit))
  );
  delayedOrderRemovedEvent.parameters.push(
    new ethereum.EventParam('trackingCode', ethereum.Value.fromBytes(trackingCode))
  );
  delayedOrderRemovedEvent.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) delayedOrderRemovedEvent.logIndex = BigInt.fromI64(logIndex);
  return delayedOrderRemovedEvent;
}

export function createDelayedOrderSubmittedEvent(
  account: Address,
  isOffchain: boolean,
  sizeDelta: BigInt,
  targetRoundId: BigInt,
  intentionTime: BigInt,
  executableAtTime: BigInt,
  commitDeposit: BigInt,
  keeperDeposit: BigInt,
  trackingCode: Bytes,
  timestamp: i64,
  logIndex: i64 = 0
): DelayedOrderSubmitted {
  let delayedOrderSubmitted = changetype<DelayedOrderSubmitted>(newMockEvent());
  delayedOrderSubmitted.parameters = new Array();
  const block = createBlock(timestamp, 5);
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('isOffchain', ethereum.Value.fromBoolean(isOffchain))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('sizeDelta', ethereum.Value.fromSignedBigInt(sizeDelta))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('targetRoundId', ethereum.Value.fromSignedBigInt(targetRoundId))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('intentionTime', ethereum.Value.fromSignedBigInt(intentionTime))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('executableAtTime', ethereum.Value.fromSignedBigInt(executableAtTime))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('commitDeposit', ethereum.Value.fromSignedBigInt(commitDeposit))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('keeperDeposit', ethereum.Value.fromSignedBigInt(keeperDeposit))
  );
  delayedOrderSubmitted.parameters.push(
    new ethereum.EventParam('trackingCode', ethereum.Value.fromBytes(trackingCode))
  );
  delayedOrderSubmitted.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) delayedOrderSubmitted.logIndex = BigInt.fromI64(logIndex);
  return delayedOrderSubmitted;
}

export function createMarginTransferredEvent(
  sender: Address,
  marginDelta: BigInt,
  timestamp: i64,
  logIndex: i64 = 0
): MarginTransferred {
  let marginTransferredEvent = changetype<MarginTransferred>(newMockEvent());
  marginTransferredEvent.parameters = new Array();
  const block = createBlock(timestamp, 5);
  marginTransferredEvent.parameters.push(
    new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  );

  marginTransferredEvent.parameters.push(
    new ethereum.EventParam('marginDelta', ethereum.Value.fromSignedBigInt(marginDelta))
  );
  marginTransferredEvent.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) marginTransferredEvent.logIndex = BigInt.fromI64(logIndex);
  return marginTransferredEvent;
}

export function createFunctionRecomputedEvent(
  funding: BigInt,
  fundingRate: BigInt,
  index: BigInt,
  timestamp: BigInt,
  blockTimestamp: i64,
  logIndex: i64 = 0
): FundingRecomputed1 {
  let fundingRecomputedEvent = changetype<FundingRecomputed1>(newMockEvent());
  fundingRecomputedEvent.parameters = new Array();
  const block = createBlock(blockTimestamp, 5);
  fundingRecomputedEvent.parameters.push(
    new ethereum.EventParam('funding', ethereum.Value.fromSignedBigInt(funding))
  );
  fundingRecomputedEvent.parameters.push(
    new ethereum.EventParam('fundingRate', ethereum.Value.fromSignedBigInt(fundingRate))
  );
  fundingRecomputedEvent.parameters.push(
    new ethereum.EventParam('index', ethereum.Value.fromSignedBigInt(index))
  );
  fundingRecomputedEvent.parameters.push(
    new ethereum.EventParam('timestamp', ethereum.Value.fromSignedBigInt(timestamp))
  );
  fundingRecomputedEvent.block.timestamp = BigInt.fromI64(block['timestamp']);
  if (logIndex) fundingRecomputedEvent.logIndex = BigInt.fromI64(logIndex);
  return fundingRecomputedEvent;
}