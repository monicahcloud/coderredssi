"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  Landmark,
  School,
  Users,
} from "lucide-react";

const MIN = 10_000;
const MAX = 10_000_000;
const INITIAL = 300_000;

const COST_PER_SCHOOL = 30_000;
const STUDENTS_PER_SCHOOL = 750;
const TEACHERS_PER_SCHOOL = 45;
const SCHOOLS_PER_DISTRICT = 6;

const PRESETS = [30_000, 150_000, 300_000, 1_000_000, 5_000_000, 10_000_000];

function formatNumber(value: number, digits = 0) {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function buildStack(count: number, maxIcons: number) {
  return Array.from({ length: maxIcons }, (_, index) => index < count);
}

type ImpactCardProps = {
  label: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  activeCount: number;
  totalIcons: number;
  footLeft: string;
};

function ImpactCard({
  label,
  title,
  value,
  description,
  icon: Icon,
  activeCount,
  totalIcons,
  footLeft,
}: ImpactCardProps) {
  const stack = buildStack(activeCount, totalIcons);

  return (
    <article className="impactCard">
      <div className="impactLabel">{label}</div>

      <div className="mt-4 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white">
          <Icon className="h-7 w-7" strokeWidth={2} />
        </div>

        <div>
          <h2 className="impactTitle">{title}</h2>
          <div className="impactValue">{value}</div>
        </div>
      </div>

      <p className="impactDescription">{description}</p>

      <div className="miniChart">
        <div className="miniChartHeader">
          <span>{label} reach</span>
        </div>

        <div className="iconGrid">
          {stack.map((active, index) => (
            <div
              key={index}
              className={active ? "iconCell active" : "iconCell"}>
              <Icon className="h-4 w-4" strokeWidth={2} />
            </div>
          ))}
        </div>

        <div className="miniChartFooter">
          <span>{footLeft}</span>{" "}
          <span>
            {Math.min(activeCount, totalIcons)} of {totalIcons}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ImpactCalculator() {
  const [amount, setAmount] = useState(INITIAL);

  const metrics = useMemo(() => {
    const schools = amount / COST_PER_SCHOOL;
    const students = schools * STUDENTS_PER_SCHOOL;
    const teachers = schools * TEACHERS_PER_SCHOOL;
    const districts = schools / SCHOOLS_PER_DISTRICT;

    return {
      schools,
      students,
      teachers,
      districts,
      schoolActive: Math.max(1, Math.round(schools)),
      studentActive: Math.max(1, Math.round(schools)),
      teacherActive: Math.max(1, Math.round(schools)),
      districtActive: Math.max(1, Math.round(districts)),
    };
  }, [amount]);

  const percentage = ((amount - MIN) / (MAX - MIN)) * 100;

  return (
    <main className="mb-16 border-t border-red-200 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-full">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Partnership impact calculator
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Visualize What Partnership Support Reaches
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 bg-red-600" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Move the slider to estimate how many students, teachers, schools,
            and school districts your partnership may impact. This is an
            estimator only; donation checkout remains elsewhere on the site.
          </p>
        </div>

        {/* Left side widened from 420px to 540px */}
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(620px,0.9fr)_minmax(0,1.6fr)]">
          <section className="border border-slate-200 bg-slate-50 p-8 shadow-sm xl:p-10">
            <div className="amountBox bg-white p-7 shadow-sm">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-red-700 text-white">
                  <Landmark className="h-7 w-7" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Selected partnership level
                  </div>

                  <div className="amountText">${formatNumber(amount)}</div>
                </div>
              </div>

              <div className="amountScale mt-6">
                <span>$10,000 minimum</span>
                <span>$10,000,000 maximum</span>
              </div>
            </div>

            <div className="rangeWrap mt-8">
              <input
                aria-label="Partnership amount"
                type="range"
                min={MIN}
                max={MAX}
                step={1000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                style={{
                  ["--pct" as never]: `${percentage}%`,
                }}
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={`border px-4 py-4 text-sm font-black transition ${
                    amount === preset
                      ? "border-red-700 bg-red-700 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50"
                  }`}>
                  $
                  {preset >= 1_000_000
                    ? `${preset / 1_000_000}M`
                    : `${Math.round(preset / 1000)}K`}
                </button>
              ))}
            </div>

            <div className="mt-8 border border-red-100 bg-red-50 p-6 text-sm leading-7 text-slate-700">
              <div className="flex items-start gap-4">
                <School className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />

                <p>
                  <strong className="text-slate-950">Locked assumption:</strong>{" "}
                  Each school costs $30,000. In this visual, each icon in the
                  mini charts represents one unit of impact, so the stacks grow
                  as school count and related reach increase.
                </p>
              </div>
            </div>

            <div className="mt-4 border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-4">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />

                <p>
                  <strong className="text-slate-950">
                    Current visual logic:
                  </strong>{" "}
                  One student outline equals one school helped, one teacher
                  outline equals one school helped, one school outline equals
                  one school helped, and one district outline equals one
                  district reached. That gives the developer a clean, repeatable
                  visual system for all four cards.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <ImpactCard
              label="Students"
              title="Student impact"
              value={`${formatNumber(metrics.students)} students`}
              description="The student icons represent the estimated reach created through supported school engagements."
              icon={Users}
              activeCount={metrics.studentActive}
              totalIcons={40}
              footLeft="1 icon represents 1 school helped"
            />

            <ImpactCard
              label="Teachers"
              title="Teacher impact"
              value={`${formatNumber(metrics.teachers)} teachers`}
              description="The teacher icons show how estimated educator reach grows as partnership support increases."
              icon={GraduationCap}
              activeCount={metrics.teacherActive}
              totalIcons={40}
              footLeft="1 icon represents 1 school helped"
            />

            <ImpactCard
              label="Schools"
              title="School impact"
              value={`${formatNumber(
                metrics.schools,
                metrics.schools < 10 ? 1 : 0,
              )} schools`}
              description="Each school icon represents one school supported under the current partnership model."
              icon={School}
              activeCount={metrics.schoolActive}
              totalIcons={40}
              footLeft="1 icon represents 1 school"
            />

            <ImpactCard
              label="Districts"
              title="District impact"
              value={`${formatNumber(
                metrics.districts,
                metrics.districts < 10 ? 1 : 0,
              )} districts`}
              description="District reach increases at larger partnership levels based on six supported schools per district."
              icon={Landmark}
              activeCount={metrics.districtActive}
              totalIcons={40}
              footLeft="1 icon represents 1 district"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
