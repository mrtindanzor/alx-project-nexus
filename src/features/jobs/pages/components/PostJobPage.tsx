import { JobForm, JobFormHeader } from "@/features/jobs";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import { postJotPageVariants } from "../contants";

export function PostJobPage() {
  return (
    <>
      <JobFormHeader />
      <main className="pt-20 px-4 max-w-4xl w-full mx-auto">
        <FramerAnimatePosition animate="show" variants={postJotPageVariants}>
          <JobForm />
        </FramerAnimatePosition>
      </main>
    </>
  );
}
