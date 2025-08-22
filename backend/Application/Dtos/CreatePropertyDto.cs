namespace Application.Dtos;
public class CreatePropertyDto
{
    public required string Name { get; set; }
    public string? Address { get; set; }
    public required string Type { get; set; }
    public decimal Price { get; set; }
    public List<CreateSpaceDto>? Spaces { get; set; }
}