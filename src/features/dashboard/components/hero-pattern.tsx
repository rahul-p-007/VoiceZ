import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      {/* <BackgroundGradientAnimation /> */}

      {/* Wavy Overlay */}
      <WavyBackground
        colors={["#3B82F6", "#8B5CF6", "#EC4899", "#F43F5E", "#FDE047"]}
        backgroundFill="transparent"
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        waveWidth={1}
        waveYOffset={100}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
}
