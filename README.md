# `getPlatformProxy()` + `@cloudflare/ai`

Error when using `getPlatformProxy()` and `@cloudflare/ai` together.

## How to reproduce

1. Clone this repository.
2. `npm i`
3. `npm run start`

## Error message

```
$ tsx src/index.mts
/Users/yusuke/work/c/fetch-duplex/node_modules/wrangler/wrangler-dist/cli.js:29572
            throw a;
            ^

TypeError: RequestInit: duplex option is required when sending a body.
    at new Request (/Users/yusuke/work/c/fetch-duplex/node_modules/undici/lib/fetch/request.js:491:15)
    at Request (/Users/yusuke/work/c/fetch-duplex/node_modules/miniflare/src/http/request.ts:34:3)
    at ProxyStubHandler.#fetcherFetchCall (/Users/yusuke/work/c/fetch-duplex/node_modules/miniflare/src/plugins/core/proxy/client.ts:594:19)
    at ProxyStubHandler.#call (/Users/yusuke/work/c/fetch-duplex/node_modules/miniflare/src/plugins/core/proxy/client.ts:501:52)
    at Proxy.fetch (/Users/yusuke/work/c/fetch-duplex/node_modules/miniflare/src/plugins/core/proxy/client.ts:484:25)
    at InferenceSession.run (/Users/yusuke/work/c/fetch-duplex/node_modules/@cloudflare/ai/src/session.ts:72:28)
    at Ai.run (/Users/yusuke/work/c/fetch-duplex/node_modules/@cloudflare/ai/src/ai.ts:113:44)
    at <anonymous> (/Users/yusuke/work/c/fetch-duplex/src/index.mts:7:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v20.10.0
error Command failed with exit code 7.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## Work-around

Adding `duplex:'half'` to fetch option in the `@cloudflare/ai` solves the problem.
