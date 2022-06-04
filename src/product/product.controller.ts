import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProductRequestDto,
  FindOneRequestDto,
  DecreaseStockRequestDto,
} from './product.dto';
import {
  CreateProductResponse,
  FindOneResponse,
  PRODUCT_SERVICE_NAME,
  DecreaseStockResponse,
} from './product.pb';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;
  private logger = new Logger('MSA-PRODUCT');

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'CreateProduct')
  private createProduct(
    payload: CreateProductRequestDto,
  ): Promise<CreateProductResponse> {
    this.logger.log(JSON.stringify(payload));
    return this.service.createProduct(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'FindOne')
  private findOne(payload: FindOneRequestDto): Promise<FindOneResponse> {
    this.logger.log(JSON.stringify(payload));
    return this.service.findOne(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'DecreaseStock')
  private decreaseStock(
    payload: DecreaseStockRequestDto,
  ): Promise<DecreaseStockResponse> {
    this.logger.log(JSON.stringify(payload));
    return this.service.decreaseStock(payload);
  }
}
