import React from 'react';
import Link from 'next/link';
import {
  Terminal,
  Flower,
  BookOpen,
  Code2,
  Cpu,
  Trophy,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  Sparkles,
} from 'lucide-react';
import InteractiveSolver from '../components/InteractiveSolver';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-rose-500/20 selection:text-rose-300">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 text-slate-950 shadow-md">
              <Flower className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Blossom <span className="text-rose-400">CLI & Guide</span>
            </span>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <a href="#quickstart" className="hover:text-white transition-colors">
              Quickstart
            </a>
            <a href="#solver" className="hover:text-white transition-colors">
              Live Solver
            </a>
            <a href="#scoring" className="hover:text-white transition-colors">
              Scoring Rules
            </a>
            <a href="#documentation" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a
              href="https://github.com/joshuacox/blossom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
            >
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-300">
            <Sparkles className="h-3.5 w-3.5 text-rose-400" /> High-Performance Word Game Solver
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Master the <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">Blossom Word Game</span> with Unix Simplicity
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            A fast, POSIX-compliant terminal tool and algorithmic solver designed for Merriam-Webster’s daily Blossom puzzle. Calculate optimal bonus letter petal multipliers, pangram bonuses, and scoring paths in milliseconds.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#solver"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-500/25 transition-all hover:brightness-110"
            >
              Try Interactive Solver <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#quickstart"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Terminal className="h-4 w-4 text-amber-400" /> CLI Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Top Ad Unit */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="9876543210" />
      </div>

      {/* Interactive Live Solver Section */}
      <section id="solver" className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Interactive Web Solver & Calculator
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Test out letter combinations and explore point projections directly in your browser before running queries in your terminal.
            </p>
          </div>
          <InteractiveSolver />
        </div>
      </section>

      {/* Core Rules & Scoring Explanation */}
      <section id="scoring" className="py-12 border-t border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Official Blossom Game Scoring Rules
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
              The blossom utility computes point yields based precisely on Merriam-Webster’s official formula:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Length-Based Base Points</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>4 letters</span> <span className="font-semibold text-slate-200">2 points</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>5 letters</span> <span className="font-semibold text-slate-200">4 points</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>6 letters</span> <span className="font-semibold text-slate-200">6 points</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>7 letters</span> <span className="font-semibold text-slate-200">12 points</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-1">
                  <span>8+ letters</span> <span className="font-semibold text-slate-200">12 + 3/addl. letter</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Pangram Bonus (+7)</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                A pangram uses every single distinct letter provided in the flower (the center letter plus all petal letters).
              </p>
              <div className="mt-4 rounded-lg bg-slate-950 p-3 border border-slate-800 text-[11px] font-mono text-rose-300">
                +7 bonus points awarded immediately for complete flower coverage.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Flower className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Bonus Petal Multiplier (+5)</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                In Blossom, each round has designated bonus petals. When playing with a specific bonus letter, each occurrence provides an extra 5 points!
              </p>
              <div className="mt-4 rounded-lg bg-slate-950 p-3 border border-slate-800 text-[11px] font-mono text-sky-300">
                +5 points per occurrence of the bonus letter in the word.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Content Ad Unit */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="1122334455" />
      </div>

      {/* Quickstart & CLI Documentation */}
      <section id="quickstart" className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              CLI Installation & Quickstart
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Run the Blossom solver directly from your command line on any Linux, macOS, or WSL environment.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-400">
                  1
                </span>
                One-Line Installation via Bootstrap Script
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                The repository provides a self-installing bootstrap script that clones the tool or installs it to your local environment:
              </p>
              <div className="mt-3 relative rounded-lg border border-slate-800 bg-slate-950 p-3.5 font-mono text-xs text-emerald-400 overflow-x-auto">
                <code>curl -sL https://raw.githubusercontent.com/joshuacox/blossom/refs/heads/main/bootstrap.sh | bash</code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-400">
                  2
                </span>
                Basic Usage Syntax
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Pass the required <code className="text-amber-300">CENTER_LETTER</code> followed by the surrounding <code className="text-rose-300">PETAL_LETTERS</code>:
              </p>
              <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 p-3.5 font-mono text-xs text-slate-200">
                <div className="text-slate-500"># Syntax: ./blossom CENTER_LETTER PETAL_LETTERS</div>
                <div className="text-amber-300 mt-1">./blossom e sombody</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-400">
                  3
                </span>
                Optimizing for a Specific Bonus Petal
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                When you play a turn dedicated to a particular bonus petal letter, provide it as the optional 3rd argument:
              </p>
              <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 p-3.5 font-mono text-xs text-slate-200">
                <div className="text-slate-500"># Syntax: ./blossom CENTER_LETTER PETAL_LETTERS BONUS_LETTER</div>
                <div className="text-sky-300 mt-1">./blossom e sombody m</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-400">
                  4
                </span>
                Custom Dictionary & Exhaustive Search (uber_blossom)
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Use your custom dictionary file or run the <code className="text-rose-300">uber_blossom</code> script to evaluate all petals concurrently:
              </p>
              <div className="mt-3 space-y-2 rounded-lg border border-slate-800 bg-slate-950 p-3.5 font-mono text-xs text-slate-200">
                <div className="text-slate-500"># Specify custom wordlist:</div>
                <div>DICTIONARY=/usr/share/dict/words ./blossom e sombody</div>
                <div className="text-slate-500 pt-2"># Evaluate across all petals with uber_blossom:</div>
                <div className="text-emerald-400">./uber_blossom e sombody</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Documentation & Architecture */}
      <section id="documentation" className="py-12 border-t border-slate-800/80 bg-slate-900/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Internal Architecture & Design
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Understanding the underlying Bash pipeline, caching layers, and regex filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <Code2 className="h-5 w-5 text-rose-400" />
                Regex Invalidation & Filtering
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                The script operates via high-speed grep streams. It constructs negative-character classes <code className="text-rose-300">[^$ALL_LETTERS]</code> to purge any invalid characters while requiring inclusion of the center letter. It also eliminates words under 4 characters prior to score evaluation.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <Cpu className="h-5 w-5 text-amber-400" />
                Disk-Based Response Cache
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Evaluated dictionary sets are cached at <code className="text-amber-300">/tmp/blossom_cache/$ALL_LETTERS.txt</code>, enabling instant score permutations across multiple bonus letter turns without re-scanning system dictionaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AdBanner slot="5566778899" />
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Built for Merriam-Webster Blossom game enthusiasts. Open source under MIT/GPL.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/joshuacox/blossom" className="hover:text-slate-300">
              GitHub Repository
            </a>
            <a href="https://www.merriam-webster.com/games/blossom-word-game" target="_blank" rel="noreferrer" className="hover:text-slate-300">
              Merriam-Webster Game
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
