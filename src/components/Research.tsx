import { MessageSquareText, ShieldCheck, Tags, Video } from "lucide-react";

export const Research = () => {
  const interests = [
    {
      icon: Video,
      title: "Video anomaly detection",
      description:
        "Detecting and localizing unusual events in real-world and surveillance footage, from short clips to long, untrimmed videos.",
      keywords: ["Temporal localization", "Long-video understanding"],
    },
    {
      icon: MessageSquareText,
      title: "Vision-language models",
      description:
        "Using multimodal LLMs to reason about what is happening in a scene, enabling open-vocabulary and training-free detection.",
      keywords: ["Multimodal LLMs", "Open-vocabulary", "Zero-shot"],
    },
    {
      icon: Tags,
      title: "Learning with limited labels",
      description:
        "Weakly supervised and multi-domain learning, so models generalize to scenes and anomaly types they were never trained on.",
      keywords: ["Weak supervision", "Domain generalization"],
    },
    {
      icon: ShieldCheck,
      title: "Explainable & grounded AI",
      description:
        "Models that justify their outputs with evidence, describing why an event is abnormal, or citing the sources behind an answer.",
      keywords: ["Explainability", "RAG", "Faithfulness"],
    },
  ];

  return (
    <section id="research" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Research</span>
          <h2 className="section-heading mt-3">Research interests</h2>
          <p className="mt-4 text-muted-foreground">
            I&apos;m currently doing research at the intersection of computer
            vision and language models, teaching machines not just to spot
            what&apos;s unusual in a video, but to explain it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="surface-hover flex flex-col p-6 md:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {interest.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {interest.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {interest.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
