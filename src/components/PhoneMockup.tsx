import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  ratio: number;
  width?: number;
  priority?: boolean;
  className?: string;
}

/** Moldura de celular simples ao redor de uma captura de tela. */
export default function PhoneMockup({
  src,
  alt,
  ratio,
  width = 220,
  priority,
  className = "",
}: PhoneMockupProps) {
  const height = Math.round(width / ratio);
  return (
    <div
      className={`shrink-0 rounded-[2rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl shadow-black/30 overflow-hidden dark:border-zinc-700 dark:bg-zinc-700 ${className}`}
      style={{ width: width + 12 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="block h-auto w-full rounded-[1.5rem]"
        sizes={`${width}px`}
      />
    </div>
  );
}
