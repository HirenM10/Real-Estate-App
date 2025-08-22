namespace Application.Dtos;
public class SpaceDto
{
    public int Id { get; set; }
    public int PropertyId { get; set; }
    public required string Type { get; set; }
    public int SizeSqFt { get; set; }
    public decimal PricePerMonth { get; set; }
}