import { Href } from "expo-router/build/link/href";

export default function (current: string): Href {
  if (current.includes("news-per-id")) return "/home/fragments/news/";
  if (current.includes("files-per-id")) return "/home/fragments/files/";
  if (current.includes("finance-per-student")) return "/home/fragments/finance/";
  if (current.includes("request-form")) return "/home/fragments/request/";
  if (current.includes("schedule-per-student")) return "/home/fragments/schedule/";
  if (current.includes("school-report-per-student")) return "/home/fragments/school-report/";
  if (current.includes("auth")) return "/choose-school/";
  return 'Rota indefinida';
}