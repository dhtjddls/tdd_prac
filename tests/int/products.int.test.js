const request = require('supertest');
const app = require('../../server');

let newProductData = {
  name: 'phone',
  description: 'some description',
  price: 10000,
};

it('POST /api/products', async () => {
  const response = await request(app)
    .post('/api/products')
    .send(newProductData);

  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe(newProductData.name);
  expect(response.body.description).toBe(newProductData.description);
  expect(response.body.price).toBe(newProductData.price);
});

it('should return 500 on POST /api/products', async () => {
  const response = await request(app)
    .post('/api/products')
    .send({ name: 'phone' })
    .expect(500);

  expect(response.statusCode).toBe(500);
  expect(response.body).toStrictEqual({
    message:
      'Product validation failed: description: Path `description` is required.',
  });
});
