using Domain.Constants;

namespace Application.Dtos;

public class PropertyDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public string? Address { get; set; }
    public required string Type { get; set; }
    public decimal Price { get; set; }
    public List<SpaceDto>? Spaces { get; set; }
}