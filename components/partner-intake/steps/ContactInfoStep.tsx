"use client";

import { useFormContext } from "react-hook-form";
import type { PartnerIntakeValues } from "@/lib/partner/schemas";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function ContactInfoStep() {
  const form = useFormContext<PartnerIntakeValues>();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Contact Information
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">
          Share the primary contact details so we know who is representing the
          organization and how to follow up.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="contact.organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Organization Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Code Red Foundation"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Primary Contact Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Jordan Smith"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
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
          name="contact.title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Director of Partnerships"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@organization.org"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
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
          name="contact.phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Phone
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact.website"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Website
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://yourorg.com"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact.location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
                Headquarters Location
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Atlanta, GA"
                  className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/25"
                  value={typeof field.value === "string" ? field.value : ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
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
