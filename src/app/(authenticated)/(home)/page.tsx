"use client";
import { useTranslations } from "next-intl";
import { PageContainer } from "@/components/layout/Page";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <PageContainer back={false}>
      {'<HomeScreen />'}
    </PageContainer>
  );
}
