"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const designs = [
  {
    id: 1,
    name: "캐주얼 컬렉션",
    description: "일상적인 산책과 놀이를 위한 편안하고 스타일리시한 디자인",
    price: 39900,
    image: "https://picsum.photos/seed/eco-casual/800/800",
    badge: "신규",
  },
  {
    id: 2,
    name: "시그니처 라인",
    description: "특별한 날을 위한 프리미엄 친환경 디자인",
    price: 49900,
    image: "https://picsum.photos/seed/eco-signature/800/800",
    badge: "인기",
  },
  {
    id: 3,
    name: "아웃도어 시리즈",
    description: "자연 속 활동을 위한 기능성 디자인",
    price: 44900,
    image: "https://picsum.photos/seed/eco-outdoor/800/800",
    badge: "추천",
  },
  {
    id: 4,
    name: "홈웨어 컬렉션",
    description: "실내 생활을 위한 편안하고 세련된 디자인",
    price: 19900,
    image: "https://picsum.photos/seed/eco-home/800/800",
    badge: "베스트",
  },
];

const Designs = () => {
  return (
    <section id="designs" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">추천 디자인</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            반려동물의 개성과 지구를 생각하는 마음을
            <br />
            담아낸 특별한 디자인을 만나보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden card-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={design.image}
                  alt={design.name}
                  fill
                  className="object-cover hover-scale"
                />
                <Badge className="absolute top-4 right-4">{design.badge}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{design.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {design.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {design.price.toLocaleString()}원부터
                  </span>
                  <Button size="sm">자세히 보기</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="hover-scale">
            전체 디자인 보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Designs;
