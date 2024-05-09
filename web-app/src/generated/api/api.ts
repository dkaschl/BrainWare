export * from './company.service';
import { CompanyService } from './company.service';
export * from './company.serviceInterface';
export * from './order.service';
import { OrderService } from './order.service';
export * from './order.serviceInterface';
export const APIS = [CompanyService, OrderService];
