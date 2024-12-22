using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
	public class ProductWithTypesAndBrandsSpec:BaseSpecification<Product>
	{
		public ProductWithTypesAndBrandsSpec(ProductSpecParams productParams)
			:base(
				 x=>(!productParams.TypeId.HasValue||x.ProductTypeId== productParams.TypeId) 
				 &&(!productParams.BrandId.HasValue||x.ProductBrandId== productParams.BrandId)
				 &&(string.IsNullOrEmpty(productParams.Search)||x.Name.ToLower().Contains(productParams.Search))
				 )
				 	
		{
			AddIncludes(x=>x.productType);
			AddIncludes(x=>x.ProductBrand);
			AddOrderBy(x=>x.Name);
			ApplyPaging(productParams.PageSize * (productParams.PageIndex-1),productParams.PageSize);
			if (!string.IsNullOrEmpty(productParams.Sort))
			{
				switch (productParams.Sort)
				{
					case "priceAsc":
						AddOrderBy(x => x.Price);
						break;

					case "priceDesc":
						AddOrderByDesc(x => x.Price);
						break;

					default:
						AddOrderBy(x => x.Name);
						break;
				}
			}

		}
		public ProductWithTypesAndBrandsSpec(int id):base(x=>x.Id==id) 
		{
			AddIncludes(x => x.productType);
			AddIncludes(x => x.ProductBrand);
		}
	}
}
