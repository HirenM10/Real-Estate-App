namespace Application.Dtos;
public record CreateSpaceDto
{
    public required string Type { get; set; }
    public int SizeSqFt { get; set; }
    public decimal PricePerMonth { get; set; }
}