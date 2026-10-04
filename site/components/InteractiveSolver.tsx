'use client';

import React, { useState, useMemo } from 'react';
import { Flower, Sparkles, Trophy, Search, AlertCircle } from 'lucide-react';

// Common English words for in-browser interactive solving demo
const SAMPLE_DICTIONARY = [
  'somebody', 'someday', 'embodied', 'embodies', 'awesome', 'blossom', 'blossoms',
  'moody', 'moods', 'woods', 'woody', 'bosom', 'bosoms', 'besom', 'besoms',
  'doom', 'doomed', 'dooms', 'demo', 'demos', 'mode', 'modes', 'model', 'models',
  'body', 'bodies', 'bode', 'bodes', 'boys', 'eyed', 'eyes', 'seed', 'seem', 'seems',
  'obese', 'obedient', 'embed', 'embeds', 'boon', 'boons', 'bony', 'bozo',
  'deem', 'deems', 'dense', 'dime', 'dimes', 'dome', 'domes', 'dove', 'doves',
  'dose', 'doses', 'eddy', 'edge', 'edges', 'moss', 'mossy', 'memo', 'memos',
  'mesh', 'mess', 'messy', 'mode', 'mods', 'mold', 'molds', 'moldy', 'mole', 'moles',
  'moon', 'moons', 'moose', 'more', 'mores', 'morn', 'morns', 'move', 'moves',
  'node', 'nodes', 'nose', 'nosed', 'noses', 'nosey', 'nosy', 'odes', 'omen', 'omens',
  'omits', 'ooze', 'oozed', 'oozes', 'open', 'opens', 'seed', 'seeds', 'seem',
  'smote', 'some', 'speed', 'speeds', 'spend', 'spends', 'spode', 'sponge', 'sponges',
  'symbiosis', 'system', 'systems', 'tempo', 'tempos', 'tomb', 'tombs', 'tome', 'tomes'
];

export default function InteractiveSolver() {
  const [centerLetter, setCenterLetter] = useState('e');
  const [petalLetters, setPetalLetters] = useState('sombody');
  const [bonusLetter, setBonusLetter] = useState('m');
  const [searchFilter, setSearchFilter] = useState('');

  const calculateScore = (word: string, bonus: string, allLetters: string) => {
    const len = word.length;
    let sizeScore = 0;
    if (len < 4) sizeScore = 0;
    else if (len === 4) sizeScore = 2;
    else if (len === 5) sizeScore = 4;
    else if (len === 6) sizeScore = 6;
    else if (len === 7) sizeScore = 12;
    else sizeScore = 12 + (len - 7) * 3;

    // Pangram check: uses all unique letters from center + petals
    const uniqueRequired = new Set(allLetters.toLowerCase().split(''));
    const wordLetters = new Set(word.toLowerCase().split(''));
    let hasAll = true;
    for (const char of uniqueRequired) {
      if (!wordLetters.has(char)) {
        hasAll = false;
        break;
      }
    }
    const pangramScore = hasAll ? 7 : 0;

    // Bonus letter score: +5 for each occurrence of bonus letter
    let bonusCount = 0;
    if (bonus) {
      const b = bonus.toLowerCase();
      for (const ch of word.toLowerCase()) {
        if (ch === b) bonusCount++;
      }
    }
    const bonusScore = bonusCount * 5;

    return {
      total: sizeScore + pangramScore + bonusScore,
      sizeScore,
      pangramScore,
      bonusScore,
      bonusCount,
      isPangram: hasAll,
    };
  };

  const results = useMemo(() => {
    const center = centerLetter.trim().toLowerCase();
    const petals = petalLetters.trim().toLowerCase();
    const bonus = bonusLetter.trim().toLowerCase();
    const all = center + petals;
    const allowed = new Set(all.split(''));

    if (!center || petals.length < 2) return [];

    const matches: Array<{
      word: string;
      total: number;
      sizeScore: number;
      pangramScore: number;
      bonusScore: number;
      bonusCount: number;
      isPangram: boolean;
    }> = [];

    SAMPLE_DICTIONARY.forEach((word) => {
      const w = word.toLowerCase();
      if (w.length < 4) return;
      if (!w.includes(center)) return;
      for (const ch of w) {
        if (!allowed.has(ch)) return;
      }
      if (bonus && !w.includes(bonus)) return;

      const scoreData = calculateScore(w, bonus, all);
      matches.push({ word: w, ...scoreData });
    });

    matches.sort((a, b) => b.total - a.total);
    return matches;
  }, [centerLetter, petalLetters, bonusLetter]);

  const filteredResults = useMemo(() => {
    if (!searchFilter.trim()) return results;
    return results.filter((r) =>
      r.word.toLowerCase().includes(searchFilter.toLowerCase().trim())
    );
  }, [results, searchFilter]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 text-slate-950 font-bold shadow-lg shadow-rose-500/20">
            <Flower className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Live Blossom Calculator</h2>
            <p className="text-xs text-slate-400">
              Matches exact scoring formulas implemented in the CLI script
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
          <Sparkles className="h-3.5 w-3.5" /> Interactive Sandbox
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-amber-400">
            Center Letter (Mandatory)
          </label>
          <input
            type="text"
            maxLength={1}
            value={centerLetter}
            onChange={(e) => setCenterLetter(e.target.value.toLowerCase())}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-center text-lg font-bold text-amber-300 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            placeholder="e"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-rose-400">
            Petal Letters (Surrounding)
          </label>
          <input
            type="text"
            value={petalLetters}
            onChange={(e) => setPetalLetters(e.target.value.toLowerCase())}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 font-mono text-base text-white focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
            placeholder="sombody"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-sky-400">
            Bonus Petal (Optional +5 pts/use)
          </label>
          <input
            type="text"
            maxLength={1}
            value={bonusLetter}
            onChange={(e) => setBonusLetter(e.target.value.toLowerCase())}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-center text-lg font-bold text-sky-300 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
            placeholder="m"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Filter words..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-950/80 pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none"
          />
        </div>
        <div className="text-xs text-slate-400">
          Showing <span className="font-semibold text-rose-400">{filteredResults.length}</span> calculated matches
        </div>
      </div>

      <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/60 p-2">
        {filteredResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
            <AlertCircle className="mb-2 h-6 w-6" />
            <p className="text-sm">No sample words found matching these letters.</p>
            <p className="text-xs text-slate-600 mt-1">
              Tip: The CLI utility searches your complete system dictionary (/usr/share/dict/words).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredResults.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/40 p-3 hover:border-slate-700 hover:bg-slate-900/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold tracking-wide text-white">
                    {item.word}
                  </span>
                  {item.isPangram && (
                    <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-300">
                      PANGRAM (+7)
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    len:{item.sizeScore} + bonus:{item.bonusScore}
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-1 text-xs font-bold text-amber-300 border border-amber-500/20">
                    <Trophy className="h-3 w-3" />
                    {item.total} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
