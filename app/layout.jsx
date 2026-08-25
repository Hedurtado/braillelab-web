import "./globals.css";
import "./ui-polish.css";

export const metadata = {
  title: {
    default: "BrailleTech Challenge Ecuador 2026",
    template: "%s · BrailleTech",
  },
  description: "BrailleTech Challenge Ecuador 2026, una iniciativa de BrailleLab Ecuador.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
