/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  export interface ProcessEnv {
    T_ACCESS_TOKEN_KEY: string;
    T_ACCESS_TOKEN_SECRET: string;
    T_CONSUMER_KEY: string;
    T_CONSUMER_SECRET: string;
    API_KEY: string;
  }
}
