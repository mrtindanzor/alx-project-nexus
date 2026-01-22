import { motionVariants } from "@/shared/features/Framer";

export const jobPageVariants = motionVariants({ hidden: { y: 30 } });
export const jobsPageVariants = motionVariants({
  hidden: {},
  show: { transition: { duration: 1.4 } },
});
export const postJotPageVariants = motionVariants({ hidden: { y: -50 } });
