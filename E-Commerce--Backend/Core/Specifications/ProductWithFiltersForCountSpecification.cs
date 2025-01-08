using Core.Entities;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
	public class ProductWithFiltersForCountSpecification:BaseSpecification<Product>
	{
		public ProductWithFiltersForCountSpecification(ProductSpecParams productparams)
			:base(
				 x=>
							 (string.IsNullOrEmpty(productparams.Search) || x.Name.ToLower().Contains(productparams.Search)) &&
			 (!productparams.BrandId.HasValue || x.ProductBrandId == productparams.BrandId) &&
			 (!productparams.TypeId.HasValue || x.ProductTypeId == productparams.TypeId))

				 
		{

		}
	}
}
