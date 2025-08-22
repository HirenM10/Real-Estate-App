using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Domain.Repositories;
using Infrastructure.Persistence;
using Infrastructure.Repositories;
using Infrastructure.Seeders;
using PMS.Infrastructure.Repositories;
using PMS.Infrastructure.Seeders;

namespace Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
    public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("REDb");
        services.AddDbContext<REDbContext>(options => options.UseSqlServer(connectionString));
        services.AddScoped<IPropertySeeder, PropertySeeder>();
        services.AddScoped<IPropertyRepository, PropertyRepository>();
        services.AddScoped<ISpaceRepository, SpaceRepository>();
    }
}
