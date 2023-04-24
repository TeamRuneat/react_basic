import {rest} from 'msw';

export const handlers = [
  rest.get('/hello', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({hello: 'world'}));
  }),
];
