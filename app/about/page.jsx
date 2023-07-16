import Divider from "@/components/shared/divider";
import Container from "@/components/layout/container";

const Page = () => {
  return (
    <section className="w-full mt-8 mb-24">
      <Container className="space-y-7">
        <h1 className="text_gradient">About.</h1>
        <p>
          Greetings, world! Allow me to introduce myself: Nyoman Agus Budhiarta
          Waisnawa, but you can call me Bewe. I&apos;m a passionate software
          developer, specializing in cutting-edge web technologies and website
          development.
        </p>
        <p>
          My journey into the world of coding began in 2020 when I stumbled upon
          a captivating programming video. I vividly remember the thrill of
          creating my first project, a Python-based tic-tac-toe game. While
          I&apos;ll admit that I leaned heavily on video tutorials at the time
          (😂), the sense of accomplishment I felt was immense. Since then, my
          fascination with coding has persisted, particularly in the realm of
          frontend development.
        </p>
        <p>
          At present, I&apos;m pursuing a degree in Institut Teknologi & Bisnis
          STIKOM Bali. My daily routine revolves around completing college
          assignments and embarking on personal projects that pique my interest.
          Beyond coding, I love devouring technology articles, staying active on
          social media, and cherishing quality time spent with my loved ones.
        </p>
        <Divider />
        <p>
          If you&apos;re seeking assistance for your project or organization,
          I&apos;m more than happy to lend a hand. Feel free to reach out to me
          through any of the social media platforms listed below. Let&apos;s
          collaborate or simply connect and explore the possibilities together!
        </p>
      </Container>
    </section>
  );
};
export default Page;
