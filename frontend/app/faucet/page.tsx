"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { mockTokenAbi } from "@/abis/mockTokenAbi";
import { useState, useEffect } from "react";
import { parseUnits, formatUnits } from "viem";

const MOCK_TOKEN_ADDRESS = "0x44b4eaF8C3d0aaaDeF97B73eC545B87Ef28F01b6";

export default function FaucetPage() {
    const { address, isConnected } = useAccount();
    const { writeContract, isPending, isSuccess, error } = useWriteContract();
    const [txHash, setTxHash] = useState<string | null>(null);

    // Read decimals
    const { data: decimals } = useReadContract({
        address: MOCK_TOKEN_ADDRESS,
        abi: mockTokenAbi,
        functionName: "decimals",
    });

    // Read balance
    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: MOCK_TOKEN_ADDRESS,
        abi: mockTokenAbi,
        functionName: "balanceOf",
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    const handleMint = () => {
        if (!address || decimals === undefined) return;

        const amountToMint = parseUnits("10000", decimals);

        writeContract(
            {
                address: MOCK_TOKEN_ADDRESS,
                abi: mockTokenAbi,
                functionName: "mint",
                args: [address, amountToMint],
            },
            {
                onSuccess: (data) => {
                    setTxHash(data);
                },
            }
        );
    };

    useEffect(() => {
        if (isSuccess) {
            refetchBalance();
        }
    }, [isSuccess, refetchBalance]);

    return (
        <div className="min-h-screen bg-[#0F1419] text-white pt-24 pb-12 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-mono">
                        TESTNET FAUCET
                    </h1>
                    <p className="text-[#B8C2CC]">
                        Mint test tokens to interact with the Go Buzz platform on Mantle Sepolia.
                    </p>
                </div>

                <div className="bg-[#1A1F2E]/50 border border-[#2A3441] rounded-2xl p-8 backdrop-blur-sm">
                    {!isConnected ? (
                        <div className="text-center py-8">
                            <p className="text-[#B8C2CC] mb-4">
                                Please connect your wallet to use the faucet
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="flex flex-col items-center justify-center p-6 bg-[#0F1419] rounded-xl border border-[#2A3441]">
                                <span className="text-[#B8C2CC] text-sm mb-2 uppercase tracking-wider">
                                    Your Balance
                                </span>
                                <span className="text-3xl font-bold text-white font-mono">
                                    {balance !== undefined && decimals !== undefined
                                        ? Number(formatUnits(balance, decimals)).toLocaleString()
                                        : "0"}
                                </span>
                                <span className="text-[#3AE8FF] text-sm mt-1">TEST TOKENS</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleMint}
                                    disabled={isPending || decimals === undefined}
                                    className={`
                    w-full py-4 px-6 rounded-xl font-bold text-lg transition-all
                    ${isPending
                                            ? "bg-[#2A3441] text-[#B8C2CC] cursor-not-allowed"
                                            : "bg-[#3AE8FF] text-black hover:bg-[#3AE8FF]/90 hover:shadow-[0_0_20px_rgba(58,232,255,0.3)]"
                                        }
                  `}
                                >
                                    {isPending ? "Minting..." : "Mint 10,000 Tokens"}
                                </button>
                            </div>

                            {txHash && (
                                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                    <p className="text-green-400 text-sm text-center">
                                        Successfully submitted!{" "}
                                        <a
                                            href={`https://sepolia.mantlescan.xyz/tx/${txHash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-green-300"
                                        >
                                            View on Explorer
                                        </a>
                                    </p>
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <p className="text-red-400 text-sm text-center">
                                        Error: {error.message.split("\n")[0]}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[#B8C2CC] text-xs">
                        Token Contract: <span className="font-mono text-[#3AE8FF]">{MOCK_TOKEN_ADDRESS}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
