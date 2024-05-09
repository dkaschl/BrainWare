using Api;
using Api.Infrastructure.Service;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Api.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IOrderService, OrderService>();
builder.Services.AddSingleton<ICompanyService, CompanyService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

var configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .Build();

ConfigurationHelper.Initialize(configuration);


// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
