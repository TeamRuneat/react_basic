// @see https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token-response-body
export type KakaoToken = {
  token_type: string;
  access_token: string;
  expires_in: number; // 만료시간 (초)
  refresh_token: string;
  refresh_token_expires_in: number;
  // id_token?: string; // OpenID Connect 활성 토큰에 대한 발급 요청인 경우
  // scope?: string; // OpenID Connect 활성 토큰에 대한 발급 요청인 경우
};

// @see https://developers.kakao.com/docs/latest/ko/kakaologin/common#user-info-kakao-account
export type KakaoUserInfoProperties = {
  profile_nickname: string;
  profile_image: string;
  account_email: string;
  name?: string;
  gender?: string;
  age_range?: string;
};

// @see https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info-response-body
export type KakaoUserInfo = {
  id: number;
  has_signed_up?: boolean; // 자동연결 비활성화시 내려옴, 연결하기 호출 완료여부
  connected_at: number; // Datetime, 서비스연결 완료 시각 UTC
  synched_at: number; // Datetime, 싱크 간편가입을 통한 로그인 시각 UTC
  // Kakao 앱 등록 정보에 따라 다름
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile_image_needs_agreement: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
      is_default_image?: boolean;
    };
    has_email: boolean;
    email_needs_agreement: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    email: string;
  };
};

export type LogoutRestResponse = {
  id: number; // long
};
