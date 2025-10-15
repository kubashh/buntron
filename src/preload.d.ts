import { Api } from "../core/preload"

declare global {
  interface Window {
    api: Api
  }
}
