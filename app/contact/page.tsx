import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import LetterForm from "@/components/contact/letter-form";
import PageHeader from "@/components/ui/page-header";
import PushPin from "@/components/ui/push-pin";
import Stamp from "@/components/ui/stamp";
import { site, socials } from "@/data/site";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write a letter to ${site.name} — projects, roles or just saying hi.`,
};

const CONTACT_LINES = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Studio", value: site.location },
  { icon: Clock, label: "Hours", value: `${site.timezone} · replies ${site.responseTime}` },
];

const TAG_TILTS = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mail room · open"
        title={
          <>
            Write me a <span className="font-hand font-normal text-accent">letter</span>
          </>
        }
        description="Fill in the blanks, seal it, and it lands on my desk. Prefer the old-fashioned way? The postcard has everything."
      />

      <div className="grid items-start gap-14 lg:grid-cols-[1.5fr_1fr]">
        <LetterForm />

        <aside className="space-y-12 lg:sticky lg:top-32">
          {/* POSTCARD */}
          <div className="surface-paper shadow-paper-lg relative rotate-[1.2deg] p-6 sm:p-8">
            <PushPin color="blue" className="-top-4 left-8" />

            <div className="flex items-start justify-between gap-4">
              <p className="font-hand text-3xl leading-none text-ink">Postcard</p>
              <div aria-hidden className="postage h-20 w-16 shrink-0 rotate-3 shadow-md">
                <div className="surface-kraft flex h-full items-center justify-center font-serif text-xl font-black text-ink">
                  7¢
                </div>
              </div>
            </div>

            <dl className="mt-6 space-y-4">
              {CONTACT_LINES.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3 border-b border-dashed border-black/15 pb-4">
                  <Icon aria-hidden size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">{label}</dt>
                    <dd className="mt-1 break-words text-sm font-bold text-ink">
                      {href ? (
                        <a href={href} className="underline decoration-dashed underline-offset-4 hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <Stamp tone="green" className="mt-6 -rotate-6">
              Available
            </Stamp>
          </div>

          {/* LUGGAGE TAGS */}
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-ink-muted">Elsewhere</p>
            <ul className="flex flex-wrap gap-4">
              {socials.map((social, i) => {
                const external = social.href.startsWith("http");
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className={cx(
                        "surface-manila relative flex items-center gap-3 py-3 pl-4 pr-6 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-paper transition-all hover:-translate-y-0.5 hover:rotate-0 hover:text-accent",
                        TAG_TILTS[i % TAG_TILTS.length],
                      )}
                      style={{ clipPath: "polygon(14px 0, 100% 0, 100% 100%, 14px 100%, 0 50%)" }}
                    >
                      <span aria-hidden className="ml-1 h-2.5 w-2.5 rounded-full bg-(--background) shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
