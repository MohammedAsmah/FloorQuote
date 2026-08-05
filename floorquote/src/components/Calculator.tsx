/**
 * Calculator Component
 * 
 * Main calculator component that integrates the wizard, result page,
 * and pricing engine. Manages the overall state and flow.
 */

"use client";

import { useState } from "react";
import { CalculatorWizard } from "./calculator/CalculatorWizard";
import { ResultPage } from "./calculator/ResultPage";
import { calculateEstimate } from "../lib/calculator";
import type { CalculatorInput } from "../types/calculator";

type CalculatorState = "wizard" | "result";

export function Calculator() {
  const [state, setState] = useState<CalculatorState>("wizard");
  const [result, setResult] = useState<ReturnType<typeof calculateEstimate> | null>(null);
  const [inputData, setInputData] = useState<CalculatorInput | null>(null);

  const handleComplete = (data: CalculatorInput) => {
    const calculationResult = calculateEstimate(data);
    setResult(calculationResult);
    setInputData(data);
    setState("result");
  };

  const handleRestart = () => {
    setState("wizard");
    setResult(null);
    setInputData(null);
  };

  const handleGetQuotes = () => {
    // This would navigate to a lead capture form or contractor matching
    console.log("Get quotes clicked", inputData);
    alert("Lead capture form would appear here");
  };

  if (state === "result" && result && inputData) {
    return (
      <ResultPage
        result={result}
        input={inputData}
        onRestart={handleRestart}
        onGetQuotes={handleGetQuotes}
      />
    );
  }

  return <CalculatorWizard onComplete={handleComplete} />;
}
