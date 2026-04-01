"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { SchoolSafetyIntakeInput } from "@/lib/intake/schemas";
import {
  SCHOOL_SETTING_OPTIONS,
  SCHOOL_TYPE_OPTIONS,
  US_STATES,
} from "@/lib/intake/constants";

export default function SchoolContactStep() {
  const form = useFormContext<SchoolSafetyIntakeInput>();

  const schoolType = form.watch("schoolContact.schoolType");
  const schoolSetting = form.watch("schoolContact.schoolSetting");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          School & Contact Information
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
          Tell us who you are, which school you represent, and the campus
          details needed to route this intake properly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="schoolContact.schoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                School Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="North Ridge High School"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.schoolDistrict"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                School District
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Metro Public Schools"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          control={form.control}
          name="schoolContact.city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                City
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Atlanta"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                State
              </FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-12 w-full rounded-xl border border-white/10 bg-white/3 px-3 text-sm text-white outline-none">
                  <option value="" className="text-black">
                    Select state
                  </option>
                  {US_STATES.map((state) => (
                    <option
                      key={state.value}
                      value={state.value}
                      className="text-black">
                      {state.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                ZIP Code
              </FormLabel>
              <FormControl>
                <Input
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="30303"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                  onChange={(e) => {
                    const digitsOnly = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 5);
                    field.onChange(digitsOnly);
                  }}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
          School Type
        </Label>

        <div className="grid gap-3 md:grid-cols-2">
          {SCHOOL_TYPE_OPTIONS.map((option) => {
            const selected = schoolType === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  form.setValue("schoolContact.schoolType", option, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                  selected
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/3 text-white/75 hover:bg-white/5"
                }`}>
                {option}
              </button>
            );
          })}
        </div>

        {schoolType === "Other" && (
          <FormField
            control={form.control}
            name="schoolContact.schoolTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Please specify school type"
                    className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        )}

        <p className="text-red-400 text-sm">
          {form.formState.errors.schoolContact?.schoolType?.message}
        </p>
      </div>

      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
          School Setting
        </Label>

        <div className="grid gap-3 sm:grid-cols-3">
          {SCHOOL_SETTING_OPTIONS.map((option) => {
            const selected = schoolSetting === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  form.setValue("schoolContact.schoolSetting", option, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
                className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                  selected
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/3 text-white/75 hover:bg-white/5"
                }`}>
                {option}
              </button>
            );
          })}
        </div>

        <p className="text-red-400 text-sm">
          {form.formState.errors.schoolContact?.schoolSetting?.message}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          control={form.control}
          name="schoolContact.enrollment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Student Enrollment
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={10000}
                  placeholder="850"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={
                    typeof field.value === "number" ||
                    typeof field.value === "string"
                      ? field.value
                      : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? undefined : Number(value));
                  }}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Primary Contact Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Jordan Smith"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.contactRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Role / Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Principal"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="schoolContact.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@school.org"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolContact.phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="(404) 555-0123"
                  className="h-12 rounded-xl border-white/10 bg-white/3 text-white placeholder:text-white/25"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
