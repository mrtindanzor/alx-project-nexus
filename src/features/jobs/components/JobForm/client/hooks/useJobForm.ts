"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { POST_JOB_DEFAULT } from "@/features/jobs/constants";
import type { PostJobPaths, PostJobPathValue } from "../../jobform.types";
import { JobFormContext } from "../components/JobFormProvider";

export function useJobForm() {
  const [skill, setSkill] = useState("");
  const [job, setJob] = useState(POST_JOB_DEFAULT);

  const register = useCallback(
    <T extends PostJobPaths>(name: T) => {
      const value = typeof job[name] === "string" ? job[name] : "";

      return {
        value,
        name,
        autoComplete: "true",
        onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
          setJob((job) => {
            if (typeof job[name] === "string")
              return { ...job, [name]: e.target.value };

            return job;
          });
        },
      };
    },
    [job],
  );

  const setValue = useCallback(
    <T extends PostJobPaths>(name: T, value: PostJobPathValue<T>) => {
      setJob((job) => ({ ...job, [name]: value }));
    },
    [],
  );

  const registerSkill = useCallback(() => {
    return {
      onChange(e: ChangeEvent<HTMLInputElement>) {
        setSkill(e.target.value);
      },
      onKeyDown(e: KeyboardEvent) {
        if (e.key !== "Enter") return;

        setSkill("");
        if (job.skills.includes(skill)) return;

        setValue("skills", [...job.skills, ...skill.trim().split(",")]);
      },
      value: skill,
      name: "skill",
      autoComplete: "true",
    };
  }, [setValue, job.skills, skill]);

  const removeSkill = useCallback(
    (index: number) => {
      const root = [...job.skills];
      root.splice(index, 1);

      setValue("skills", root);
    },
    [job.skills, setValue],
  );

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const reset = useCallback(() => setJob(POST_JOB_DEFAULT), []);

  return {
    job,
    handleSubmit,
    reset,
    register,
    registerSkill,
    setValue,
    removeSkill,
  };
}

export function useJobFormCtx() {
  const ctx = useContext(JobFormContext);
  if (!ctx) throw Error("PostJobContext not defined");

  return ctx;
}
