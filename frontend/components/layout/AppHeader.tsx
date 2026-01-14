'use client';

import { useState, useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Logo from './Logo';
import { ConnectWallet } from '../wallet';

interface AppHeaderProps {
  showHistory?: boolean;
  onConnectClick?: () => void;
}

export default function AppHeader({ showHistory = true, onConnectClick }: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleDisconnect = () => {
    disconnect();
    setMenuOpen(false);
  };

  const handleConnectSuccess = () => {
    setMenuOpen(false);
    if (onConnectClick) onConnectClick();
  };

  const menuContent = menuOpen && mounted ? (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Sidebar Menu */}
      <div
        className="fixed top-0 right-0 h-full w-80 bg-[#0F1419] border-l border-[#2A3441] shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2A3441]">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#B8C2CC] hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Wallet Status */}
        <div className="p-6 border-b border-[#2A3441]">
          {isConnected && address ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#3AE8FF] rounded-full animate-pulse" />
                <span className="text-[#B8C2CC] text-xs uppercase tracking-wider">Wallet Connected</span>
              </div>
              <div className="bg-[#1A1F2E]/50 border border-[#2A3441] rounded-lg p-3 mb-4">
                <p className="text-white font-mono text-sm break-all">
                  {formatAddress(address)}
                </p>
              </div>
              <button
                onClick={handleDisconnect}
                className="w-full px-4 py-2 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors"
              >
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-[#B8C2CC] text-sm mb-2">Connect your wallet to get started</p>
              </div>
              <ConnectWallet onConnect={handleConnectSuccess} />
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1F2E]/50 transition-colors group">
                  <svg className="w-5 h-5 text-[#B8C2CC] group-hover:text-[#3AE8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-white font-medium group-hover:text-[#3AE8FF]">Home</span>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/app" onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1F2E]/50 transition-colors group">
                  <svg className="w-5 h-5 text-[#B8C2CC] group-hover:text-[#3AE8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-white font-medium group-hover:text-[#3AE8FF]">Campaigns</span>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/faucet" onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1F2E]/50 transition-colors group">
                  <svg className="w-5 h-5 text-[#B8C2CC] group-hover:text-[#3AE8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-medium group-hover:text-[#3AE8FF]">Faucet</span>
                </div>
              </Link>
            </li>

            {showHistory && (
              <li>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full"
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1F2E]/50 transition-colors group">
                    <svg className="w-5 h-5 text-[#B8C2CC] group-hover:text-[#3AE8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-medium group-hover:text-[#3AE8FF]">My History</span>
                  </div>
                </button>
              </li>
            )}

            {isConnected && (
              <li>
                <Link href="/app/dashboard" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1F2E]/50 transition-colors group">
                    <svg className="w-5 h-5 text-[#B8C2CC] group-hover:text-[#3AE8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-white font-medium group-hover:text-[#3AE8FF]">Dashboard</span>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#2A3441]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#3AE8FF] rounded-full" />
            <span className="text-[#3AE8FF] font-mono text-xs">GOBUZZ_PLATFORM</span>
          </div>
          <p className="text-[#B8C2CC] text-xs">
            Powered by Reclaim Protocol
          </p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <header className="app-header">
      <div className="app-header-glow" />
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo Only */}
          <div className="flex items-center">
            <Logo size="small" linkTo="/" />
          </div>

          {/* Right Side - Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 p-2 text-white hover:text-[#3AE8FF] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Render menu using portal to body */}
      {mounted && typeof window !== 'undefined' && createPortal(menuContent, document.body)}
    </header>
  );
}
