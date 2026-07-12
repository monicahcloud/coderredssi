"use client";

import { useMemo, useState } from "react";
import { Users, GraduationCap, School2, Building2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const costPerSchool = 30000;
const studentsPerSchool = 750;
const teachersPerSchool = 45;
const schoolsPerDistrict = 6;

const minAmount = 10000;
const maxAmount = 10000000;

const iconCounts = {
  students: 24,
  teachers: 24,
  schools: 24,
  districts: 12,
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function IconGrid({
  active,
  total,
  icon: Icon,
}: {
  active: number;
  total: number;
  icon: typeof Users;
}) {
  return (
    <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
      {Array.from({ length: total }).map((_, index) => {
        const filled = index < active;
        return (
          <div
            key={index}
            className={cn(
              "flex aspect-square items-center justify-center rounded-xl border transition-all duration-300",
              filled
                ? "border-red-500 bg-red-600 text-white shadow-[0_10px_24px_rgba(239,0,0,0.18)]"
                : "border-slate-200 bg-slate-50 text-slate-300",
            )}>
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
          </div>
        );
      })}
    </div>
  );
}

export default function ImpactAreas() {
  const [amount, setAmount] = useState(300000);

  const data = useMemo(() => {
    const schools = amount / costPerSchool;
    const students = schools * studentsPerSchool;
    const teachers = schools * teachersPerSchool;
    const districts = schools / schoolsPerDistrict;

    return {
      schools,
      students,
      teachers,
      districts,
      studentIcons: Math.max(
        0,
        Math.min(iconCounts.students, Math.round(schools)),
      ),
      teacherIcons: Math.max(
        0,
        Math.min(iconCounts.teachers, Math.round(schools)),
      ),
      schoolIcons: Math.max(
        0,
        Math.min(iconCounts.schools, Math.round(schools)),
      ),
      districtIcons: Math.max(
        0,
        Math.min(iconCounts.districts, Math.round(districts)),
      ),
    };
  }, [amount]);

  const presets = [30000, 100000, 300000, 1000000, 5000000, 10000000];

  return (
    <section className="bg-slate-50 py-20 text-slate-900 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-600">
            Partnership Impact Calculator
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            See What Partnership Support Reaches
          </h2>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-red-600" />
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Move the slider to visualize how partnership support translates into
            students, teachers, schools, and districts served.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Selected amount
              </p>
              <div className="mt-2 text-4xl font-black tracking-tight text-red-600 sm:text-5xl">
                {formatCurrency(amount)}
              </div>
            </div>

            <div className="grid gap-2 text-sm text-slate-500 sm:text-right">
              <span>Low end: {formatCurrency(minAmount)}</span>
              <span>High end: {formatCurrency(maxAmount)}</span>
            </div>
          </div>

          <Slider
            className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-5"
            value={[amount]}
            min={minAmount}
            max={maxAmount}
            step={10000}
            onValueChange={(value) => setAmount(value[0])}
          />

          <div className="mt-4 flex flex-wrap gap-3">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-bold transition",
                  amount === preset
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-red-600 hover:bg-red-50",
                )}>
                {preset >= 1000000
                  ? `$${preset / 1000000}M`
                  : `$${(preset / 1000).toFixed(0)}K`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                    Students
                  </p>
                  <h3 className="mt-2 text-2xl font-black">Student Impact</h3>
                </div>
                <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>

              <div className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">
                {formatNumber(Math.round(data.students))} students
              </div>

              <p className="mb-6 max-w-md text-sm leading-6 text-slate-600">
                Each icon represents one school served, while the number shows
                estimated student reach.
              </p>

              <IconGrid
                active={data.studentIcons}
                total={iconCounts.students}
                icon={Users}
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                    Teachers
                  </p>
                  <h3 className="mt-2 text-2xl font-black">Teacher Impact</h3>
                </div>
                <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>

              <div className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">
                {formatNumber(Math.round(data.teachers))} teachers
              </div>

              <p className="mb-6 max-w-md text-sm leading-6 text-slate-600">
                This visual stack grows with the number of schools supported.
              </p>

              <IconGrid
                active={data.teacherIcons}
                total={iconCounts.teachers}
                icon={GraduationCap}
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                    Schools
                  </p>
                  <h3 className="mt-2 text-2xl font-black">School Impact</h3>
                </div>
                <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                  <School2 className="h-6 w-6" />
                </div>
              </div>

              <div className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">
                {formatNumber(Math.round(data.schools))} schools
              </div>

              <p className="mb-6 max-w-md text-sm leading-6 text-slate-600">
                One outlined school icon equals one school supported in the
                estimate.
              </p>

              <IconGrid
                active={data.schoolIcons}
                total={iconCounts.schools}
                icon={School2}
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white text-slate-900 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                    School Districts
                  </p>
                  <h3 className="mt-2 text-2xl font-black">District Impact</h3>
                </div>
                <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                  <Building2 className="h-6 w-6" />
                </div>
              </div>

              <div className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">
                {data.districts.toFixed(1)} districts
              </div>

              <p className="mb-6 max-w-md text-sm leading-6 text-slate-600">
                District icons activate more slowly to show broader regional
                reach.
              </p>

              <IconGrid
                active={data.districtIcons}
                total={iconCounts.districts}
                icon={Building2}
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 px-6 py-6 text-center shadow-lg shadow-red-100 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-600">
            Live estimate
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-lg font-medium leading-8 text-slate-700">
            At {formatCurrency(amount)}, this estimate suggests support for
            about {formatNumber(Math.round(data.schools))} schools, reaching
            roughly {formatNumber(Math.round(data.students))} students,{" "}
            {formatNumber(Math.round(data.teachers))} teachers, and about{" "}
            {data.districts.toFixed(1)} districts.
          </p>
        </div>
      </div>
    </section>
  );
}
