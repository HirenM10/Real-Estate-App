using Application.Dtos;
using Domain.Entities;

namespace Application.Properties
{
    public interface IPropertyService
    {
        Task<(IEnumerable<PropertyDto> Items, int TotalCount)> GetAllProperties(PropertyListDto propertyListDto);
        Task<PropertyDto?> GetById(int id);
        Task<int> Create(CreatePropertyDto dto);
    }
}