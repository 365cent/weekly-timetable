export type Schedule = {
    day: string
    startTime: string
    endTime: string
    place: string
}

export type Course = {
    code: string
    alias: string
    title: string
    instructor: string
    schedule: Schedule[]
}

export type CourseData = {
    courses: Course[]
}