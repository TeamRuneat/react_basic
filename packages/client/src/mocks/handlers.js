import { rest } from 'msw';

const serverUrl = 'https://43.200.176.108.nip.io';
export const handlers = [
  rest.get(`${serverUrl}/shop-list`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 1,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 2,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 3,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 4,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 5,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 6,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 7,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 8,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
        {
          id: 9,
          title: '어쭈구리밥상',
          type: ['한식', '백반'],
          rating: '3.7',
          ratingCount: '15',
          tags: ['순한맛', '집밥'],
          averagePrice: '10000'
        },
      ])
    );
  }),
];
