using Domain.Constants;

namespace Application.Dtos;
public record PropertyListDto
{
    public int Type { get; set; }
    public decimal? MinPrice { get; set; }
    public decimal? MaxPrice { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
}