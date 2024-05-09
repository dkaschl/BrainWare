using Api.Models.Contracts;

namespace Api.Infrastructure.Service
{
    public interface IOrderService
    {
        public IEnumerable<OrderSummaryDto> GetOrdersByCompany(int CompanyId);
    }
}
