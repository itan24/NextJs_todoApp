"use server";

import { revalidateTag } from "next/cache";

export const getTask = async (url: string) => {
  const fetchTask = await fetch(url, {
    next: {
      tags: ["task"],
    },
  });
  const res = await fetchTask.json();
  return res;
};

export const addTask = async (url: string, data: any) => {
  const fetchTask = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidateTag("task");

  return "task added .... ";
};

export const delTask = async (url: string, data: any) => {
  const fetchTask = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidateTag("task");

  return "task delete .... ";
};

export const updateTask = async (url: string, data: any) => {
  const fetchTask = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidateTag("task");

  return "task updated .... ";
};
