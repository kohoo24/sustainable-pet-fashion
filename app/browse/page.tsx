'use client'

import { useState } from 'react'
import { Header } from '../../components/Header'
import Image from 'next/image'

const designs = [
  { id: 1, name: "에코 강아지 티셔츠", image: "/placeholder.svg?height=300&width=300", category: "강아지", style: "캐주얼" },
  { id: 2, name: "리사이클 고양이 스웨터", image: "/placeholder.svg?height=300&width=300", category: "고양이", style: "따뜻함" },
  { id: 3, name: "업사이클 강아지 코트", image: "/placeholder.svg?height=300&width=300", category: "강아지", style: "고급" },
  // 더 많은 디자인을 추가할 수 있습니다.
]

export default function Browse() {
  const [filter, setFilter] = useState({ category: '', style: '' })

  const filteredDesigns = designs.filter(design => 
    (!filter.category || design.category === filter.category) &&
    (!filter.style || design.style === filter.style)
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">디자인 둘러보기</h1>
        <div className="mb-8 flex space-x-4">
          <select 
            className="border rounded px-2 py-1"
            value={filter.category}
            onChange={(e) => setFilter({...filter, category: e.target.value})}
          >
            <option value="">모든 카테고리</option>
            <option value="강아지">강아지</option>
            <option value="고양이">고양이</option>
          </select>
          <select 
            className="border rounded px-2 py-1"
            value={filter.style}
            onChange={(e) => setFilter({...filter, style: e.target.value})}
          >
            <option value="">모든 스타일</option>
            <option value="캐주얼">캐주얼</option>
            <option value="따뜻함">따뜻함</option>
            <option value="고급">고급</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <div key={design.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={design.image || "/placeholder.svg"} alt={design.name} width={300} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{design.name}</h3>
                <p className="text-gray-600">{design.category} - {design.style}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

