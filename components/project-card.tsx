import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  rotation: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  image,
  stack,
  rotation,
  index,
}: Props) {
  return (
    <article
      className={`
        group
        relative
        isolate
        overflow-visible
        transition-all
        duration-500
       hover:-translate-y-2
hover:rotate-[0.2deg]
        ${rotation}
        ${index === 1 ? "md:mt-14" : ""}
      `}
    >
      <div className="relative">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
      {/* BACK PAPER STACK */}
<div
  className="
    absolute
    inset-0
    translate-x-5
    translate-y-5
    rotate-[2.2deg]
    rounded-[2px]
    bg-[#ddd6c7]
    opacity-80
    blur-[0.2px]
    shadow-[0_18px_40px_rgba(0,0,0,0.14)]
  "
/>

<div
  className="
    absolute
    inset-0
    translate-x-2
    translate-y-2
    rotate-[-1.2deg]
    rounded-[2px]
    border
    border-black/[0.03]
    bg-[#f1eadc]
    shadow-[0_10px_24px_rgba(0,0,0,0.1)]
  "
>
  <div
    className="
      absolute
      inset-0
      opacity-[0.08]
      mix-blend-multiply
    "
    style={{
      backgroundImage: `
        repeating-radial-gradient(
          rgba(0,0,0,0.04) 0px,
          transparent 1px
        )
      `,
      backgroundSize: "5px 5px",
    }}
  />
</div>

      {/* MAIN PAPER */}
      <div
        className="
          torn-edge
          paper-texture
          paper-light
          paper-edge
          relative
          overflow-hidden
          border
          border-black/[0.06]
          bg-[var(--surface-container-lowest)]
          p-6
          md:p-8
          before:absolute
before:inset-0
before:bg-[linear-gradient(145deg,rgba(255,255,255,0.55),transparent_45%)]
before:pointer-events-none
before:content-['']
        "
      >
        <div
  className="
    absolute
    inset-0
    opacity-[0.5]
    mix-blend-multiply
    pointer-events-none
  "
  style={{
    backgroundImage:
      "url('https://png.pngtree.com/png-vector/20240617/ourmid/pngtree-vertical-close-up-of-brown-crumpled-paper-texture-background-png-image_12457533.png')",
      // "url('https://cdn.pixabay.com/photo/2017/01/27/00/54/old-2012064_640.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(1) contrast(1.1)",
  }}
/>
        {/* PAPER SHADOW */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            shadow-[0_1px_1px_rgba(0,0,0,0.03),0_4px_8px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.08)]
          "
        />

        {/* PAPER FIBERS */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.05]
            mix-blend-multiply
          "
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(0,0,0,0.03) 0px,
                rgba(0,0,0,0.03) 1px,
                transparent 1px,
                transparent 3px
              )
            `,
          }}
        />

        {/* STAIN */}
        <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-black/[0.03] blur-3xl" />

        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/40 blur-3xl" />

        {/* IMAGE */}
        <div
          className="
            relative
            mb-6
            rotate-[0.3deg]
p-2
            overflow-hidden
            border
            border-black/10
            bg-[#ddd7ca]
            shadow-inner
          "
        >
          {/* photo shadow */}
          <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]" />

          {/* photo grain */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              opacity-20
              mix-blend-overlay
            "
            style={{
              backgroundImage: `
                repeating-radial-gradient(
                  rgba(255,255,255,0.4) 0px,
                  transparent 1px
                )
              `,
              backgroundSize: "4px 4px",
            }}
          />

          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="
              h-56
              w-full
              object-cover
              sepia-[0.08]
              grayscale
              contrast-[1.05]
              brightness-[0.98]
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:grayscale-0
              saturate-[0.92]
            "
            style={{
  imageRendering: "auto",
}}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20">
          <h3
            className="
              mb-3
              font-(--font-hanken)
              text-2xl
              tracking-[-0.03em]
              text-(--primary)
              md:text-3xl
            "
          >
            {title}
          </h3>

          <p
            className="
              mb-6
              leading-relaxed
              text-(--on-surface-variant)
            "
          >
            {description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {stack.map((item, i) => (
              <span
                key={item}
                className={`
                  ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}
                  border
                  border-black/5
                  bg-[#ece7da]
                  px-3
                  py-1
                  text-sm
                  font-semibold
                  text-(--primary)
                  shadow-sm
                `}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM PAPER CURL */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-16
            w-16
            bg-gradient-to-tl
            from-black/[0.05]
            to-transparent
            opacity-60
          "
        />
      </div>
  </div>
    </article>
  );
}