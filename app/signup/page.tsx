"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupPage() {
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
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" required />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password-confirm">비밀번호 확인</Label>
                <Input
                  id="password-confirm"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span className="text-muted-foreground">
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      이용약관
                    </Link>
                    과{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      개인정보처리방침
                    </Link>
                    에 동의합니다
                  </span>
                </label>
              </div>

              <Button type="submit" className="w-full hover-scale">
                회원가입
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                이미 계정이 있으신가요?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  로그인
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
