import Link from "next/link";
import Icon from "@/components/Icon";

interface CTASectionProps {
  headline?: React.ReactNode;
  description?: string;
  buttonText?: string;
}

export default function CTASection({
  headline = <>Ready to scale<br />your business?</>,
  description = "Get a free consultation to get clarity, direction, and expert advice you can implement right away.",
  buttonText = "Contact Us",
}: CTASectionProps) {
  return (
    <section className="pt-8 md:pt-12 pb-24 md:pb-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] py-16 md:py-24 px-8 md:px-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {headline}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-center">
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-all">
                {buttonText}
                <span className="w-10 h-10 rounded-full bg-black/10 grid place-items-center">
                  <Icon icon="solar:arrow-right-linear" width={18} className="text-black" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
