const productModel = require('../../schema/product');
const productController = require('../../controller/product');
const nodeMockHttp = require('node-mocks-http');
productModel.create = jest.fn();

const req = nodeMockHttp.createRequest();
const res = nodeMockHttp.createResponse();
const next = jest.fn();

describe('Product Controller create', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    req.body = {
      name: 'test',
      description: 'test',
      price: 1000,
    };
  });
  it('should have a createProduct function', () => {
    expect(typeof productController.createProdcut).toBe('function');
  });

  it('should call productModel.create', () => {
    productController.createProdcut(req, res, next);
    expect(productModel.create).toBeCalledWith(req.body);
  });

  it('should return status code 201', () => {
    productController.createProdcut(req, res, next);
    expect(res.statusCode).toEqual(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should return json body in response', () => {
    productModel.create.mockReturnValue(req.body);
    productController.createProdcut(req, res, next);
    expect(res._getJSONData()).toStrictEqual(req.body);
  });
});
