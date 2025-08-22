using Microsoft.AspNetCore.Mvc;
using Application.Dtos;
using Application.Properties;

namespace API.Controllers;

[ApiController]
[Route("api/properties")]
public class PropertyController(IPropertyService propertyService): ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] PropertyListDto propertyListDto)
    {
        var result = await propertyService.GetAllProperties(propertyListDto);
        
        return Ok(new
        {
            TotalCount = result.TotalCount,
            Page = propertyListDto.Page,
            PageSize = propertyListDto.PageSize,
            Items = result.Items
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var property = await propertyService.GetById(id);
        if (property is null)
            return NotFound();
        
        return Ok(property);
    }

    [HttpPost]
    public async Task<IActionResult> CreateProperty([FromBody]CreatePropertyDto createPropertyDto)
    {
        int id = await propertyService.Create(createPropertyDto);
        return CreatedAtAction(nameof(GetById), new { id }, null);
    }
}
