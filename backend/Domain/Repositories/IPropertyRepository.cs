using Domain.Entities;

namespace Domain.Repositories;

public interface IPropertyRepository
{
    Task<(IEnumerable<Property> Items, int TotalCount)> GetAllAsync(
        int? propertyType = -1,
        decimal? minPrice = null,
        decimal? maxPrice = null,
        int pageNumber = 1,
        int pageSize = 10
    );

    Task<Property?> GetByIdAsync(int id);
    Task<int> Create(Property entity);
}
