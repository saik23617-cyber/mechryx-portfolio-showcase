import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const mediaSources = [
  "src/data/projects.ts",
  "src/data/engineering-motion.ts",
  "src/components/site/Logo.tsx",
];

describe("Vercel portfolio media", () => {
  for (const source of mediaSources) {
    it(`${source} uses real, exact-case bundled media instead of Lovable-only URLs`, () => {
      const code = readFileSync(resolve(root, source), "utf8");
      expect(code).not.toContain(".asset.json");
      expect(code).not.toContain("/__l5e/assets-v1/");
      const imports = [...code.matchAll(/from\s+"@\/(assets\/[^"?]+)\?url"/g)];
      expect(imports.length).toBeGreaterThan(0);
      for (const match of imports) {
        const relative = match[1];
        if (!relative) throw new Error("Missing media import path");
        const file = resolve(root, "src", relative);
        const filename = relative.split("/").at(-1);
        expect(readdirSync(dirname(file))).toContain(filename);
        expect(statSync(file).size).toBeGreaterThan(0);
        const bytes = readFileSync(file);
        if (/\.png$/.test(file)) expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
        if (/\.jpe?g$/.test(file)) expect(bytes.subarray(0, 2).toString("hex")).toBe("ffd8");
        if (/\.mp4$/.test(file)) expect(bytes.subarray(4, 8).toString()).toBe("ftyp");
        if (/\.webm$/.test(file)) expect(bytes.subarray(0, 4).toString("hex")).toBe("1a45dfa3");
      }
    });
  }
});