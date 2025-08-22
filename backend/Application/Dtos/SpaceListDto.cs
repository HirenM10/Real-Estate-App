namespace Application.Dtos;
public record SpaceListDto
{
    public int? PropertyId { get; set; }
    public string? Type { get; set; }
    public int? MinSize { get; set; }
    public int Page = 1;
    public int PageSize = 10;
    public string? Sort = null;
}