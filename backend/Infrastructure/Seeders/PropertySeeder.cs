using Domain.Constants;
using Domain.Entities;
using Infrastructure.Persistence;
using Infrastructure.Seeders;

namespace PMS.Infrastructure.Seeders;

internal class PropertySeeder(REDbContext dbContext) : IPropertySeeder
{
    public async Task Seed()
    {
        if (await dbContext.Database.CanConnectAsync())
        {
            if (!dbContext.Properties.Any())
            {
                var properties = GetProperties();
                dbContext.Properties.AddRange(properties);
                await dbContext.SaveChangesAsync();
            }
        }
    }

    private IEnumerable<Property> GetProperties()
    {
        List<Property> properties = [
            new Property { Name = "A Greenwood Apartments", Type = PropertyType.Apartment, Price = 120000 },
            new Property { Name = "A Tech Park Plaza", Type = PropertyType.House, Price = 850000 },
            new Property { Name = "A Sunset Villas", Type = PropertyType.Condo, Price = 300000 },

            new Property { Name = "B Greenwood Apartments", Type = PropertyType.All, Price = 20000 },
            new Property { Name = "B Tech Park Plaza", Type = PropertyType.House, Price = 750000 },
            new Property { Name = "B Sunset Villas", Type = PropertyType.Condo, Price = 900000 },

            new Property { Name = "C Greenwood Apartments", Type = PropertyType.Apartment, Price = 820000 },
            new Property { Name = "C Tech Park Plaza", Type = PropertyType.House, Price = 950000 },
            new Property { Name = "C Sunset Villas", Type = PropertyType.Condo, Price = 600000 },

            new Property { Name = "D Greenwood Apartments", Type = PropertyType.Apartment, Price = 520000 },
            new Property { Name = "D Tech Park Plaza", Type = PropertyType.House, Price = 450000 },
            new Property { Name = "D Sunset Villas", Type = PropertyType.Condo, Price = 300000 },

            new Property { Name = "E Greenwood Apartments", Type = PropertyType.Apartment, Price = 220000 },
            new Property { Name = "E Tech Park Plaza", Type = PropertyType.House, Price = 750000 },
            new Property { Name = "E Sunset Villas", Type = PropertyType.Condo, Price = 380000 },

            new Property { Name = "F Greenwood Apartments", Type = PropertyType.Apartment, Price = 720000 },
            new Property { Name = "F Tech Park Plaza", Type = PropertyType.House, Price = 450000 },
            new Property { Name = "F Sunset Villas", Type = PropertyType.Condo, Price = 900000 },

            new Property { Name = "G Greenwood Apartments", Type = PropertyType.Apartment, Price = 520000 },
            new Property { Name = "G Tech Park Plaza", Type = PropertyType.House, Price = 990000 },
            new Property { Name = "G Sunset Villas", Type = PropertyType.Condo, Price = 320000 },

            new Property { Name = "H Greenwood Apartments", Type = PropertyType.Apartment, Price = 230000 },
            new Property { Name = "H Tech Park Plaza", Type = PropertyType.House, Price = 420000 },
            new Property { Name = "H Sunset Villas", Type = PropertyType.Condo, Price = 210000 }
        ];

        return properties;
    }
}
