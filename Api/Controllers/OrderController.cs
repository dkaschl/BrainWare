namespace Api.Controllers
{
    using Api.Infrastructure;
    using Api.Infrastructure.Service;
    using Api.Models;
    using Api.Models.Contracts;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/order")]
    public class OrderController : ControllerBase
    {

        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            this._orderService = orderService;
        }

        [HttpGet("{companyId}")]
        public IEnumerable<OrderSummaryDto> GetOrdersByCompany(int companyId = 1)
        {
            return _orderService.GetOrdersByCompany(companyId);
        }
    }
}
