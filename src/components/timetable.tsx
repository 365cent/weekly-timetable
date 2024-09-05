'use client'

import React, { useState, useEffect } from 'react'
import { Clock, Search } from 'lucide-react'
import { courseData } from '@/lib/courseData'
import { useSearchParams } from 'next/navigation'
import type { Course } from '@/lib/types'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const timeSlots = [
    '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30'
]

const courseColors = [
    'rgba(219, 234, 254, 0.7)', // Light Blue
    'rgba(254, 243, 199, 0.7)', // Light Yellow
    'rgba(220, 252, 231, 0.7)', // Light Green
    'rgba(254, 226, 226, 0.7)', // Light Red
    'rgba(237, 233, 254, 0.7)', // Light Purple
]

export default function WeeklyTimetable() {
    const [courseCodes, setCourseCodes] = useState('')
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
    const searchParams = useSearchParams()

    useEffect(() => {
        const courseParam = searchParams.get('course')
        if (courseParam && !courseCodes) {
            setCourseCodes(courseParam)
        }
    }, [searchParams, courseCodes])

    useEffect(() => {
        if (courseCodes.trim() === '*') {
            setFilteredCourses(courseData.courses)
        } else if (courseCodes.trim() !== '') {
            const codes = courseCodes.split(',').map(code => code.trim().toUpperCase()).filter(code => code !== '' && code !== 'CS')
            const filtered = courseData.courses.filter(course =>
                codes.some(code =>
                    (course.code.toUpperCase().includes(code) && code.length > 2) ||
                    (course.alias && course.alias.toUpperCase().includes(code) && code.length > 2)
                )
            )
            setFilteredCourses(filtered)
        } else {
            setFilteredCourses([])
        }
    }, [courseCodes])

    const getClassesForTimeSlot = (day: string, time: string) => {
        return filteredCourses.filter(course =>
            course.schedule.some(schedule =>
                schedule.day === day &&
                schedule.startTime <= time &&
                schedule.endTime > time
            )
        ).map(course => ({
            ...course,
            ...course.schedule.find(schedule =>
                schedule.day === day &&
                schedule.startTime <= time &&
                schedule.endTime > time
            )
        }))
    }

    const renderTimeSlot = (day: string, time: string, rowIndex: number) => {
        const classesForTimeSlot = getClassesForTimeSlot(day, time)
        const isStacked = classesForTimeSlot.length > 1

        return (
            <td key={`${day}-${time}`} className="border p-1 w-32 h-16 align-top relative">
                {classesForTimeSlot.map((classInfo, index) => {
                    if (classInfo.startTime !== time) return null
                    const startIndex = timeSlots.indexOf(classInfo.startTime)
                    const endIndex = classInfo.endTime ? timeSlots.indexOf(classInfo.endTime) : -1;
                    const rowSpan = endIndex - startIndex

                    if (rowIndex > startIndex) return null

                    return (
                        <div
                            key={`${classInfo.code}-${index}`}
                            className="absolute inset-1 flex flex-col justify-center items-center text-xs p-1 overflow-hidden"
                            style={{
                                height: `${rowSpan * 4 - 0.5}rem`,
                                backgroundColor: courseColors[index % courseColors.length],
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                zIndex: isStacked ? index + 1 : 'auto',
                                opacity: isStacked ? 0.9 : 1,
                            }}
                        >
                            <p className="font-medium text-blue-600 truncate text-center w-full">{classInfo.title}</p>
                            <p className="text-gray-500 truncate text-center w-full">{classInfo.code} {classInfo.alias && `/ ${classInfo.alias}`}</p>
                            <p className="text-gray-500 truncate text-center w-full">{classInfo.place}</p>
                        </div>
                    )
                })}
            </td>
        )
    }

    return (
        <main className="bg-gray-100">
            <div className="container mx-auto p-4 min-h-screen">
                <h1 className="text-3xl font-bold my-6 text-center text-gray-800">Weekly Timetable</h1>
                <div className="mb-4 flex justify-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter course codes (e.g., CS9542,CS4411) or * for all"
                            value={courseCodes}
                            onChange={(e) => setCourseCodes(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 sm:w-96"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="border p-2 bg-gray-100 w-20 sticky left-0 z-10">Time</th>
                                {days.map(day => (
                                    <th key={day} className="border p-2 bg-gray-100 w-32">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((time, rowIndex) => (
                                <tr key={time}>
                                    <td className="border p-2 text-center w-20 h-16 sticky left-0 bg-white z-10">
                                        <Clock className="inline-block mr-1 h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-600">{time}</span>
                                    </td>
                                    {days.map(day => renderTimeSlot(day, time, rowIndex))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}