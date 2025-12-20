import { emitEvent, isTMA, mockTelegramEnv } from "@tma.js/bridge";

export async function mockEnv(): Promise<void> {
  if (process.env.NODE_ENV !== "development") return;

  const inTma = await isTMA("complete");
  if (inTma) return;

  const themeParamsRaw = {
    accent_text_color: "#6ab2f2",
    bg_color: "#17212b",
    button_color: "#5288c1",
    button_text_color: "#ffffff",
    destructive_text_color: "#ec3942",
    header_bg_color: "#17212b",
    hint_color: "#708499",
    link_color: "#6ab3f3",
    secondary_bg_color: "#232e3c",
    section_bg_color: "#17212b",
    section_header_text_color: "#6ab3f3",
    subtitle_text_color: "#708499",
    text_color: "#f5f5f5",
  } as const;

  mockTelegramEnv({
    launchParams: {
      tgWebAppThemeParams: themeParamsRaw,

      tgWebAppData: new URLSearchParams({
        auth_date: ((Date.now() / 1000) | 0).toString(),
        hash: "some-hash",
        signature: "some-signature",
        user: JSON.stringify({
          id: 1,
          first_name: "Vladislav",
        }),
      }).toString(),

      tgWebAppVersion: "8.4",
      tgWebAppPlatform: "tdesktop",
      tgWebAppStartParam: "debug",
    },

    onEvent(e) {
      if (e.name === "web_app_request_theme") {
        emitEvent("theme_changed", { theme_params: themeParamsRaw });
      }

      if (e.name === "web_app_request_viewport") {
        emitEvent("viewport_changed", {
          height: window.innerHeight,
          width: window.innerWidth,
          is_expanded: true,
          is_state_stable: true,
        });

        emitEvent("safe_area_changed", { top: 0, right: 0, bottom: 0, left: 0 });
        emitEvent("content_safe_area_changed", { top: 0, right: 0, bottom: 0, left: 0 });
      }
    },
  });

  console.info("⚠️ Telegram Mini App environment mocked (dev only)");
}
