import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import {configDotenv} from 'dotenv';

configDotenv();

const apiDocs =
  process.env.API_DOCS_URL || "http://localhost:3001/api-docs-json";

export default defineConfig({
  input: {
    path: "./openapi.json",
  },

  root: ".",
  output: {
    path: `${apiDocs}?v=${new Date().getTime()}`,
    // path: "./src/shared/api",
    clean: true,
    extension: {
      ".ts": "",
    },
  },

  plugins: [
    pluginOas({
      validate: true,
    }),

    pluginTs({
      enumType: "asConst",
      optionalType: "questionToken",
    }),

    pluginClient({
      importPath: "../../kubb-client",
      pathParamsType: "object",
      paramsCasing: "camelcase",
      dataReturnType: "data",
    }),

    pluginReactQuery({
      client: {
        importPath: "../../kubb-client",
        dataReturnType: "data",
      },
      query: {
        methods: ["get"],
      },
      mutation: {
        methods: ["post", "patch", "put", "delete"],
      },
      pathParamsType: "object",
      paramsCasing: "camelcase",
      suspense: false,
    }),
  ],
});
