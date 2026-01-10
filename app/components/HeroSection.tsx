import { GraduationCap, CodeXml } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-center py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
        Hey, I'm Ioannis
      </h1>
      <p className="text-green-300 mb-4">Computer Science Student</p>
      <div className="flex justify-center gap-4">
        <span className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default">
          <GraduationCap size={16} />
          Student
        </span>
        <span className="flex items-center gap-2 px-4 py-2 bg-green-900 rounded-full text-green-200 text-sm cursor-default">
          <CodeXml size={16} />
          Developer
        </span>
      </div>
    </section>
  );
}