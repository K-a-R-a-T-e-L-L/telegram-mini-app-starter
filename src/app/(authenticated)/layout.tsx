"use client";
import { setLocale } from "@/core/i18n/locale";
import { useDidMount } from "@/hooks/useDidMount";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Wrapper from "@/components/layout/Wrapper";
import { initData, useSignal } from "@tma.js/sdk-react";
import { ReactNode, useEffect } from "react";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import ErrorNotificationProvider from "@/components/providers/ErrorNotificationProvider";

const ContentView = ({ children }: { children: ReactNode }) => {
  const initDataUser = useSignal(initData.user);

  useEffect(() => {
    initDataUser && setLocale(initDataUser.language_code);
  }, [initDataUser]);

  return (
    <ReactQueryProvider>
      <ErrorNotificationProvider>
          <Wrapper bgColor="black">{children}</Wrapper>
      </ErrorNotificationProvider>
    </ReactQueryProvider>
  );
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  const didMount = useDidMount();

  return didMount ? <ContentView children={children} /> : <LoadingSpinner />;
}
