import Container from "@/components/layout/container";
import AboutText from "@/components/about/about-text";

export const metadata = {
  title: "About",
  description: "About Nyoman Agus Budhiarta Waisnawa",
};

const Page = () => {
  return (
    <section className="w-full mt-8 mb-24">
      <Container className="lg:w-6/12">
        <h1 className="text_gradient">About.</h1>
        <p className="mt-2 mb-10">Unveiling the story behind the face</p>
        <AboutText />
      </Container>
    </section>
  );
};
export default Page;
