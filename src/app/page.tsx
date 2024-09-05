import { Suspense } from 'react'
import Timetable from '@/components/timetable'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Timetable />
    </Suspense>
  )
}