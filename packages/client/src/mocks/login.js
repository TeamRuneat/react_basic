import {rest} from 'msw';

const userList = [
  {
    id: 'asdfe3123',
    email: 'skuukzky@gmail.com',
    password: 'asdfedsg66',
  },
  {
    id: 'sdff335',
    email: 'jennierubyjane@gmail.com',
    password: 'gsdfsa8a',
  },
  {
    id: 'jgdfgf565',
    email: 'roses_are_rosie@gmail.com',
    password: 'asdfeff2e',
  },
];

export const handler = [
  rest.get('/users', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(userList));
  }),

  rest.post('/users', (req, res, ctx) => {
    userList.push(req.body);
    return res(ctx.status(201));
  })
];


