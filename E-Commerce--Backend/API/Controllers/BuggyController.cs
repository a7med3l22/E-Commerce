﻿using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BuggyController : BaseApiController
	{
		private readonly StoreContext _context;

		public BuggyController(StoreContext context)
		{
			_context = context;
		}
		[HttpGet("notfound")]
		public IActionResult GetNotFoundRequest()
		{
			var thing = _context.Products.Find(50);
			if (thing == null)
			{
				return NotFound(new ApiResponse(404));
			}
			return Ok();
		}
		[HttpGet("serverError")]
		public IActionResult GetServerError()
		{
			var thing = _context.Products.Find(50);
			var thingToReturn=thing.ToString();
			return Ok();
		}

		[HttpGet("badRequest")]
		public IActionResult GetBadRequest()
		{
			return BadRequest(new ApiResponse(400));
		}
		[HttpGet("notfound/{id}")]
		public IActionResult GetNotFoundRequest(int id)
		{
			return Ok();
		}
	}
}
