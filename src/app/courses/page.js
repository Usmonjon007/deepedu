"use client";

import { Navbar, Sidebar } from "@/Components";
import Head from "next/head";
import Link from "next/link";

import { courses, courseCategories } from "@/Components";
import Course from "@/Components/Course/Course";
import Image from "next/image";

const Courses = () => {
    // console.log(courses);

    return (
        <>
            <Head>
                <title>Kurslar - DEEPEDU.UZ</title>
                <meta name="description" content="DEEPEDU.UZ - Kurslar" />
            </Head>
            <Navbar />
            <Sidebar />
            <section className="w-full min-h-screen h-full courses bg-cover bg-center bg-no-repeat">
                <div className="pl-[180px] md:pl-[330px] pt-[80px] overflow-hidden relative flex flex-col gap-[30px] w-[96%]">
                    {courseCategories.map((category) => {
                        return (
                            <div
                                key={category.id}
                                className="flex flex-col gap-[30px]"
                            >
                                <p className="text-[16px] font-normal">
                                    {category.title}
                                </p>
                                <div
                                    className="flex p-[10px] justify-start items-center gap-[48px] overflow-x-auto overflow-y-hidden course__category-item"
                                    onWheel={(e) => {
                                        if (
                                            e.target.classList.contains(
                                                "course__category-item"
                                            )
                                        ) {
                                            e.target.scrollLeft += e.deltaY;
                                        } else {
                                            if (
                                                e.target.parentElement.classList.contains(
                                                    "course__category-item"
                                                )
                                            ) {
                                                e.target.parentElement.scrollLeft +=
                                                    e.deltaY;
                                            } else {
                                                if (
                                                    e.target.parentElement.parentElement.classList.contains(
                                                        "course__category-item"
                                                    )
                                                ) {
                                                    e.target.parentElement.parentElement.scrollLeft +=
                                                        e.deltaY;
                                                } else {
                                                    if (
                                                        e.target.parentElement.parentElement.parentElement.classList.contains(
                                                            "course__category-item"
                                                        )
                                                    ) {
                                                        e.target.parentElement.parentElement.parentElement.scrollLeft +=
                                                            e.deltaY;
                                                    } else {
                                                        if (
                                                            e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
                                                                "course__category-item"
                                                            )
                                                        ) {
                                                            e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft +=
                                                                e.deltaY;
                                                        } else {
                                                            if (
                                                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
                                                                    "course__category-item"
                                                                )
                                                            ) {
                                                                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.scrollLeft +=
                                                                    e.deltaY;
                                                            } else {
                                                                if (
                                                                    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
                                                                        "course__category-item"
                                                                    )
                                                                ) {
                                                                    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.scrollLeft +=
                                                                        e.deltaY;
                                                                } else {
                                                                    if (
                                                                        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
                                                                            "course__category-item"
                                                                        )
                                                                    ) {
                                                                        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.scrollLeft +=
                                                                            e.deltaY;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                >
                                    <button
                                        className="absolute left-[330px] md:left-[280px] outline-none focus:ring rounded-full"
                                        onClick={(e) => {
                                            e.target.focus();
                                            e.target.parentElement.parentElement.scrollLeft -= 548;
                                        }}
                                    >
                                        <Image
                                            width={35}
                                            height={35}
                                            alt="btn"
                                            src="/assets/left.svg"
                                        />
                                    </button>
                                    {category.courses.map((courseId) => {
                                        return (
                                            <Link
                                                href={`/courses/${courseId}`}
                                                key={courseId}
                                                className="w-[500px] inline-block hover:scale-105 transition-all duration-300 focus:outline-none focus:ring rounded-[20px]"
                                            >
                                                <Course
                                                    courseId={courseId - 1}
                                                    key={courseId}
                                                />
                                            </Link>
                                        );
                                    })}
                                    <button
                                        className="absolute right-[-30px] outline-none focus:ring rounded-full z-50"
                                        onClick={(e) => {
                                            e.target.focus();
                                            e.target.parentElement.parentElement.scrollLeft += 548;
                                        }}
                                    >
                                        <Image
                                            width={35}
                                            height={35}
                                            alt="btn"
                                            src="/assets/right.svg"
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Courses;
