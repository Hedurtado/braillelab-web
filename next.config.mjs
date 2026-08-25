import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  output: "export",
  outputFileTracingRoot: projectRoot,
  trailingSlash: true,
};

export default nextConfig;
