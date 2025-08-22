using Domain.Entities;

namespace Domain.Repositories;

public interface ISpaceRepository
{
    Task<IEnumerable<Space>> GetAllAsync();
}
