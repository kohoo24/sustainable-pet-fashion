"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-600/20 z-0" />
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/eco-pattern/1920/1080')] opacity-10 z-0" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            지속 가능한
            <br />
            반려동물 패션
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            환경을 생각하는 친환경 소재로 만든
            <br />
            우리 아이들을 위한 특별한 패션을 만나보세요.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="text-lg px-8 hover-scale">
              쇼핑하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 hover-scale"
            >
              더 알아보기
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px]"
        >
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/eco-hero/1200/1200"
              alt="친환경 패션을 입은 반려동물"
              fill
              className="object-contain animate-float"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
