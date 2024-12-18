using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProductController : BaseApiController
	{
		//private readonly IProductRepository _productRepository;
		private readonly IGenericRepository<Product> _productRepo;
		private readonly IGenericRepository<ProductBrand> _brandRepo;
		private readonly IGenericRepository<ProductType> _typeRepo;
		private readonly IMapper _mapper;

		public ProductController(
			  //IProductRepository productRepository,
				IGenericRepository<Product> productRepo,
				IGenericRepository<ProductBrand> brandRepo,
				IGenericRepository<ProductType> typeRepo,
				IMapper mapper
			)
		{
			//_productRepository = productRepository;
			_productRepo = productRepo;
			_brandRepo = brandRepo;
			_typeRepo = typeRepo;
			_mapper = mapper;
		}
		[HttpGet]
		public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery]ProductSpecParams productParams)
		{
			var spec=new ProductWithTypesAndBrandsSpec(productParams);
			var countspec=new ProductWithFiltersForCountSpecification(productParams);
			var totalitems = await _productRepo.CountAsync(countspec);
			var products=await _productRepo.ListAsync(spec);
			var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);
			return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex,productParams.PageSize,totalitems,data));

		}
		[HttpGet("{id}")]
		public async Task<ActionResult<ProductToReturnDto>> GetProductById(int id)
		{
			var spec = new ProductWithTypesAndBrandsSpec(id);
			var product =await _productRepo.GetEntityWithSpec(spec);
			return _mapper.Map<Product,ProductToReturnDto>(product);
		}
		[HttpGet("Brands")]
		public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetBrandsAsync()
		{
			return Ok(await _brandRepo.ListAllAsync());
		}
		[HttpGet("Types")]
		public async Task<ActionResult<IReadOnlyList<ProductType>>> GetTypesAsync()
		{
			return Ok(await _typeRepo.ListAllAsync());
		}
	}
}
