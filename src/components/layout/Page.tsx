"use client";

import { backButton } from "@tma.js/sdk-react";
import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";

//Обёртка для страниц (с пропсом кнопки back)
export function PageContainer({
  children,
  back = true,
}: PropsWithChildren<{
  /**
   * @default true
   */
  back?: boolean;
}>) {
  const router = useRouter();

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(() => {
      router.back();
    });
  }, [router]);

  return <>{children}</>;
}
