using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
	public class MappingProfiles:Profile
	{
		public MappingProfiles()
		{
			CreateMap<Product, ProductToReturnDto>()
				.ForMember(p => p.ProductBrand, o => o.MapFrom(p => p.ProductBrand.Name))
				.ForMember(p => p.productType, o => o.MapFrom(p => p.productType.Name))
				.ForMember(p => p.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
				;
		}
	}
}
