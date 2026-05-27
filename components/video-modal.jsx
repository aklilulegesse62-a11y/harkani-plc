"use client";

import { ArrowUpRight, PlayCircle } from "lucide-react";

function getWatchUrl(videoUrl) {
  if (!videoUrl.includes("/embed/")) {
    return videoUrl;
  }

  const videoId = videoUrl.split("/embed/")[1]?.split("?")[0];
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : videoUrl;
}

function getEmbedUrl(videoUrl) {
  return videoUrl
    .replace("https://www.youtube.com/embed/", "https://www.youtube-nocookie.com/embed/")
    .replace("http://www.youtube.com/embed/", "https://www.youtube-nocookie.com/embed/");
}

export default function VideoModal({ posterUrl, videoUrl }) {
  const embedUrl = `${getEmbedUrl(videoUrl)}?rel=0&modestbranding=1&playsinline=1`;
  const watchUrl = getWatchUrl(videoUrl);

  return (
    <div className="glass-panel mx-auto w-full max-w-[320px] overflow-hidden sm:max-w-[340px] xl:max-w-[360px]">
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="h-32 w-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.76)), url(${posterUrl})`
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md">
              <PlayCircle className="h-5 w-5 text-[#f6f1ea]" />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d8c18a]">
                Video testimonial
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                Watch a diaspora delivery story
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="overflow-hidden border border-white/10 bg-black">
          <div className="aspect-[9/16] w-full">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={embedUrl}
              title="Harkani.Plc client video testimonial"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 pb-5 pt-1">
        <p className="text-sm leading-6 text-white/60">
          Real project communication for diaspora clients who need visibility from afar.
        </p>
        <a
          className="inline-flex shrink-0 items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:border-white/20 hover:text-white"
          href={watchUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
