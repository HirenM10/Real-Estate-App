using System.Net;
using AutoMapper;
using Domain.Entities;

namespace Application.Dtos;

public class PropertyProfile : Profile
{
    public PropertyProfile()
    {
        CreateMap<CreatePropertyDto, Property>();

        CreateMap<Property, PropertyDto>();
    }
}
