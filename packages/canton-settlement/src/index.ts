/**
 * @lika/canton-settlement — Canton coordination layer for Lika
 *
 * Privacy-preserving multi-party settlement using Canton (Daml) + Lika (ERC-8150).
 * Canton records agreements and ZK attestations. Lika executes verified transfers on EVM.
 */

export { CantonClient } from "./canton-client";
export { SettlementBridge } from "./settlement-bridge";
export type {
  CantonConfig,
  ContractRef,
  CustodyAttestation,
  Settlement,
  ExecutionReceipt,
  SettlementIntent,
  SettlementResult,
  ChainId,
  ClaimType,
} from "./types";
export type { BridgeConfig } from "./settlement-bridge";
