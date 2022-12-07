// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from '@graphprotocol/graph-ts';

export class CollateralConfigured extends ethereum.Event {
  get params(): CollateralConfigured__Params {
    return new CollateralConfigured__Params(this);
  }
}

export class CollateralConfigured__Params {
  _event: CollateralConfigured;

  constructor(event: CollateralConfigured) {
    this._event = event;
  }

  get collateralType(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get config(): CollateralConfiguredConfigStruct {
    return changetype<CollateralConfiguredConfigStruct>(this._event.parameters[1].value.toTuple());
  }
}

export class CollateralConfiguredConfigStruct extends ethereum.Tuple {
  get depositingEnabled(): boolean {
    return this[0].toBoolean();
  }

  get issuanceRatioD18(): BigInt {
    return this[1].toBigInt();
  }

  get liquidationRatioD18(): BigInt {
    return this[2].toBigInt();
  }

  get liquidationRewardD18(): BigInt {
    return this[3].toBigInt();
  }

  get oracleNodeId(): Bytes {
    return this[4].toBytes();
  }

  get tokenAddress(): Address {
    return this[5].toAddress();
  }

  get minDelegationD18(): BigInt {
    return this[6].toBigInt();
  }
}

export class CollateralConfigurationModule__getCollateralConfigurationResultValue0Struct extends ethereum.Tuple {
  get depositingEnabled(): boolean {
    return this[0].toBoolean();
  }

  get issuanceRatioD18(): BigInt {
    return this[1].toBigInt();
  }

  get liquidationRatioD18(): BigInt {
    return this[2].toBigInt();
  }

  get liquidationRewardD18(): BigInt {
    return this[3].toBigInt();
  }

  get oracleNodeId(): Bytes {
    return this[4].toBytes();
  }

  get tokenAddress(): Address {
    return this[5].toAddress();
  }

  get minDelegationD18(): BigInt {
    return this[6].toBigInt();
  }
}

export class CollateralConfigurationModule__getCollateralConfigurationsResultValue0Struct extends ethereum.Tuple {
  get depositingEnabled(): boolean {
    return this[0].toBoolean();
  }

  get issuanceRatioD18(): BigInt {
    return this[1].toBigInt();
  }

  get liquidationRatioD18(): BigInt {
    return this[2].toBigInt();
  }

  get liquidationRewardD18(): BigInt {
    return this[3].toBigInt();
  }

  get oracleNodeId(): Bytes {
    return this[4].toBytes();
  }

  get tokenAddress(): Address {
    return this[5].toAddress();
  }

  get minDelegationD18(): BigInt {
    return this[6].toBigInt();
  }
}

export class CollateralConfigurationModule extends ethereum.SmartContract {
  static bind(address: Address): CollateralConfigurationModule {
    return new CollateralConfigurationModule('CollateralConfigurationModule', address);
  }

  getCollateralConfiguration(
    collateralType: Address
  ): CollateralConfigurationModule__getCollateralConfigurationResultValue0Struct {
    let result = super.call(
      'getCollateralConfiguration',
      'getCollateralConfiguration(address):((bool,uint256,uint256,uint256,bytes32,address,uint256))',
      [ethereum.Value.fromAddress(collateralType)]
    );

    return changetype<CollateralConfigurationModule__getCollateralConfigurationResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getCollateralConfiguration(
    collateralType: Address
  ): ethereum.CallResult<CollateralConfigurationModule__getCollateralConfigurationResultValue0Struct> {
    let result = super.tryCall(
      'getCollateralConfiguration',
      'getCollateralConfiguration(address):((bool,uint256,uint256,uint256,bytes32,address,uint256))',
      [ethereum.Value.fromAddress(collateralType)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CollateralConfigurationModule__getCollateralConfigurationResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getCollateralConfigurations(
    hideDisabled: boolean
  ): Array<CollateralConfigurationModule__getCollateralConfigurationsResultValue0Struct> {
    let result = super.call(
      'getCollateralConfigurations',
      'getCollateralConfigurations(bool):((bool,uint256,uint256,uint256,bytes32,address,uint256)[])',
      [ethereum.Value.fromBoolean(hideDisabled)]
    );

    return result[0].toTupleArray<CollateralConfigurationModule__getCollateralConfigurationsResultValue0Struct>();
  }

  try_getCollateralConfigurations(
    hideDisabled: boolean
  ): ethereum.CallResult<
    Array<CollateralConfigurationModule__getCollateralConfigurationsResultValue0Struct>
  > {
    let result = super.tryCall(
      'getCollateralConfigurations',
      'getCollateralConfigurations(bool):((bool,uint256,uint256,uint256,bytes32,address,uint256)[])',
      [ethereum.Value.fromBoolean(hideDisabled)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CollateralConfigurationModule__getCollateralConfigurationsResultValue0Struct>()
    );
  }

  getCollateralPrice(collateralType: Address): BigInt {
    let result = super.call('getCollateralPrice', 'getCollateralPrice(address):(uint256)', [
      ethereum.Value.fromAddress(collateralType),
    ]);

    return result[0].toBigInt();
  }

  try_getCollateralPrice(collateralType: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('getCollateralPrice', 'getCollateralPrice(address):(uint256)', [
      ethereum.Value.fromAddress(collateralType),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConfigureCollateralCall extends ethereum.Call {
  get inputs(): ConfigureCollateralCall__Inputs {
    return new ConfigureCollateralCall__Inputs(this);
  }

  get outputs(): ConfigureCollateralCall__Outputs {
    return new ConfigureCollateralCall__Outputs(this);
  }
}

export class ConfigureCollateralCall__Inputs {
  _call: ConfigureCollateralCall;

  constructor(call: ConfigureCollateralCall) {
    this._call = call;
  }

  get config(): ConfigureCollateralCallConfigStruct {
    return changetype<ConfigureCollateralCallConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ConfigureCollateralCall__Outputs {
  _call: ConfigureCollateralCall;

  constructor(call: ConfigureCollateralCall) {
    this._call = call;
  }
}

export class ConfigureCollateralCallConfigStruct extends ethereum.Tuple {
  get depositingEnabled(): boolean {
    return this[0].toBoolean();
  }

  get issuanceRatioD18(): BigInt {
    return this[1].toBigInt();
  }

  get liquidationRatioD18(): BigInt {
    return this[2].toBigInt();
  }

  get liquidationRewardD18(): BigInt {
    return this[3].toBigInt();
  }

  get oracleNodeId(): Bytes {
    return this[4].toBytes();
  }

  get tokenAddress(): Address {
    return this[5].toAddress();
  }

  get minDelegationD18(): BigInt {
    return this[6].toBigInt();
  }
}