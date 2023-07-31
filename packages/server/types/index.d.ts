import type { SessionData as SessionDataBase } from 'express-session';
import { KakaoToken } from '../src/auth/auth.interface';
export interface SessionData extends SessionDataBase {
  tokens: KakaoToken;
}
