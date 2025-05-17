"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function EngineeringPage() {
  const [showModal, setShowModal] = useState(false)

  const handleRequestAccess = () => {
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-4 text-xl font-bold text-white">Request Backend Access</h3>
            <p className="mb-4 text-gray-300">To request access to SCANA&apos;s backend systems, please email:</p>
            <div className="mb-6 rounded-md bg-gray-800 p-3 text-center">
              <a href="mailto:williamsdev369@gmail.com" className="text-lg font-medium text-blue-400 hover:underline">
                williamsdev369@gmail.com
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Include your name, organization, and a brief description of your interest in SCANA&apos;s backend systems.
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-white">How SCANA Workflows Are Engineered</h1>
          <p className="text-lg text-gray-400">
            SCANA&apos;s automation and AI execution workflows are built using a highly modular, visual logic system
            hosted on our internal platform. The structure is designed for flexibility, scale, and rapid iteration.
          </p>
        </div>

        <div className="mb-12">
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7rpenE5enBAfKBjeuiJckcOdTSVULg.png"
              alt="SCANA's visual workflow system showing interconnected nodes and logic flows"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-500">SCANA&apos;s visual workflow engine in action</p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-blue-300">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Modular, Visual Logic Engine</h2>
            </div>
            <div className="mt-4 border-l-2 border-gray-800 pl-8">
              <p className="mb-4">
                All workflows are developed inside our private node-based automation platform — similar to a visual
                programming interface — which allows us to:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Chain conditional logic, filters, triggers, and actions</li>
                <li>Connect APIs, AI agents, and decision engines seamlessly</li>
                <li>Version, clone, and evolve workflows without breaking live deployments</li>
              </ul>
              <p className="mt-4">
                This visual engine lets us prototype, test, and deploy intelligent trading and messaging flows in real
                time.
              </p>
            </div>
          </section>

          <div className="border-b border-gray-800"></div>

          <section>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-purple-300">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Cloud-Native Workflow Infrastructure</h2>
            </div>
            <div className="mt-4 border-l-2 border-gray-800 pl-8">
              <p className="mb-4">Our workflow engine is fully cloud-based, enabling:</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Real-time syncing and updates across environments</li>
                <li>Backend execution of AI-driven logic and signal processing</li>
                <li>Secure, isolated environments for user-specific workflows</li>
              </ul>
              <p className="mt-4">
                This separation between logic layer and UI makes it easy to scale across users, strategies, or markets
                without rewriting core logic.
              </p>
            </div>
          </section>

          <div className="border-b border-gray-800"></div>

          <section>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">Front-End Integration (via Vercel)</h2>
            </div>
            <div className="mt-4 border-l-2 border-gray-800 pl-8">
              <p className="mb-4">
                The front-end for SCANA — including dashboard, user onboarding, and agent configuration — is deployed on
                Vercel. It connects to the workflow engine through secure API endpoints and includes:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Dynamic asset rendering</li>
                <li>User input capture and agent configuration</li>
                <li>Visual status of workflow activity and performance</li>
              </ul>
              <p className="mt-4">
                This makes SCANA feel seamless from the user&apos;s point of view, while preserving a strong
                backend/frontend separation for system reliability.
              </p>
            </div>
          </section>

          <div className="border-b border-gray-800"></div>

          <section>
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">GitHub Sync (In Progress)</h2>
            </div>
            <div className="mt-4 border-l-2 border-gray-800 pl-8">
              <p className="mb-4">
                While our infrastructure is already functional and deployed, we&apos;re in the process of:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Syncing all front-end and workflow configuration assets to a GitHub repository</li>
                <li>Standardizing deployment pipelines for collaborative development</li>
                <li>Enabling contributors to trace logic across both front and back ends</li>
              </ul>
              <p className="mt-4">
                This ensures that SCANA can evolve as an open, extensible AI trading framework in future iterations.
              </p>
            </div>
          </section>

          <div className="border-b border-gray-800"></div>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Summary</h2>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <p className="text-lg font-medium text-white">SCANA doesn&apos;t just &quot;run scripts.&quot;</p>
              <p className="mt-2 text-gray-300">
                It operates as a modular AI agent system where workflows are treated as living, programmable entities —
                visual, editable, and cloud-native.
              </p>
            </div>
          </section>

          {/* New Section: The SCANA MasterNode */}
          <div className="border-b border-gray-800"></div>

          <section>
            <h2 className="mb-6 text-3xl font-bold text-white">The SCANA MasterNode: Real-Time AI Execution Engine</h2>
            <p className="mb-6 text-lg text-gray-300">
              At the core of SCANA lies the MasterNode, a dynamic execution system designed to intelligently orchestrate
              every feature, query, and interaction across the platform.
            </p>
            <p className="mb-8 text-lg text-gray-300">
              It is not just a logic controller — it is a living, modular AI agent capable of adapting to user behavior,
              invoking workflows, and maintaining personalized trading experiences.
            </p>

            <div className="mb-8 overflow-hidden rounded-xl border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IRNb571pk8vqBi7zOnc0sFvhFVAZcM.png"
                alt="SCANA's MasterNode System showing the complete orchestration of all functionality"
                width={1200}
                height={800}
                className="w-full"
              />
              <p className="mt-2 bg-gray-900 p-2 text-center text-sm text-gray-500">
                The comprehensive MasterNode system showing the complete orchestration of all SCANA functionality
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold text-blue-400">Key Functions of the MasterNode</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Token Discovery & Scanning</h4>
                    <p className="mb-1 text-sm text-blue-300">/explore, /trending, /verified</p>
                    <p className="text-sm text-gray-400">
                      Pulls live blockchain data, filters by risk, novelty, and trend velocity
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Security Auditing</h4>
                    <p className="mb-1 text-sm text-blue-300">/rug, /locked</p>
                    <p className="text-sm text-gray-400">
                      Performs on-chain checks for potential rug pulls or liquidity lock status
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Whale & Wallet Intelligence</h4>
                    <p className="mb-1 text-sm text-blue-300">/whales, /wallet</p>
                    <p className="text-sm text-gray-400">
                      Tracks and surfaces significant wallet movements and user-specified wallets
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Token Profiling</h4>
                    <p className="mb-1 text-sm text-blue-300">/token</p>
                    <p className="text-sm text-gray-400">
                      Aggregates metadata, pricing, liquidity, holder stats, and sentiment signals
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Live Trade Execution</h4>
                    <p className="mb-1 text-sm text-blue-300">/trade</p>
                    <p className="text-sm text-gray-400">
                      Enables direct interaction with trading flows from inside the chat environment
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Behavioral State Management</h4>
                    <p className="mb-1 text-sm text-blue-300">/save</p>
                    <p className="text-sm text-gray-400">
                      Tracks last picks, wallet focus, and user interests; customizes flow branches based on user
                      history
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Gamification & Virality</h4>
                    <p className="mb-1 text-sm text-blue-300">/game, /affiliate</p>
                    <p className="text-sm text-gray-400">
                      Injects community dynamics and incentives for user growth and retention
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-white">Pro Features & Flow Layering</h4>
                    <p className="mb-1 text-sm text-blue-300">/upgrade, /settings, /chat</p>
                    <p className="text-sm text-gray-400">
                      Routes power users into more advanced, high-frequency agent workflows
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-purple-400">Architectural Design</h3>
                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <p className="mb-4 text-gray-300">
                    The MasterNode is built on a visual, cloud-native flow system that allows us to:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-300">
                    <li>Dynamically chain together flows with logic gates, timers, conditions, and subflows</li>
                    <li>React in real time to any command, signal, or system event</li>
                    <li>Deploy updates across all user agents instantly without downtime</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">Think of it like this:</h3>
                <p className="text-lg italic text-gray-200">
                  SCANA's MasterNode is a composable AI brain that executes micro-strategies across DeFi using real-time
                  data, personalized logic, and user intent — all within a chat-first environment.
                </p>
                <p className="mt-4 text-lg italic text-gray-200">
                  It is what enables SCANA to behave like a living assistant — not just a dashboard or scanner.
                </p>
              </div>
            </div>
          </section>

          {/* New Section: SCANA's Automated News Intelligence Workflow */}
          <div className="border-b border-gray-800"></div>

          <section>
            <h2 className="mb-6 text-3xl font-bold text-white">SCANA's Automated News Intelligence Workflow</h2>
            <p className="mb-6 text-lg text-gray-300">
              One of the powerful systems inside SCANA is our AI-driven News Workflow, which autonomously scrapes,
              filters, analyzes, and routes relevant financial or crypto news to users based on their profiles.
            </p>

            <div className="mb-8 overflow-hidden rounded-xl border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lCIajSH4iGmLQM6EdCFo9G4nvq33zT.png"
                alt="SCANA's News PRO system showing the visual workflow for news processing"
                width={1200}
                height={800}
                className="w-full"
              />
              <p className="mt-2 bg-gray-900 p-2 text-center text-sm text-gray-500">
                SCANA's News PRO system showing the visual workflow for news processing and distribution
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-green-400">How It Works</h3>
              <p className="mb-6 text-gray-300">
                This workflow is built using our internal visual flow engine, which allows us to map logic, conditions,
                and responses in a modular, real-time way. Here's how the system operates:
              </p>

              <div className="space-y-8">
                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                      1
                    </div>
                    <h4 className="text-xl font-bold text-white">Scraping External News Sources</h4>
                  </div>
                  <div className="mt-4 pl-12">
                    <p className="mb-4 text-gray-300">
                      SCANA initiates the workflow by scraping data from external platforms like X (Twitter) and other
                      news feeds using custom triggers or APIs. This ensures:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      <li>Real-time capture of relevant trends</li>
                      <li>Coverage of fast-moving updates that could impact market behavior</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                      2
                    </div>
                    <h4 className="text-xl font-bold text-white">Conditional Filtering</h4>
                  </div>
                  <div className="mt-4 pl-12">
                    <p className="mb-4 text-gray-300">
                      Once news is ingested, the flow applies conditional filters to check:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      <li>If the source is verified or high-priority</li>
                      <li>Whether the news matches the user's tracked assets, preferences, or portfolio tags</li>
                    </ul>
                    <p className="mt-4 text-gray-300">Only high-relevance news is passed through.</p>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                      3
                    </div>
                    <h4 className="text-xl font-bold text-white">Intelligent Message Dispatch</h4>
                  </div>
                  <div className="mt-4 pl-12">
                    <p className="mb-4 text-gray-300">Based on matched conditions, the system then:</p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      <li>Sends a tailored message to the user (e.g., on Telegram, web chat, or email)</li>
                      <li>Sets custom fields (for user segmentation or future targeting)</li>
                      <li>Tracks engagement and user interaction</li>
                    </ul>
                    <p className="mt-4 text-gray-300">Messages are often enriched with call-to-actions, like:</p>
                    <div className="mt-2 rounded-md border-l-4 border-green-600 bg-gray-800 p-3 text-gray-200">
                      "This asset has moved before on similar news. Want to auto-trade?"
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                      4
                    </div>
                    <h4 className="text-xl font-bold text-white">Action-Condition Logic</h4>
                  </div>
                  <div className="mt-4 pl-12">
                    <p className="mb-4 text-gray-300">The flow includes logic gates that:</p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      <li>Trigger additional flows (e.g., price alerts, sentiment analysis)</li>
                      <li>Wait for user interaction and adapt based on whether they engage</li>
                      <li>Record user behavior and feed it into personalization metrics</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-green-300">
                      5
                    </div>
                    <h4 className="text-xl font-bold text-white">Chained Execution</h4>
                  </div>
                  <div className="mt-4 pl-12">
                    <p className="mb-4 text-gray-300">After the initial interaction, the flow can:</p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      <li>Trigger deeper analysis flows (like SCANA Pro sentiment scoring)</li>
                      <li>Route the user into automated strategy suggestions</li>
                      <li>Log all actions for audit and ML feedback loops</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">Designed for Speed + Signal</h3>
                <p className="text-lg text-gray-200">
                  This isn't just a notification tool — it's a real-time intelligence agent.
                </p>
                <p className="mt-4 text-lg text-gray-200">
                  By combining external data, internal tagging, and AI personalization, the SCANA News Workflow acts
                  like a digital analyst who never sleeps.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Want to see more?</h3>
            <p className="text-gray-300">
              Explore our visual workflow engine or learn how to create your own trading strategies with SCANA.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleRequestAccess}
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Request Demo Access
              </button>
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
