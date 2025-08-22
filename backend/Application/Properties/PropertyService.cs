using Microsoft.Extensions.Logging;
using Application.Dtos;
using Domain.Entities;
using Domain.Repositories;
using AutoMapper;
using Application.Properties;

namespace Application.Properties;

internal class PropertyService(IPropertyRepository propertyRepository, 
    ILogger<PropertyService> logger,
    IMapper mapper) : IPropertyService
{
    public async Task<int> Create(CreatePropertyDto dto)
    {
        logger.LogInformation("Creating a new property");

        var property = mapper.Map<Property>(dto);

        int id = await propertyRepository.Create(property);
        return id;
    }

    public async Task<(IEnumerable<PropertyDto> Items, int TotalCount)> GetAllProperties(PropertyListDto propertyListDto)
    {
        logger.LogInformation("Getting all properties");
        var properties = await propertyRepository.GetAllAsync(propertyListDto.Type, propertyListDto.MinPrice,
        propertyListDto.MaxPrice, propertyListDto.Page, propertyListDto.PageSize);

        var propertiesDtoList = mapper.Map<IEnumerable<PropertyDto>>(properties.Items);

        return (propertiesDtoList, properties.TotalCount);
    }

    public async Task<PropertyDto?> GetById(int id)
    {
        logger.LogInformation($"Getting property {id}");
        var property = await propertyRepository.GetByIdAsync(id);

        var propertyDto = mapper.Map<PropertyDto>(property);

        return propertyDto;
    }
}
