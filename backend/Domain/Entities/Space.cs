using System.ComponentModel.DataAnnotations;
using Domain.Constants;

namespace Domain.Entities;
public class Space
{
    public int Id { get; set; }

    [Required]
    public int PropertyId { get; set; }
    public Property Property { get; set; } = default!;

    [Required]
    public SpaceType Type { get; set; }

    [Range(1, int.MaxValue)]
    public int SizeSqFt { get; set; }

    [Range(0, double.MaxValue)]
    public decimal PricePerMonth { get; set; }
}