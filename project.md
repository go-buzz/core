# Go Buzz Project Documentation

## Project Overview

**Go Buzz** is a decentralized engagement platform (dApp) designed to bridge the gap between brands and social media users ("buzzers"). It leverages blockchain technology to create transparent, incentivized marketing campaigns where brands can reward users for authentic social interactions. By integrating off-chain social validation with on-chain reward distribution, Go Buzz ensures fair compensation for creators and verifiable engagement for brands.

## Project Focus

The project focuses on **Decentralized Social Engagement** and **Incentivized Marketing**. It aims to empower:
- **Brands/Creators**: To launch transparent marketing campaigns with verifiable results.
- **Buzzers (Participants)**: To earn crypto rewards for their social influence and engagement in a permissionless environment.

## Problems Statement

The current influencer marketing and social engagement landscape suffers from several critical issues:
- **Lack of Transparency**: Brands often cannot verify if the engagement they paid for is authentic or bot-driven.
- **Trust Issues**: Intermediaries often take large cuts, and there is frequently friction in verifying task completion and distributing payments.
- **Inefficient Execution**: Manual tracking of likes, retweets, and follows is tedious and error-prone.
- **Negative Perception**: "Buzzers" are often viewed negatively due to the lack of structured, professional platforms that validate their work.

## Proposed Solution

Go Buzz addresses these challenges by building a trustless, automated platform:
- **Automated Verification**: utilizing **Reclaim Protocol** and direct API integrations to kryptographically or pragmatically verify social actions (e.g., Retweets, Follows, Likes) without human intervention.
- **Smart Contract Escrow**: Rewards are locked in smart contracts and only released upon successful, verified completion of tasks, ensuring guaranteed payout for buzzers and guaranteed work for brands.
- **Structured Roles**: By formalizing the "buzzer" role within a dApp, Go Buzz professionalizes social engagement, turning it into a transparent capabilities-based marketplace.

## Core Features

### 1. Campaign Creation and Management
Brands can effortlessly launch campaigns by defining:
- **Campaign Details**: Name, description, and duration.
- **Budget**: Initial token reward pool and reward amount per claim.
- **Rules**: Specific tasks users must complete (e.g., Follow Twitter, Retweet, Like, Comment, Minimum Followers).

### 2. Participant Onboarding
- **Wallet Connection**: Seamless login via Web3 wallets (Metamask, etc.).
- **Social Linkage**: Secure linking of social accounts for verification purposes.

### 3. Task Execution and Validation
- **Real-time Verification**: The system checks social media actions in real-time using Twitter API integrations and ZK-proof technology (Reclaim Protocol).
- **Rule Enforcement**: Ensures users meet criteria (e.g., minimum follower count) before allowing participation.

### 4. Reward Mechanism
- **Automated Payouts**: Once tasks are verified, smart contracts automatically distribute ERC20 tokens to the participant's wallet.
- **Transparency**: All transactions are recorded on-chain, providing an immutable audit trail.

### 5. Dashboard and Analytics (Planned)
- Views for brands to track campaign performance.
- Views for buzzers to track earnings and available tasks.

## System Architecture

The Go Buzz system is composed of three primary layers:

### 1. Frontend (User Interface)
A responsive web application enabling users to interact with the platform.
- Connects to wallets for authentication.
- Displays campaigns and forms for creation/submission.
- Communicates with the Backend for validation and the Blockchain for transactions.

### 2. Backend API (Logic & Validation)
An off-chain server responsible for:
- Handling complex validation logic (e.g., checking Twitter APIs).
- Interacting with Reclaim Protocol for generating proofs.
- Storing campaign metadata (descriptions, rule configurations) that doesn't need to be on-chain.

### 3. Blockchain (Smart Contracts)
The trust layer deployed on EVM-compatible networks (Mantle Sepolia).
- **Factory Contract**: Deploys unique contracts for individual campaigns.
- **Campaign Contracts**: Manage funds and logic for specific campaigns.
- **Token Contracts**: ERC20 tokens used for rewards.

### High-Level Data Flow
1. **Brand** creates campaign -> Frontend deploys Contract & saves metadata to Backend.
2. **Buzzer** views campaign -> Frontend fetches data from Contract & Backend.
3. **Buzzer** performs task (e.g., Retweet).
4. **Buzzer** requests verification -> Backend validates action via Social API.
5. **Backend** issues proof/signature -> **Buzzer** submits claim to Smart Contract.
6. **Smart Contract** verifies proof -> Transfers tokens to **Buzzer**.

## Technology Stack

### Frontend
- **Framework**: **Next.js 16** (App Router) & **React 19**
- **Styling**: **TailwindCSS** for modern, responsive design.
- **Web3**: **Wagmi** & **Viem** for blockchain interactions; **Reown AppKit** for wallet modal.
- **State/Query**: **TanStack Query** (React Query).
- **Database ORM**: **Prisma** (PostgreSQL) for managing off-chain data.

### Backend
- **Runtime**: **Node.js**
- **Framework**: **Express.js** for RESTful API endpoints.
- **Verification**: **Reclaim Protocol SDK** & **Twitter API v2** for social proof validation.

### Blockchain
- **Network**: **Mantle Sepolia Testnet**
- **Development**: **Foundry** (Forge, Cast, Anvil) for testing and deployment.
- **Languages**: **Solidity** for smart contracts; **Rust** (via Foundry) for tooling.

## Target Users

1. **Campaign Creators (Brands/Projects)**: Entities looking to increase social reach and engagement authentically.
2. **Buzzers (Participants)**: Social media users, influencers, and community members looking to earn rewards for their online activity.

## Future Improvements

- **Multi-Chain Support**: Expansion to other EVM networks (Optimism, Arbitrum, Base).
- **Advanced Analytics**: Detailed dashboards for ROI tracking.
- **More Social Platforms**: Integration with Discord, Telegram, and YouTube.
- **Staking Mechanisms**: Require buzzers to stake tokens to ensure high-quality engagement.
- **Reputation System**: On-chain scoring for high-performing buzzers.
