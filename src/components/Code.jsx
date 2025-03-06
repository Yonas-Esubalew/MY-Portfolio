"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";

export default function AdvancedCodeEditor() {
  const [code, setCode] = useState(`
    // 🌟 The Path to Victory: Run this if you're chasing greatness!
    let Progress = 0;
    while (Progress <= 100) {
      console.log(Progress <= 99 ? \`\${Progress}: \${Progress % 2 ? "Challenge" : "Effort"}\` : "100: Triumph! 🏆 You’re having the last laugh!");
      Progress++;
    }
    `);
  const [output, setOutput] = useState("// Output will appear here");
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("vs-dark");

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running...");

    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    let logs = [];

    console.log = (...args) => {
      logs.push(args.join(" "));
    };

    console.error = (...args) => {
      logs.push(`Error: ${args.join(" ")}`);
    };

    try {
      eval(code);
      setOutput(logs.length > 0 ? logs.join("\n") : "Execution completed successfully");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
      setIsRunning(false);
    }
  };

  return (
    <div className="flex w-full mt-4 justify-center items-center bg-#010103 ">
      <div className="bg-gray-800 text-white rounded-xl 
      shadow-2xl w-full max-w-4xl h-[60vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <h2 className="text-sm font-mono font-semibold text-gray-300">
              JavaScript Runner
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTheme(e.target.value)}
              value={theme}
            >
              <option value="vs-dark">Dark Theme</option>
              <option value="light">Light Theme</option>
            </select>
          </div>
        </div>

        {/* Editor Container */}
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            language="javascript"
            theme={theme}
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              lineNumbers: "on",
              wordWrap: "on",
              padding: { top: 20 },
              fontFamily: 'Fira Code, monospace',
              scrollbar: {
                verticalSliderSize: 6,
                horizontalSliderSize: 6,
              },
            }}
          />
        </div>

        {/* Output Section */}
        <div className="border-t border-gray-700">
          <div className="flex justify-between items-center px-6 py-3 bg-gray-700">
            <span className="text-sm font-semibold text-gray-400">OUTPUT</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isRunning ? (
                <span className="flex items-center">
                  <span className="animate-pulse">⚡</span>
                  <span className="ml-2">Running...</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <span>▶</span>
                  <span className="ml-2">Run Code</span>
                </span>
              )}
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 h-[100px] overflow-auto bg-gray-850 text-sm font-mono whitespace-pre-wrap"
          >
            {output.startsWith("Error") ? (
              <span className="text-red-400">{output}</span>
            ) : (
              <span className="text-gray-300">{output}</span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}