import { http, createConfig } from 'wagmi'
import { mantleSepoliaTestnet } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mantleSepoliaTestnet],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
      metadata: {
        name: 'GO BUZZ',
        description: 'SocialFi Engagement Marketplace - Verified Contributions, Fair Rewards',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://gobuzz.app',
        icons: ['https://avatars.githubusercontent.com/u/37784886']
      },
      showQrModal: true,
    }),
    injected(),
  ],
  transports: {
    [mantleSepoliaTestnet.id]: http('https://rpc.sepolia.mantle.xyz'),
  },
})
