# Go Buzz

**Go Buzz** is a decentralized application (dApp) that integrates a modern web frontend, a backend server for off-chain logic, and EVM-compatible smart contracts.

## 🏗 Architecture & Tech Stack

The project is organized into three main components:

### 1. Frontend (`/frontend`)
The user interface is built with **Next.js 16** and **React 19**, leveraging modern Web3 libraries for wallet connection and interaction.
- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS
- **Web3 Integration**: Wagmi, Viem, Reown AppKit
- **State Management**: React Query (TanStack Query)
- **Database ORM**: Prisma (PostgreSQL)

### 2. Backend (`/backend`)
A Node.js/Express server handling off-chain logic, verifications, and API endpoints.
- **Runtime**: Node.js
- **Framework**: Express.js
- **Key Libraries**: Reclaim Protocol SDK (for zero-knowledge proofs/fetch), Dotenv, Cors

### 3. Smart Contracts (`/smart-contract`)
Solidity smart contracts managed and tested using the **Foundry** toolkit.
- **Language**: Solidity
- **Framework**: Foundry (Forge, Cast, Anvil)

---

## 📂 Directory Structure

```
go-buzz/
├── backend/          # Node.js backend server
├── frontend/         # Next.js web application
├── smart-contract/   # Foundry smart contract project
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v20+ recommended)
- **npm** or **yarn** or **pnpm**
- **Foundry** (for smart contracts) -> [Installation Guide](https://book.getfoundry.sh/getting-started/installation)

### Installation & Running

#### 1. Smart Contracts
Compile and test the contracts first to ensure the ABI and artifacts are ready (if needed by frontend).

```bash
cd smart-contract
forge build
forge test
```

#### 2. Backend
Start the backend server.

```bash
cd backend
npm install
npm start
```
*The server typically runs on port 3000 or as defined in `.env`.*

#### 3. Frontend
Run the frontend development server.

```bash
cd frontend
npm install
# Set up environment variables as needed (copy .env.example if available)
npm run dev
```
*The application will be available at [http://localhost:3000](http://localhost:3000).*

---

## 📄 License
[Proprietary / To Be Defined]
