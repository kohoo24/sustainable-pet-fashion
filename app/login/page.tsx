"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-600/20 z-0" />
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/eco-pattern/1920/1080')] opacity-10 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-lg shadow-lg border border-border"
          >
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <h1 className="text-3xl font-bold gradient-text mb-2">
                  에코펫
                </h1>
              </Link>
              <p className="text-muted-foreground">
                환경을 생각하는 반려동물 패션
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button type="submit" className="w-full hover-scale">
                로그인
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <Link
                href="/forgot-password"
                className="text-primary hover:underline"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>

            <div className="mt-6 text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                아직 계정이 없으신가요?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  회원가입
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    또는
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full hover-scale">
                게스트로 둘러보기
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
