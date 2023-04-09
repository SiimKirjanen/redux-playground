import React from 'react'

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test/render-with-providers'
import Posts from '.'

const fakePostsResponse = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
]

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
      return res(ctx.json(fakePostsResponse), ctx.delay(150))
    })
  ];

const server = setupServer(...handlers)

describe('Counter', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

  it('should render empty Posts', () => {
    renderWithProviders(<Posts />);

    screen.getByText('Posts');
    screen.getByRole('button', {
      name: /load posts/i
    })
  });

  it('should fetch posts', async () => {
    renderWithProviders(<Posts />);

    fireEvent.click( screen.getByRole('button', {name: /load posts/i}) );
    screen.getByText('Loading...');

    expect(await screen.findByText(fakePostsResponse[0].title)).toBeInTheDocument();
    expect(await screen.findByText(fakePostsResponse[1].title)).toBeInTheDocument();
  });
});
