using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Persistence;
using Domain.Constants;

namespace PMS.Infrastructure.Repositories;

internal class PropertyRepository(REDbContext dbContext) : IPropertyRepository
{
    public async Task<int> Create(Property entity)
    {
        dbContext.Properties.Add(entity);
        await dbContext.SaveChangesAsync();
        return entity.Id;

    }
    
    public async Task<(IEnumerable<Property> Items, int TotalCount)> GetAllAsync(
        int? propertyType = -1,
        decimal? minPrice = null,
        decimal? maxPrice = null,
        int pageNumber = 1,
        int pageSize = 10
    )
    {
        var type = propertyType == 0 ? PropertyType.House :
            (propertyType == 1 ? PropertyType.Apartment : (propertyType == 2 ? PropertyType.Condo : PropertyType.All));


        var query = dbContext.Properties.AsQueryable();

        if (type != PropertyType.All)
            query = query.Where(p => p.Type == type);

        if (minPrice.HasValue)
            query = query.Where(p => p.Price >= minPrice.Value);

        if (maxPrice.HasValue)
            query = query.Where(p => p.Price <= maxPrice.Value);

        var totalCount = await query.CountAsync();

        var properties = await query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

        return (properties, totalCount);
    }

    public async Task<Property?> GetByIdAsync(int id)
    {
        var property = await dbContext.Properties.FirstOrDefaultAsync(x => x.Id == id);
        return property;
    }
}
