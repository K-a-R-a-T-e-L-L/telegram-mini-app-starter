"use client";

import { Select } from "@mantine/core";
import { useLocale } from "next-intl";
import { FC } from "react";

import { localesMap } from "@/core/i18n/config";
import { setLocale } from "@/core/i18n/locale";
import { Locale } from "@/core/i18n/types";

export const LocaleSwitcher: FC = () => {
  const locale = useLocale();

  const onChange = (value: string | null) => {
    if (value) {
      const locale = value as Locale;
      setLocale(locale);
    }
  };

  return (
    <Select
      value={locale}
      w="60px"
      p="0"
      onChange={onChange}
      data={localesMap.map((locale) => ({
        value: locale.key,
        label: locale.title === "English" ? "En" : "Ru",
      }))}
      styles={{
        input: {
          background: "rgba(238, 130, 238, 0.1)",
          fontSize: "14px",
          padding: "10px",
          paddingBottom: "13px",
        },
        dropdown: {
          maxHeight: 200,
          overflowY: "auto",
        },
      }}
    />
  );
};
