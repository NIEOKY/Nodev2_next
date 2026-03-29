"use client";

import { InfiniteSlider } from "./ui/infinite-slider";

const logos = [
  {
    name: "Nvidia",
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    height: "h-5",
  },
  {
    name: "Column",
    src: "https://html.tailus.io/blocks/customers/column.svg",
    height: "h-4",
  },
  {
    name: "GitHub",
    src: "https://html.tailus.io/blocks/customers/github.svg",
    height: "h-4",
  },
  {
    name: "Nike",
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    height: "h-5",
  },
  {
    name: "Lemon Squeezy",
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    height: "h-5",
  },
  {
    name: "Laravel",
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    height: "h-4",
  },
  {
    name: "Lilly",
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    height: "h-7",
  },
  {
    name: "OpenAI",
    src: "https://html.tailus.io/blocks/customers/openai.svg",
    height: "h-6",
  },
];

export default function LogoCloud() {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-muted-foreground">
              Empresas que confían en nosotros
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {logos.map((logo) => (
                <div className="flex" key={logo.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={`mx-auto ${logo.height} w-fit dark:invert`}
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    height="20"
                    width="auto"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
