using Domain.Constants;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities;
public class Property
{
    public int Id { get; set; }

    [Required, MaxLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string? Address { get; set; }
    public PropertyType Type { get; set; }
    public decimal Price { get; set; }
    public ICollection<Space> Spaces { get; set; } = new List<Space>();
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
