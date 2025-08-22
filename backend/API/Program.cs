using Application.Extehnsions;
using Infrastructure.Extensions;
using Infrastructure.Seeders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // frontend URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");

var scope = app.Services.CreateScope();
var seeder = scope.ServiceProvider.GetRequiredService<IPropertySeeder>();
await seeder.Seed();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
