import PostSection from "@/components/home/post-section";
import Hero from "../components/home/hero";
import Divider from "@/components/shared/divider";
import ProjectSection from "@/components/home/project-section";

export default function Home() {
  return (
    <section>
      <Hero />
      <Divider />
      <PostSection />
      <Divider />
      <ProjectSection />
    </section>
  );
}
