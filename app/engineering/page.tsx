import Image from "next/image"

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
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
        </div>

        <div className="mt-16">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Want to see more?</h3>
            <p className="text-gray-300">
              Explore our visual workflow engine or learn how to create your own trading strategies with SCANA.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Request Demo Access
              </a>
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
