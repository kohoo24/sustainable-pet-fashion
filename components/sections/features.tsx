"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "친환경 소재",
    description:
      "모든 제품은 지속 가능한 재활용 소재로 만들어져 환경 영향을 최소화합니다.",
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "지속 가능한 생산",
    description:
      "폐기물과 에너지 소비를 최소화하는 친환경적인 생산 과정을 채택했습니다.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "반려동물 편안함",
    description:
      "신중하게 선택된 소재와 인체공학적 디자인으로 반려동물의 편안함을 최우선으로 생각합니다.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "스타일리시한 디자인",
    description:
      "트렌디하고 세련된 디자인으로 반려동물의 개성을 돋보이게 합니다.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            에코펫의 특별함
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            지속 가능성과 스타일을 결합하여 반려동물을 위한
            <br />
            완벽한 패션을 만들어냅니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow card-shadow"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
