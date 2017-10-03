import * as API from './api';

describe('API Test', () => {
  it('Makes an API call to for images', () => {
    jest.spyOn(API, 'imgurSearch').mockImplementation(() => Promise.resolve({
      headers: 'Some Headers',
      data: {
        status: 200,
        success: true,
        data: [{ id: 1 }],
      },
    }));

    const expected = {
      data: [{ id: 1 }],
      status: 200,
      success: true,
    };

    API.imgurSearch('bulldog', 1).then((data) => {
      expect(data.data).toEqual(expected);
    });
  });
});
