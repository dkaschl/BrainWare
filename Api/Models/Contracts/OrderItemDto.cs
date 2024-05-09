namespace Api.Models.Contracts
{
    public class OrderItemDto
    {
        public int OrderId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public ProductDto Product { get; set; }
    }
}
