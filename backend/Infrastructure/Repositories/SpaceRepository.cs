using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Persistence;

namespace Infrastructure.Repositories;

internal class SpaceRepository(REDbContext dbContext) : ISpaceRepository
{
    public async Task<IEnumerable<Space>> GetAllAsync()
    {
        var spaces = await dbContext.Properties.ToListAsync();
        return (IEnumerable<Space>)spaces;
    }
}
