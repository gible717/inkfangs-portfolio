interface ViewSourceProps {
  file: string;
  text?: string;
}

export default function ViewSource({ file, text }: ViewSourceProps) {
  const githubUrl = `https://github.com/inkfangs/portfolio/blob/main/${file}`;

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-[#666666] opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer group"
    >
      <span>{text || "view source"}</span>
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
