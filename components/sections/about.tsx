"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <Image
              src="https://picsum.photos/seed/eco-about/1200/1200"
              alt="에코펫의 지속 가능한 패션"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              우리의 이야기
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              우리는 지구를 해치지 않는 아름다운 반려동물 패션을 만들겠다는
              단순한 아이디어에서 시작했습니다. 패스트 패션이 환경에 미치는
              영향을 깨닫고 반려동물 패션 산업에 변화를 일으키기로 결심했습니다.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              오늘날 우리는 재활용 소재와 친환경 생산 방식을 통해 멋진 외모뿐만
              아니라 지구의 더 나은 미래에도 기여하는 지속 가능한 반려동물
              패션을 선보이고 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2 gradient-text">1000+</h3>
                <p className="text-muted-foreground">행복한 고객</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2 gradient-text">50K+</h3>
                <p className="text-muted-foreground">재활용 페트병</p>
              </div>
            </div>
            <Button size="lg" className="hover-scale">
              더 알아보기
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
