import { courses } from "../CoursesData/CoursesData";

const Course = ({ courseId }) => {
    // console.log(courseId);
    // console.log(courses);
    return (
        // create a course element with tailwind css
        <div className="flex w-[500px] h-[200px] rounded-[20px] course">
            <div
                className="w-[40%]"
                style={{
                    backgroundImage: `url(${courses[courseId].img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px 0 0 20px",
                }}
            >
                <img
                    className="h-full rounded-l-[20px] hidden"
                    src={courses[courseId].img}
                    alt="course IMG"
                />
            </div>
            <div className="w-[60%] p-[15px] text-[16px] font-normal break-all flex flex-col gap-2 relative">
                <div className="text-[18px] font-medium">
                    {courses[courseId].title}
                </div>
                <div className="font-thin break-all text-[14px]">
                    {courses[courseId].description}
                </div>
                <div className="font-thin text-[14px] absolute bottom-[1px]">
                    <span className="course__price--discount">
                        <span className="font-normal">Asl qiymati: </span>
                        <span className="line-through">
                            {courses[courseId].price} So'm
                        </span>
                    </span>
                    <br />
                    <span className="course__price--real">
                        <span className="font-normal">Chegirmada: </span>
                        {courses[courseId].price -
                            courses[courseId].dicount}{" "}
                        so'm
                    </span>
                    <br />
                    <span>
                        <br />
                        <span className="font-normal">Toifa: </span>
                        {courses[courseId].category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Course;
