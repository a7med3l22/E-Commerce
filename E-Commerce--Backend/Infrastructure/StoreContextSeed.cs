using Core.Entities;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure
{
	public class StoreContextSeed
	{
		public static async Task SeedAsync(StoreContext context)
		{
			if(!context.ProductBrands.Any())
			{
				var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
				var brands=JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
				context.ProductBrands.AddRange(brands);
			}

			if (!context.Products.Any())
			{
				var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
				var products = JsonSerializer.Deserialize<List<Product>>(productsData);
				context.Products.AddRange(products);
			}

			if (!context.ProductTypes.Any())
			{
				var TypesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
				var Types = JsonSerializer.Deserialize<List<ProductType>>(TypesData);
				context.ProductTypes.AddRange(Types);
			}
			if(context.ChangeTracker.HasChanges())
			{
				await context.SaveChangesAsync();
			}
		}
	}
}
