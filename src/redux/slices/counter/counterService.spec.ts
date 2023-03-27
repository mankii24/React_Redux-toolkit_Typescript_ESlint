import { getUser } from './counterService';
import axios from 'axios';

describe('counter reducer', () => {
  const mockGet = jest.spyOn(axios, 'get');

  test('call success', async () => {
    mockGet.mockImplementation(() => Promise.resolve({ data: 'sucess' }));
    const output = await getUser();
    expect(output).toEqual('sucess');
  });

  test('call error', async () => {
    mockGet.mockImplementation(() =>
      Promise.reject({ code: 'test', message: 'error' }),
    );
    const output = await getUser();
    expect(output).toEqual(null);
  });
});

// export const getUser = async () => {
//     try {
//       const { data } = await axios.get(`${CONFIG.BASE_URL}/users`);
//       return data;
//     } catch (e) {
//       const error = e as Error;
//       // console.log(error);
//       toast.error(error.message);
//     }
//   }
