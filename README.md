# Lika — ZK-Verified AI Agent Settlement on Kite

Lika is a protocol where AI agents execute on-chain transactions with **cryptographic guarantees**. Users sign an intent ("pay 25 USDC"), the agent generates a **Groth16 ZK proof** that the calldata matches that intent, and a smart contract wallet verifies the proof on-chain before execution. The agent cannot cheat — the ZK proof binds the signed intent to the executed calldata.

Built for the **Kite AI Hackathon**. Runs on **Kite AI Testnet** and **Base Sepolia**.

## Architecture

```
User signs intent (EIP-712)
       │
       ▼
AI agent interprets → constructs IntentBundle → generates Groth16 proof
       │
       ▼
AgentWallet.executeWithProof() verifies on-chain → executes calldata
       │
       ▼
ZK proof attested on Kite chain — auditable, non-repudiable
```

### Components

| Package | What |
|---------|------|
| `contracts/` | AgentWallet (ERC-8150), Factory, Groth16Verifier, ERC-8004 |
| `circuits/` | Circom ZK circuit — 10,790 constraints, Poseidon hashing |
| `packages/intent-sdk/` | IntentBundle construction, signing, Poseidon commitment |
| `packages/mcp-server/` | MCP tools for AI agents (23 tools) |
| `packages/server/` | Express backend — LLM bridge + MCP routing |
| `packages/frontend/` | React/Vite chat UI |
| `packages/prover-service/` | Groth16 proof generation (snarkjs) |
| `packages/canton-settlement/` | Canton Daml integration (privacy-preserving settlement) |

## Quick Start

```bash
cp .env.example .env
# Edit .env with your keys and RPC URLs
npm install
npm run dev
```

### Prerequisites

- Node.js 18+
- MetaMask or Kite Passport
- Funded wallet on Kite AI Testnet ([faucet](https://faucet.gokite.ai))

### Deploy Contracts

```bash
DEFAULT_CHAIN=kite_testnet node scripts/deploy.js
```

### Docker

```bash
./lika.sh up
```

## ZK Intent Flow

1. **User** signs a ZKIntent (EIP-712) with actions, nonce, expiry
2. **Agent** computes Poseidon(actions) as the on-chain commitment
3. **Agent** generates a Groth16 proof proving calldata is a correct derivation of the signed intent
4. **AgentWallet** verifies the proof, executes the calldata atomically
5. **Attestation** stored on Kite chain — immutable audit trail

## Kite AI Integration

Lika uses **Kite AI Testnet** (chain ID 2368, `rpc-testnet.gokite.ai`) for:
- **ZK proof attestations** — verifiable audit trail on-chain
- **USDC.e settlement** — stablecoin payments via real USDC.e address
- **Agent identity** — BIP-32 derived agent addresses
- **x402 micropayments** — via Kite Passport sessions

## License

MIT
