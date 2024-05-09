namespace Api.Infrastructure.Service
{
    using Api.Models.Contracts;
    using Api.Models.Entities;
    using Microsoft.EntityFrameworkCore;

    public class OrderService : IOrderService
    {
        private ProjectDbContext _context;

        public OrderService()
        {
            _context = new ProjectDbContext(ConfigurationHelper.config);
        }
        public IEnumerable<OrderSummaryDto> GetOrdersByCompany(int CompanyId)
        {
            var orders = (from o in _context.Orders
                          join op in _context.Orderproducts on o.OrderId equals op.OrderId into items
                          where o.CompanyId == CompanyId
                          select new OrderSummaryDto
                          {
                              CompanyName = o.Company.Name,
                              Description = o.Description,
                              OrderId = o.OrderId,
                              OrderTotal = items.Sum(i => i.Quantity * i.Price),
                              OrderProducts = items.Select(i => new OrderItemDto
                              {
                                  OrderId = i.OrderId,
                                  Price = i.Price,
                                  Quantity = i.Quantity,
                                  Product = new ProductDto
                                  {
                                      Id = i.ProductId,
                                      Name = i.Product.Name
                                  }
                              })
                          });

            return orders;
        }
    }
}