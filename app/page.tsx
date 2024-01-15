import {
  Braces,
  Building2,
  Code2,
  KeyboardMusic,
  Linkedin,
  Mail,
  Presentation,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-svh min-w-full place-items-center">
      <div className="container flex flex-col gap-12">
        {/* <h1 className="font-display transition-all text-5xl uppercase text-balance [--fv-wght:700]">
          Jan Willem Henckel
        </h1> */}
        <p className="font-display text-base sm:text-lg lg:text-4xl flex flex-wrap items-baseline gap-y-2 gap-x-[0.5ch] select-none">
          <span>
            Hej, I&apos;m{" "}
            <span className="[--fv-wdth:120] [--fv-wght:600]">Jan</span> —
          </span>
          <span className="inline-flex items-baseline">
            <Badge href="https://github.com/djfarly">
              <Code2 className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
              fullstack web developer
            </Badge>
            <span>,</span>
          </span>
          <span className="inline-flex items-baseline">
            <Badge href="https://neat.school/">
              <Presentation className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
              coach
            </Badge>
            <span>,</span>
          </span>
          <span className="inline-flex items-baseline gap-x-[0.5ch]">
            <Badge href="https://open.spotify.com/artist/6cMoQnsxJyoTfOgPrStBTL">
              <KeyboardMusic className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
              musician
            </Badge>
            <span>and</span>
          </span>
          <span className="inline-flex items-baseline">
            <Badge href="https://diostudios.de">
              <Building2 className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
              entrepreneur
            </Badge>
            <span>.</span>
          </span>
          <span>Let&apos;s connect on</span>
          <Badge href="https://www.linkedin.com/in/jan-willem-henckel">
            <Linkedin className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
            LinkedIn
          </Badge>
          <span>or be</span>
          <span>oldschool</span>
          <span>and drop</span>
          <span>me an</span>
          <span className="inline-flex items-baseline">
            <Badge href="mailto:web@jan.cologne">
              <Mail className="size-4 lg:size-9 -my-1 -ml-1 mr-[0.6ch] self-center" />
              email
            </Badge>
            <span>.</span>
          </span>
        </p>
      </div>
    </main>
  );
}

function Badge({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-baseline px-4 py-1.5 lg:px-7 lg:py-2.5 [--fv-wght:500] [--fv-wdth:120] leading-none text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 transition-colors rounded-full outline-none focus-visible:ring ring-indigo-700 ring-offset-2 ring-offset-white"
    >
      {children}
    </Link>
  );
}
