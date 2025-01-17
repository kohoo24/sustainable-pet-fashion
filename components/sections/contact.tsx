"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "메시지가 전송되었습니다!",
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">문의하기</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            제품이나 지속 가능성에 대해 궁금하신 점이 있으신가요?
            <br />
            언제든 문의해 주세요!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  이름
                </label>
                <Input
                  id="name"
                  placeholder="이름을 입력하세요"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                제목
              </label>
              <Input
                id="subject"
                placeholder="문의 제목을 입력하세요"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                내용
              </label>
              <Textarea
                id="message"
                placeholder="문의 내용을 입력하세요"
                required
                className="w-full min-h-[150px]"
              />
            </div>
            <Button type="submit" size="lg" className="w-full hover-scale">
              메시지 보내기
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
