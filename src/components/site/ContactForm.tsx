import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Upload, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { btn } from "./ui";

export const projectTypes = ["3D CAD Modelling", "Product Design", "Engineering Drawing", "Assembly Design", "3D Printing", "CAD Support", "Other"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  type: z.string().min(1, "Choose a project type"),
  description: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

export type ContactPayload = z.infer<typeof schema> & { file?: File | null };

/**
 * Backend hook: replace this function to send the request to a server / email service.
 * Currently opens the user's email client with the details pre-filled.
 */
async function submitRequest(data: ContactPayload) {
  const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone ?? "-"}\nProject type: ${data.type}\n${data.file ? `Attachment: ${data.file.name} (please attach to this email)\n` : ""}\n${data.description}`;
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`MECHRYX consultation – ${data.type}`)}&body=${encodeURIComponent(body)}`;
}

const field = "w-full rounded-md border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(fd);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    await submitRequest({ ...r.data, file });
    setSent(true);
  };

  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="corner-ticks rounded-xl border bg-panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-silver">Name</label>
          <input id="name" name="name" className={field} placeholder="Your name" autoComplete="name" />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-silver">Email</label>
          <input id="email" name="email" type="email" className={field} placeholder="you@example.com" autoComplete="email" />
          <Err k="email" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-silver">WhatsApp / Phone</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+91 ..." autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="type" className="mb-2 block text-sm text-silver">Project Type</label>
          <select id="type" name="type" defaultValue="" className={field}>
            <option value="" disabled>Select a service</option>
            {projectTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <Err k="type" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm text-silver">Project Description</label>
          <textarea id="description" name="description" rows={5} className={field} placeholder="Describe your idea, dimensions, intended use, deadline..." />
          <Err k="description" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="file" className="flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-md border border-dashed px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
            <Upload className="h-4 w-4 shrink-0 text-primary-glow" />
            <span className="min-w-0 truncate">{file ? file.name : "Upload sketch, drawing or reference (optional)"}</span>
          </label>
          <input id="file" name="file" type="file" className="sr-only" accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf,.step,.stp,.stl,.sldprt,.zip" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        </div>
      </div>
      <button type="submit" className={`${btn({ size: "lg" })} mt-7 w-full`}>Request a Consultation</button>
      {sent && (
        <p className="mt-4 flex items-center gap-2 text-sm text-primary-glow"><CheckCircle2 className="h-4 w-4" /> Your email app should open with the details — just hit send.</p>
      )}
    </form>
  );
}
