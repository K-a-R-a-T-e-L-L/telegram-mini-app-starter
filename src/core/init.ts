import {
  init as initSDK,
  backButton,
  initData,
  miniApp,
  themeParams,
  viewport,
} from "@tma.js/sdk-react";

import { emitEvent, isTMA, mockTelegramEnv } from "@tma.js/bridge";

export default async function init(options: {
  eruda: boolean;
  mockForMacOS: boolean;
}): Promise<void> {
  // ✅ MOCK окружения (dev / macOS / browser)
  // Важно: мок лучше делать ДО initSDK()
  if (options.mockForMacOS) {
    const inTma = await isTMA("complete");
    if (!inTma) {
      const themeParamsRaw = {
        bg_color: "#17212b",
        text_color: "#f5f5f5",
        hint_color: "#708499",
        link_color: "#6ab3f3",
        button_color: "#5288c1",
        button_text_color: "#ffffff",
        secondary_bg_color: "#232e3c",
        header_bg_color: "#17212b",
        accent_text_color: "#6ab2f2",
        destructive_text_color: "#ec3942",
        section_bg_color: "#17212b",
        section_header_text_color: "#6ab3f3",
        subtitle_text_color: "#708499",
      } as const;

      mockTelegramEnv({
        launchParams: {
          tgWebAppThemeParams: themeParamsRaw,
          tgWebAppVersion: "8.4",
          tgWebAppPlatform: "tdesktop",
          tgWebAppStartParam: "debug",
          tgWebAppData: new URLSearchParams({
            auth_date: ((Date.now() / 1000) | 0).toString(),
            hash: "mock-hash",
            signature: "mock-signature",
            user: JSON.stringify({
              id: 1,
              first_name: "Vladislav",
            }),
          }).toString(),
        },

        // Чтобы SDK-компоненты (theme/viewport) корректно “запрашивали” состояние в браузере
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
    }
  }

  initSDK();

  // Eruda
  if (options.eruda) {
    void import("eruda").then(({ default: eruda }) => {
      eruda.init();
      eruda.position({ x: window.innerWidth - 50, y: 0 });
    });
  }

  // ✅ Telegram UI / components
  backButton.mount();

  // ✅ Init data (восстановление сохранённых launch params при hash-router и т.п.)
  initData.restore();

  // ✅ Mini App
  miniApp.mount();
  miniApp.ready.ifAvailable();

  // ✅ Theme params -> CSS vars
  themeParams.mount();
  themeParams.bindCssVars();

  // ✅ Viewport -> CSS vars
  await viewport.mount();
  viewport.bindCssVars();
}
