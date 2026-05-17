export default function IntelligentWorkflowStory() {
  const nodes = [
    { id: 1, label: 'Webhook Input', x: '10%', y: '50%' },
    { id: 2, label: 'OCR Extraction', x: '30%', y: '30%' },
    { id: 3, label: 'Workflow Optimized', x: '50%', y: '50%' },
    { id: 4, label: 'CRM Record Created', x: '72%', y: '35%' },
    { id: 5, label: 'Analytics Updated', x: '88%', y: '55%' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex flex-col items-center justify-center px-6 py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />

        {/* Floating Blur Effects */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Intelligent Workflows
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
              From Operational Chaos
              <span className="block text-zinc-500">
                to Automated Clarity
              </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
              Transform scattered systems, paperwork, and manual tasks into a clean,
              intelligent workflow powered by automation and AI.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* BEFORE */}
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 h-[500px] overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5" />

              <div className="relative z-10">
                <p className="text-red-400 uppercase tracking-widest text-xs mb-4">
                  BEFORE
                </p>

                <h2 className="text-3xl font-bold mb-6">
                  Operational Clutter
                </h2>

                <div className="space-y-5 text-zinc-400">
                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 rotate-[-3deg]">
                    <span className="text-3xl">📄</span>
                    <p>Invoices buried in email chains</p>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 rotate-[2deg] ml-6">
                    <span className="text-3xl">🔌</span>
                    <p>Disconnected systems and tools</p>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 rotate-[-2deg]">
                    <span className="text-3xl">📊</span>
                    <p>Manual spreadsheet tracking</p>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 rotate-[4deg] ml-10">
                    <span className="text-3xl">⚠️</span>
                    <p>Missed follow-ups and delays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER FLOW */}
            <div className="relative rounded-3xl border border-cyan-500/20 bg-zinc-950/70 p-8 h-[500px] overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5" />

              <div className="relative z-10 h-full">
                <p className="text-cyan-400 uppercase tracking-widest text-xs mb-4">
                  AUTOMATION ENGINE
                </p>

                <h2 className="text-3xl font-bold mb-10">
                  Intelligent Workflow Graph
                </h2>

                {/* SVG Workflow */}
                <div className="relative h-[350px] w-full rounded-2xl border border-zinc-800 bg-black/50 overflow-hidden">
                  <svg className="absolute inset-0 h-full w-full">
                    {/* Connection Lines */}
                    <path
                      d="M 80 170 C 140 170, 140 90, 220 90"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 6"
                    />

                    <path
                      d="M 220 90 C 300 90, 300 170, 380 170"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 6"
                    />

                    <path
                      d="M 380 170 C 450 170, 450 100, 520 100"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 6"
                    />

                    <path
                      d="M 520 100 C 590 100, 590 180, 650 180"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 6"
                    />

                    {/* Animated Data Packets */}
                    <circle r="6" fill="#22d3ee">
                      <animateMotion dur="5s" repeatCount="indefinite"
                        path="M 80 170 C 140 170, 140 90, 220 90 C 300 90, 300 170, 380 170 C 450 170, 450 100, 520 100 C 590 100, 590 180, 650 180" />
                    </circle>
                  </svg>

                  {/* Nodes */}
                  {nodes.map((node) => (
                    <div
                      key={node.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: node.x, top: node.y }}
                    >
                      <div className="relative flex flex-col items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-pulse" />

                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs text-center text-zinc-200 shadow-xl backdrop-blur-lg whitespace-nowrap">
                          {node.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div className="relative rounded-3xl border border-emerald-500/20 bg-zinc-950/70 p-8 h-[500px] overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />

              <div className="relative z-10">
                <p className="text-emerald-400 uppercase tracking-widest text-xs mb-4">
                  AFTER
                </p>

                <h2 className="text-3xl font-bold mb-6">
                  Streamlined Operations
                </h2>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400 text-sm">Workflow Status</span>
                      <span className="text-emerald-400 text-sm">● Active</span>
                    </div>

                    <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                      <p className="text-zinc-500 text-sm mb-2">Tasks Automated</p>
                      <h3 className="text-3xl font-bold">94%</h3>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                      <p className="text-zinc-500 text-sm mb-2">Response Time</p>
                      <h3 className="text-3xl font-bold">-68%</h3>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-zinc-400">CRM Sync</p>
                      <span className="text-emerald-400">Connected</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500">Client Records</span>
                        <span>2,438</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500">Automations Running</span>
                        <span>18</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500">Live Integrations</span>
                        <span>32</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <button className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-300 backdrop-blur-lg transition hover:scale-105 hover:bg-cyan-400/20">
              Build Intelligent Systems
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
