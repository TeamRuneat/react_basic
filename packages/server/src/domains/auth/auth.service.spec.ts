import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'KAKAO_REDIRECT_URL') return 'localhost';
              return undefined;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it.skip('[method] getUserToken: 카카오 로그인 토큰을 받아온다', async () => {
    const expected = await service.getUserToken('token');
    console.log(expected);
  });

  it('[method] createAuthParameters: kakao auth 용 querystring 을 만든다', () => {
    const expected = service.createAuthParameters();

    expect(expected).toBeInstanceOf(URLSearchParams);
    expect(expected.get('client_id')).toBeDefined();
    expect(expected.get('redirect_uri')).toBeDefined();
    expect(expected.get('redirect_uri')).toMatch(/localhost.*/);
    expect(expected.get('response_type')).toEqual('code');
  });
});
