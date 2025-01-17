import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { AnimatedLayout } from '../../components/AnimatedLayout'

function MyComponent() {
  return (
    <AnimatedLayout>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* 기존 내용 */}
        </main>
        <Footer />
      </div>
    </AnimatedLayout>
  )
}

export default MyComponent;

