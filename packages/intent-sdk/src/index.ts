/**
 * @lika/intent-sdk
 *
 * TypeScript SDK for the Lika Protocol (Lika).
 * Handles IntentBundle construction, EIP-712 signing, serialization,
 * calldata derivation, and human-readable descriptions.
 */

// Core types
export * from "./types";

// Constants & chain config
export * from "./constants";

// Bundle construction, signing, serialization
export {
  generateNonce,
  calculateExpiry,
  createIntentBundle,
  getEIP712TypedData,
  getZKIntentTypedData,
  signIntentBundle,
  computeIntentId,
  serializeBundle,
  deserializeBundle,
  bundleToJSON,
  bundleFromJSON,
  deriveCalldata,
  describeIntent,
} from "./bundle";
