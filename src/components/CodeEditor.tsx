import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor: React.FC = () => {
  const codeLines = [
    'const profile = {',
    "  name: 'V4PL',",
    "  skills: ['React', 'Tailwind', 'Framer Motion', 'Three.js'],",
    "  theme: 'Black + Blue',",
    "  available: true,",
    "  socials: {",
    "    gmail: 'v4pl@gmail.com',",
    "    youtube: 'https://youtube.com/v4pl',",
    "    discord: 'V4PL#1234'",
    "  }",
    "};"
  ];

  return (
    <motion.div
      className="bg-black/30 backdrop-blur-md rounded-2xl p-8 font-mono shadow-2xl w-[1400px] h-[520px] ml-12 relative border border-blue-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
        borderColor: "rgba(59, 130, 246, 1)"
      }}
      style={{
        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)"
      }}
    >
      <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-white/70 text-sm font-medium">profile.js</span>
        </div>

        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="flex items-center hover:bg-white/5 px-4 py-1 rounded transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
            >
              <span className="text-white/40 w-8 text-right mr-4 select-none text-xs">
                {index + 1}
              </span>
              <span className="text-white leading-relaxed whitespace-pre text-sm">
                {line.includes('const') && (
                  <>
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> profile = </span>
                    <span className="text-yellow-400">{'{'}</span>
                  </>
                )}
                {line.trim().startsWith('name:') && (
                  <>
                    <span className="text-blue-400">  name</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'V4PL'</span>
                    <span className="text-white">,</span>
                  </>
                )}
                {line.trim().startsWith('skills:') && (
                  <>
                    <span className="text-blue-400">  skills</span>
                    <span className="text-white">: [</span>
                    <span className="text-green-400">'React'</span>
                    <span className="text-white">, </span>
                    <span className="text-green-400">'Tailwind'</span>
                    <span className="text-white">, </span>
                    <span className="text-green-400">'Framer Motion'</span>
                    <span className="text-white">, </span>
                    <span className="text-green-400">'Three.js'</span>
                    <span className="text-white">],</span>
                  </>
                )}
                {line.trim().startsWith('theme:') && (
                  <>
                    <span className="text-blue-400">  theme</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'Black + Blue'</span>
                    <span className="text-white">,</span>
                  </>
                )}
                {line.trim().startsWith('available:') && (
                  <>
                    <span className="text-blue-400">  available</span>
                    <span className="text-white">: </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-white">,</span>
                  </>
                )}
                {line.trim().startsWith('socials:') && (
                  <>
                    <span className="text-blue-400">  socials</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-400">{'{'}</span>
                  </>
                )}
                {line.trim().startsWith('gmail:') && (
                  <>
                    <span className="text-blue-400">    gmail</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'yohannisthebest@gmail.com'</span>
                    <span className="text-white">,</span>
                  </>
                )}
                {line.trim().startsWith('youtube:') && (
                  <>
                    <span className="text-blue-400">    youtube</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'https://youtube.com/@v4plexe'</span>
                    <span className="text-white">,</span>
                  </>
                )}
                {line.trim().startsWith('discord:') && (
                  <>
                    <span className="text-blue-400">    discord</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'v4pl'</span>
                  </>
                )}
                {line.trim() === '}' && (
                  <span className="text-yellow-400">  {'}'}</span>
                )}
                {line.trim() === '};' && (
                  <span className="text-yellow-400">{'};'}</span>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;