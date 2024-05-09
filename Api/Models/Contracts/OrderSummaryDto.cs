namespace Api.Models.Contracts
{
    public class OrderSummaryDto
    {
        public int OrderId { get; set; }
        public string CompanyName { get; set; }
        public string Description { get; set; }
        public decimal OrderTotal { get; set; }
        public IEnumerable<OrderItemDto> OrderProducts { get; set; }
    }
}
