using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[ApiExplorerSettings(IgnoreApi = true)] // Suppress Swagger documentation
	[Route("errors/{code:int}")] // Add a distinct prefix like "api/errors"
	[ApiController]
	public class ErrorController : BaseApiController
	{
		public IActionResult Error(int code)
		{
			return new ObjectResult(new ApiResponse(code));
		}
	}

}
