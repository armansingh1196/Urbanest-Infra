"use client";

import { useState, useMemo } from "react";
import { IndianRupee, Percent, CalendarDays } from "lucide-react";

interface EMICalculatorProps {
  /** Compact mode for embedding in Services page */
  compact?: boolean;
}

export default function EMICalculator({ compact = false }: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20); // years

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (monthlyRate === 0) {
      const emi = principal / months;
      return {
        emi: Math.round(emi),
        totalPayment: Math.round(principal),
        totalInterest: 0,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principalPercent: Math.round((principal / totalPayment) * 100),
      interestPercent: Math.round((totalInterest / totalPayment) * 100),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    } else {
      return `₹${value.toLocaleString("en-IN")}`;
    }
  };

  // SVG donut chart calculations
  const radius = compact ? 60 : 80;
  const circumference = 2 * Math.PI * radius;
  const principalArc = (calculations.principalPercent / 100) * circumference;

  return (
    <div className={compact ? "" : "space-y-8"}>
      <div
        className={`grid gap-8 md:gap-12 ${compact ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2"} items-center`}
      >
        {/* Left: Sliders */}
        <div className="space-y-8">
          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground flex items-center gap-2">
                <IndianRupee className="w-3.5 h-3.5 text-primary" />
                Loan Amount
              </label>
              <span className="font-serif text-base md:text-lg text-foreground">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min={500000}
              max={30000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="emi-slider w-full"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60">
              <span>5 L</span>
              <span>3 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground flex items-center gap-2">
                <Percent className="w-3.5 h-3.5 text-primary" />
                Interest Rate
              </label>
              <span className="font-serif text-base md:text-lg text-foreground">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={15}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="emi-slider w-full"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60">
              <span>5%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground flex items-center gap-2">
                <CalendarDays className="w-3.5 h-3.5 text-primary" />
                Loan Tenure
              </label>
              <span className="font-serif text-base md:text-lg text-foreground">
                {tenure} Years
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="emi-slider w-full"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Right: Donut Chart + EMI Result */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Donut Chart */}
          <div className="relative">
            <svg
              width={(radius + 20) * 2}
              height={(radius + 20) * 2}
              className="transform -rotate-90"
            >
              {/* Background circle */}
              <circle
                cx={radius + 20}
                cy={radius + 20}
                r={radius}
                fill="none"
                stroke="var(--border)"
                strokeWidth={compact ? 16 : 22}
                opacity={0.3}
              />
              {/* Interest arc */}
              <circle
                cx={radius + 20}
                cy={radius + 20}
                r={radius}
                fill="none"
                stroke="var(--muted-foreground)"
                strokeWidth={compact ? 16 : 22}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={0}
                strokeLinecap="butt"
                className="transition-all duration-700 ease-out opacity-30"
              />
              {/* Principal arc */}
              <circle
                cx={radius + 20}
                cy={radius + 20}
                r={radius}
                fill="none"
                stroke="var(--primary)"
                strokeWidth={compact ? 16 : 22}
                strokeDasharray={`${principalArc} ${circumference - principalArc}`}
                strokeDashoffset={0}
                strokeLinecap="butt"
                className="transition-all duration-700 ease-out"
              />
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Monthly EMI
              </span>
              <span
                className={`font-serif text-foreground ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}
              >
                {formatCurrency(calculations.emi)}
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm" />
              <span className="text-[10px] md:text-xs font-mono text-muted-foreground">
                Principal ({calculations.principalPercent}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted-foreground/30 rounded-sm" />
              <span className="text-[10px] md:text-xs font-mono text-muted-foreground">
                Interest ({calculations.interestPercent}%)
              </span>
            </div>
          </div>

          {/* Summary Stats */}
          <div
            className={`w-full grid grid-cols-3 gap-4 ${compact ? "pt-2" : "pt-4"}`}
          >
            <div className="text-center border-r border-border last:border-0">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                Principal
              </p>
              <p
                className={`font-serif text-foreground ${compact ? "text-sm md:text-base" : "text-base md:text-lg"}`}
              >
                {formatCurrency(loanAmount)}
              </p>
            </div>
            <div className="text-center border-r border-border last:border-0">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                Interest
              </p>
              <p
                className={`font-serif text-foreground ${compact ? "text-sm md:text-base" : "text-base md:text-lg"}`}
              >
                {formatCurrency(calculations.totalInterest)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                Total
              </p>
              <p
                className={`font-serif text-foreground ${compact ? "text-sm md:text-base" : "text-base md:text-lg"}`}
              >
                {formatCurrency(calculations.totalPayment)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
