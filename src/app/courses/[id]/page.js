"use client";

import { Navbar, Sidebar } from "@/Components";
import Head from "next/head";
import Link from "next/link";

import { courses, courseCategories } from "@/Components";
import Course from "@/Components/Course/Course";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CourseId = ({ params }) => {
    // const course = courses.find((course) => course.id === params.id);
    // console.log(course);

    const router = useRouter();
    return (
        <>
            <Head>
                <title>
                    {courses.find((course) => course.id == params.id)
                        ? courses.find((course) => course.id == params.id).title
                        : "Kurs topilmadi"}{" "}
                    - DEEPEDU.UZ
                </title>
                <meta
                    name="title"
                    content={
                        courses.find((course) => course.id == params.id)
                            ? courses.find((course) => course.id == params.id)
                                  .title
                            : "Kurs topilmadi"
                    }
                />
                <meta name="description" content="DEEPEDU.UZ - Kurslar" />
            </Head>
            <Navbar />
            <Sidebar />
            <section className="pl-[180px] md:pl-[330px] pt-[80px] courses min-h-screen h-full w-full">
                <button onClick={() => router.back()} title="Ortga qaytish">
                    <Image
                        width={35}
                        height={35}
                        src="/assets/left.svg"
                        alt="back"
                    />
                </button>
                <h1>
                    {courses.find((course) => course.id == params.id)
                        ? courses.find((course) => course.id == params.id).title
                        : "Kurs topilmadi"}
                </h1>
            </section>
        </>
    );
};

export default CourseId;
