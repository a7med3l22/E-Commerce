using API.MiddleWares;
using Core.Interfaces;
using Infrastructure;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace API
{
	public class Program
	{
		public static async Task Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			builder.Services.AddDbContext<StoreContext>(opt =>
			{
				opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
			});
			builder.Services.AddSingleton<IConnectionMultiplexer, ConnectionMultiplexer>();	
			builder.Services.AddScoped<IBasketRepository, BasketRepository>();
			builder.Services.AddScoped<IProductRepository, ProductRepository>();
			builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
			builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
			// Register ConnectionMultiplexer
			builder.Services.AddSingleton<IConnectionMultiplexer>(sp =>
			{
				var configuration = builder.Configuration.GetConnectionString("Redis");
				return ConnectionMultiplexer.Connect(configuration);
			});
			// Add CORS Policy
			builder.Services.AddCors(opt =>
			{
				opt.AddPolicy("CorsPolicy", policy =>
				{
					policy.WithOrigins("https://localhost:4200")
						  .AllowAnyHeader()
						  .AllowAnyMethod();
				});
			});

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseMiddleware<ExceptionMiddleWare>();
			app.UseStatusCodePagesWithReExecute("/errors/{0}");
			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseCors("CorsPolicy");
			app.UseAuthentication(); // تأكد من إضافة المصادقة
			app.UseAuthorization();

			app.MapControllers();

			using var scope = app.Services.CreateScope();
			var services = scope.ServiceProvider;
			var context = services.GetRequiredService<StoreContext>();
			var logger = services.GetRequiredService<ILogger<Program>>();

			try
			{
				await context.Database.MigrateAsync();
				await StoreContextSeed.SeedAsync(context);
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "An error occurred during the migration process.");
				throw; // إعادة رمي الاستثناء في حالة حدوثه
			}

			app.Run();
		}
	}
}
//hello everyone i`am ahmed alaa! mohamed!